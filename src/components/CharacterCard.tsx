import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Star, Sparkles } from 'lucide-react';

export const CharacterCard = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="glass-card p-6 neon-glow animate-pulse-glow">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold gradient-text">Meet Chika</h2>
          <Button variant="ghost" size="icon" className="neon-glow">
            <Heart className="w-5 h-5 text-neon-pink" />
          </Button>
        </div>

        {/* Character Image Placeholder */}
        <div className="glass-card p-8 rounded-xl border border-neon-pink/20 mb-6 text-center">
          <div className="w-32 h-32 mx-auto bg-gradient-neon rounded-full flex items-center justify-center mb-4">
            <Sparkles className="w-16 h-16 text-white animate-pulse" />
          </div>
          <h3 className="text-xl font-bold text-neon-pink mb-2">Hot Chika Baby</h3>
          <p className="text-sm text-muted-foreground">Cyberpunk Anime Princess</p>
        </div>

        {/* Character Stats */}
        <div className="space-y-4">
          <div className="glass-card p-4 rounded-xl border border-neon-cyan/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Popularity Level</span>
              <span className="text-sm text-neon-cyan">MAX ✨</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-neon-cyan" />
                <span className="font-bold text-neon-cyan">LEGENDARY</span>
              </div>
            </div>
          </div>

          <div className="glass-card p-4 rounded-xl border border-neon-purple/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Special Ability</span>
              <span className="text-sm text-neon-purple">Active</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-neon-purple" />
                <span className="font-bold text-neon-purple">Neon Charm</span>
              </div>
            </div>
          </div>

          {/* Character Info */}
          <div className="glass-card p-3 rounded-lg border border-neon-green/20 bg-neon-green/5">
            <div className="text-sm space-y-1">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Age:</span>
                <span className="text-neon-green font-medium">18</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Height:</span>
                <span className="text-neon-green font-medium">165cm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Hobby:</span>
                <span className="text-neon-green font-medium">Dancing</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <Button 
            variant="neon" 
            className="w-full h-14 text-lg font-bold neon-glow hover:purple-glow transition-all duration-300"
          >
            <Heart className="w-5 h-5 mr-2" />
            Follow Chika
          </Button>
        </div>
      </Card>
    </div>
  );
};