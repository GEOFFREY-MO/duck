'use client';

import { Button } from '@repo/ui';
import { DuckWatermark } from '@repo/ui';
import { useTheme } from '@repo/ui';
import { motion } from 'framer-motion';

export default function HomePage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark relative overflow-hidden">
      <DuckWatermark variant={theme} />
      
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">🦆</span>
          </div>
          <span className="text-2xl font-heading font-bold gradient-text">DuckConnect</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <Button variant="outline">Sign In</Button>
          <Button>Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-heading font-bold mb-6">
              Stay Online,{' '}
              <span className="gradient-text">Even When Offline</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto">
              Turn on the Duck to keep watching, working, and syncing data seamlessly 
              across all your devices. Adapt like a duck: walks (offline), 
              swims (data-light), flies (full online).
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-4">
                Download Extension
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Watch Demo
              </Button>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid md:grid-cols-3 gap-8 mt-20"
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">Smart Sync</h3>
              <p className="text-text-secondary">
                Automatically sync your data across devices when you're back online. 
                Never lose your progress again.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">Secure Storage</h3>
              <p className="text-text-secondary">
                Your data is encrypted locally and synced securely. 
                Your privacy is our priority.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">DuckAI Lite</h3>
              <p className="text-text-secondary">
                Get AI-powered summaries and insights from your cached content, 
                even when offline.
              </p>
            </div>
          </motion.div>

          {/* Pricing Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20"
          >
            <h2 className="text-4xl font-heading font-bold mb-12">Choose Your Plan</h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Free Plan */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-heading font-semibold mb-4">Free</h3>
                <div className="text-4xl font-bold mb-6">$0<span className="text-lg text-text-secondary">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-primary-500 mr-2">✓</span>
                    500MB cache
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-500 mr-2">✓</span>
                    1 device
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-500 mr-2">✓</span>
                    Basic sync
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Get Started</Button>
              </div>

              {/* Pro Plan */}
              <div className="bg-gradient-primary p-8 rounded-2xl shadow-lg text-white relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent-yellow text-black px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4">Pro</h3>
                <div className="text-4xl font-bold mb-6">$9<span className="text-lg opacity-80">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-white mr-2">✓</span>
                    5GB cache
                  </li>
                  <li className="flex items-center">
                    <span className="text-white mr-2">✓</span>
                    3 devices
                  </li>
                  <li className="flex items-center">
                    <span className="text-white mr-2">✓</span>
                    DuckAI Lite
                  </li>
                  <li className="flex items-center">
                    <span className="text-white mr-2">✓</span>
                    Priority support
                  </li>
                </ul>
                <Button className="w-full bg-white text-primary-500 hover:bg-gray-100">Get Started</Button>
              </div>

              {/* Premium Plan */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-heading font-semibold mb-4">Premium</h3>
                <div className="text-4xl font-bold mb-6">$29<span className="text-lg text-text-secondary">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-primary-500 mr-2">✓</span>
                    50GB cache
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-500 mr-2">✓</span>
                    Unlimited devices
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-500 mr-2">✓</span>
                    Full DuckAI
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-500 mr-2">✓</span>
                    Advanced analytics
                  </li>
                </ul>
                <Button className="w-full">Get Started</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border-light dark:border-border-dark mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🦆</span>
              </div>
              <span className="text-xl font-heading font-bold gradient-text">DuckConnect</span>
            </div>
            <p className="text-text-secondary">
              © 2024 DuckConnect. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}