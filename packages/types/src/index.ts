// User and Authentication Types
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  plan: 'free' | 'pro' | 'premium';
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthSession {
  user: User;
  accessToken: string;
  refreshToken: string;
  expiresAt: Date;
}

// Device and Sync Types
export interface Device {
  id: string;
  userId: string;
  name: string;
  type: 'browser' | 'mobile' | 'desktop';
  lastSeen: Date;
  isOnline: boolean;
  cacheSize: number;
  maxCacheSize: number;
}

export interface CacheItem {
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

// Billing and Subscription Types
export interface Subscription {
  id: string;
  userId: string;
  plan: 'free' | 'pro' | 'premium';
  status: 'active' | 'cancelled' | 'past_due';
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  cancelAtPeriodEnd: boolean;
  stripeSubscriptionId?: string;
  mpesaTransactionId?: string;
}

export interface BillingInfo {
  subscription: Subscription;
  usage: {
    cacheUsed: number;
    cacheLimit: number;
    devicesUsed: number;
    deviceLimit: number;
  };
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Extension Types
export interface ExtensionState {
  isOnline: boolean;
  isDuckMode: boolean;
  cacheSize: number;
  lastSync: Date | null;
  recentTabs: string[];
}

export interface SyncJob {
  id: string;
  type: 'cache' | 'sync' | 'cleanup';
  status: 'pending' | 'running' | 'completed' | 'failed';
  data: any;
  createdAt: Date;
  completedAt?: Date;
}

// AI Service Types
export interface AISummary {
  id: string;
  contentId: string;
  summary: string;
  keywords: string[];
  confidence: number;
  createdAt: Date;
}

export interface AIQuery {
  id: string;
  query: string;
  context: string;
  response: string;
  confidence: number;
  createdAt: Date;
}
