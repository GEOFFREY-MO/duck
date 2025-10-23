'use client';

import { useState, useEffect } from 'react';
import { Button } from '@duckconnect/ui';
import { DuckWatermark } from '@duckconnect/ui';

interface ExtensionState {
  isOnline: boolean;
  isDuckMode: boolean;
  cacheSize: number;
  lastSync: Date | null;
  recentTabs: string[];
}

export default function PopupPage() {
  const [state, setState] = useState<ExtensionState>({
    isOnline: navigator.onLine,
    isDuckMode: false,
    cacheSize: 0,
    lastSync: null,
    recentTabs: []
  });

  const toggleDuckMode = () => {
    setState(prev => ({
      ...prev,
      isDuckMode: !prev.isDuckMode
    }));
  };

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="w-80 h-96 bg-background-light dark:bg-background-dark relative overflow-hidden">
      <DuckWatermark variant="light" />
      
      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🦆</span>
            </div>
            <span className="text-lg font-heading font-bold gradient-text">DuckConnect</span>
          </div>
          <div className={`w-3 h-3 rounded-full ${state.isOnline ? 'bg-green-500' : 'bg-red-500'}`} />
        </div>

        {/* Status */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-text-secondary">Duck Mode</span>
            <span className={`text-sm font-semibold ${state.isDuckMode ? 'text-green-500' : 'text-gray-500'}`}>
              {state.isDuckMode ? 'ON' : 'OFF'}
            </span>
          </div>
          <Button
            onClick={toggleDuckMode}
            className={`w-full ${state.isDuckMode ? 'bg-green-500 hover:bg-green-600' : 'bg-primary-500 hover:bg-primary-600'}`}
          >
            {state.isDuckMode ? 'Turn Off Duck Mode' : 'Turn On Duck Mode'}
          </Button>
        </div>

        {/* Cache Info */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-text-secondary">Cache Size</span>
            <span className="text-sm font-semibold">{formatBytes(state.cacheSize)}</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.min((state.cacheSize / (5 * 1024 * 1024 * 1024)) * 100, 100)}%` }}
            />
          </div>
        </div>

        {/* Recent Tabs */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-2">Recent Tabs</h3>
          <div className="space-y-1">
            {state.recentTabs.slice(0, 3).map((tab, index) => (
              <div key={index} className="text-xs text-text-secondary truncate">
                {tab}
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-2">
          <Button variant="outline" className="w-full text-sm">
            Dashboard
          </Button>
          <Button variant="outline" className="w-full text-sm">
            Settings
          </Button>
          <Button variant="outline" className="w-full text-sm">
            Upgrade
          </Button>
        </div>
      </div>
    </div>
  );
}
