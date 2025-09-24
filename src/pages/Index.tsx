import React from 'react';
import { SwapInterface } from '@/components/SwapInterface';
import { StatsCard } from '@/components/StatsCard';
import { TokenGrid } from '@/components/TokenGrid';
import { Button } from '@/components/ui/button';
import { Zap, TrendingUp, DollarSign, Users, Wallet } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <header className="text-center mb-12 relative z-10">
        <div className="flex items-center justify-center mb-4">
          <Zap className="w-12 h-12 text-neon-cyan mr-4 animate-pulse" />
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold gradient-text animate-float">
            NeonSwap
          </h1>
        </div>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Experience the future of decentralized trading with our cyberpunk-inspired swap interface
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="neon" size="lg" className="animate-pulse-glow">
            <Wallet className="w-5 h-5 mr-2" />
            Connect Wallet
          </Button>
          <Button variant="cyber" size="lg">
            <TrendingUp className="w-5 h-5 mr-2" />
            View Markets
          </Button>
        </div>
      </header>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
        <StatsCard
          title="Total Volume"
          value="$2.4B"
          change="+12.5%"
          isPositive={true}
          icon={<DollarSign className="w-5 h-5" />}
        />
        <StatsCard
          title="Active Users"
          value="145K"
          change="+8.7%"
          isPositive={true}
          icon={<Users className="w-5 h-5" />}
        />
        <StatsCard
          title="Total Swaps"
          value="892K"
          change="+15.3%"
          isPositive={true}
          icon={<TrendingUp className="w-5 h-5" />}
        />
        <StatsCard
          title="TVL"
          value="$456M"
          change="-2.1%"
          isPositive={false}
          icon={<Wallet className="w-5 h-5" />}
        />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Swap Interface */}
        <div className="order-2 lg:order-1">
          <SwapInterface />
        </div>
        
        {/* Token Grid */}
        <div className="order-1 lg:order-2">
          <TokenGrid />
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center mt-16 py-8">
        <div className="glass-card inline-block px-6 py-3 rounded-full">
          <p className="text-sm text-muted-foreground">
            Powered by blockchain technology • Built with ⚡ and 💙
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
