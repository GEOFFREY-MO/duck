// Background script for DuckConnect extension

interface CacheItem {
  id: string;
  url: string;
  title: string;
  content: string;
  type: 'page' | 'video' | 'audio' | 'image';
  size: number;
  cachedAt: Date;
  expiresAt: Date;
  encrypted: boolean;
}

class DuckConnectBackground {
  private isOnline: boolean = navigator.onLine;
  private isDuckMode: boolean = false;
  private cacheSize: number = 0;

  constructor() {
    this.init();
  }

  private async init() {
    // Listen for online/offline events
    window.addEventListener('online', () => {
      this.isOnline = true;
      this.syncCachedData();
    });

    window.addEventListener('offline', () => {
      this.isOnline = false;
    });

    // Load saved state
    const result = await chrome.storage.local.get(['isDuckMode', 'cacheSize']);
    this.isDuckMode = result.isDuckMode || false;
    this.cacheSize = result.cacheSize || 0;

    // Set up message listeners
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      this.handleMessage(request, sender, sendResponse);
      return true; // Keep message channel open for async response
    });

    // Set up web request listeners for caching
    this.setupWebRequestListeners();
  }

  private setupWebRequestListeners() {
    chrome.webRequest.onBeforeRequest.addListener(
      (details) => {
        if (this.isDuckMode && this.shouldCache(details.url)) {
          this.cacheRequest(details);
        }
      },
      { urls: ["<all_urls>"] },
      ["requestBody"]
    );
  }

  private shouldCache(url: string): boolean {
    // Don't cache certain types of requests
    const excludePatterns = [
      /\.(js|css|woff|woff2|ttf|eot)$/i,
      /\/api\//,
      /\/auth\//,
      /\/admin\//,
      /chrome-extension:\/\//,
      /moz-extension:\/\//,
      /safari-extension:\/\//,
    ];

    return !excludePatterns.some(pattern => pattern.test(url));
  }

  private async cacheRequest(details: chrome.webRequest.WebRequestBodyDetails) {
    try {
      // This is a simplified version - in production, you'd want to:
      // 1. Fetch the actual content
      // 2. Process and compress it
      // 3. Encrypt it
      // 4. Store in IndexedDB
      
      const cacheItem: CacheItem = {
        id: this.generateId(),
        url: details.url,
        title: this.extractTitle(details.url),
        content: '', // Would be fetched and processed
        type: this.getContentType(details.url),
        size: 0, // Would be calculated
        cachedAt: new Date(),
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
        encrypted: true
      };

      // Store in IndexedDB (simplified)
      await this.storeCacheItem(cacheItem);
      
      // Update cache size
      this.cacheSize += cacheItem.size;
      await chrome.storage.local.set({ cacheSize: this.cacheSize });
    } catch (error) {
      console.error('Error caching request:', error);
    }
  }

  private async storeCacheItem(item: CacheItem) {
    // In production, this would use IndexedDB
    const cache = await chrome.storage.local.get(['cache']) || { cache: [] };
    cache.cache.push(item);
    await chrome.storage.local.set({ cache: cache.cache });
  }

  private async syncCachedData() {
    if (!this.isOnline) return;

    try {
      // Sync cached data to server
      const cache = await chrome.storage.local.get(['cache']);
      if (cache.cache && cache.cache.length > 0) {
        // Send to API
        console.log('Syncing cached data to server...');
        // Implementation would send to your API
      }
    } catch (error) {
      console.error('Error syncing data:', error);
    }
  }

  private handleMessage(request: any, sender: chrome.runtime.MessageSender, sendResponse: (response: any) => void) {
    switch (request.action) {
      case 'toggleDuckMode':
        this.isDuckMode = !this.isDuckMode;
        chrome.storage.local.set({ isDuckMode: this.isDuckMode });
        sendResponse({ isDuckMode: this.isDuckMode });
        break;
      
      case 'getState':
        sendResponse({
          isOnline: this.isOnline,
          isDuckMode: this.isDuckMode,
          cacheSize: this.cacheSize
        });
        break;
      
      case 'clearCache':
        this.clearCache();
        sendResponse({ success: true });
        break;
      
      default:
        sendResponse({ error: 'Unknown action' });
    }
  }

  private async clearCache() {
    await chrome.storage.local.remove(['cache']);
    this.cacheSize = 0;
    await chrome.storage.local.set({ cacheSize: this.cacheSize });
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  private extractTitle(url: string): string {
    try {
      const urlObj = new URL(url);
      return urlObj.hostname;
    } catch {
      return 'Unknown';
    }
  }

  private getContentType(url: string): 'page' | 'video' | 'audio' | 'image' {
    if (/\.(mp4|webm|ogg|avi|mov)$/i.test(url)) return 'video';
    if (/\.(mp3|wav|ogg|aac)$/i.test(url)) return 'audio';
    if (/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url)) return 'image';
    return 'page';
  }
}

// Initialize the background script
new DuckConnectBackground();
