import React from 'react';
import { CharacterCard } from '@/components/CharacterCard';
import { StatsCard } from '@/components/StatsCard';
import { GalleryGrid } from '@/components/GalleryGrid';
import { Button } from '@/components/ui/button';
import { Zap, TrendingUp, DollarSign, Users } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <header className="text-center mb-12 relative z-10">
        <div className="flex items-center justify-center mb-4">
          <Zap className="w-12 h-12 text-neon-pink mr-4 animate-pulse" />
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold gradient-text animate-float">
            Hot Chika Baby
          </h1>
        </div>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Enter the neon-lit world of the hottest anime sensation - where cyberpunk meets kawaii
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="neon" size="lg" className="animate-pulse-glow">
            <Zap className="w-5 h-5 mr-2" />
            Join the Club
          </Button>
          <Button variant="cyber" size="lg">
            <TrendingUp className="w-5 h-5 mr-2" />
            View Gallery
          </Button>
        </div>
      </header>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
        <StatsCard
          title="Fans Worldwide"
          value="2.4M"
          change="+25.5%"
          isPositive={true}
          icon={<Users className="w-5 h-5" />}
        />
        <StatsCard
          title="Episodes"
          value="145"
          change="+12%"
          isPositive={true}
          icon={<Zap className="w-5 h-5" />}
        />
        <StatsCard
          title="Art Pieces"
          value="892"
          change="+30.3%"
          isPositive={true}
          icon={<TrendingUp className="w-5 h-5" />}
        />
        <StatsCard
          title="Collectibles"
          value="456"
          change="+8.1%"
          isPositive={true}
          icon={<DollarSign className="w-5 h-5" />}
        />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Character Showcase */}
        <div className="order-2 lg:order-1">
          <CharacterCard />
        </div>
        
        {/* Gallery Grid */}
        <div className="order-1 lg:order-2">
          <GalleryGrid />
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center mt-16 py-8">
        <div className="glass-card inline-block px-6 py-3 rounded-full">
          <p className="text-sm text-muted-foreground">
            Made with 💖 for anime lovers • Powered by neon dreams ✨
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
