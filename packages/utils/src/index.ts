// Encryption utilities
export const encryptData = async (data: string, key: string): Promise<string> => {
  // Simple base64 encoding for now - replace with AES encryption
  return btoa(data);
};

export const decryptData = async (encryptedData: string, key: string): Promise<string> => {
  // Simple base64 decoding for now - replace with AES decryption
  return atob(encryptedData);
};

// Cache utilities
export const formatBytes = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

export const getCacheExpiry = (type: 'page' | 'video' | 'audio' | 'image'): Date => {
  const now = new Date();
  const hours = {
    page: 24,
    video: 168, // 7 days
    audio: 168,
    image: 72 // 3 days
  };
  return new Date(now.getTime() + hours[type] * 60 * 60 * 1000);
};

// URL utilities
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const getDomainFromUrl = (url: string): string => {
  try {
    return new URL(url).hostname;
  } catch {
    return '';
  }
};

// Date utilities
export const formatRelativeTime = (date: Date): string => {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) return 'just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  return `${Math.floor(diffInSeconds / 86400)}d ago`;
};

// Storage utilities
export const getStorageUsage = async (): Promise<{ used: number; quota: number }> => {
  if ('storage' in navigator && 'estimate' in navigator.storage) {
    const estimate = await navigator.storage.estimate();
    return {
      used: estimate.usage || 0,
      quota: estimate.quota || 0
    };
  }
  return { used: 0, quota: 0 };
};

// Device utilities
export const getDeviceInfo = (): { type: string; name: string } => {
  const userAgent = navigator.userAgent;
  let type = 'browser';
  
  if (/Mobile|Android|iPhone|iPad/.test(userAgent)) {
    type = 'mobile';
  } else if (/Windows|Mac|Linux/.test(userAgent)) {
    type = 'desktop';
  }
  
  const name = `${type.charAt(0).toUpperCase() + type.slice(1)} - ${navigator.platform}`;
  
  return { type, name };
};

// Validation utilities
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): { valid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }
  if (!/\d/.test(password)) {
    errors.push('Password must contain at least one number');
  }
  
  return { valid: errors.length === 0, errors };
};
