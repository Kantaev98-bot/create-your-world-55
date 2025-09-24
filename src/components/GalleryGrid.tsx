import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Heart, Download } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  likes: string;
  rarity: string;
  isRare: boolean;
  icon: string;
}

const galleryItems: GalleryItem[] = [
  { id: '001', title: 'Neon Dreams', category: 'Artwork', likes: '2.4K', rarity: 'Legendary', isRare: true, icon: '✨' },
  { id: '002', title: 'Cyber Dance', category: 'Animation', likes: '1.8K', rarity: 'Epic', isRare: true, icon: '💃' },
  { id: '003', title: 'Pink Glow', category: 'Photo', likes: '3.2K', rarity: 'Rare', isRare: false, icon: '💖' },
  { id: '004', title: 'Electric Smile', category: 'Portrait', likes: '1.5K', rarity: 'Common', isRare: false, icon: '⚡' },
  { id: '005', title: 'Kawaii Mode', category: 'Chibi', likes: '2.1K', rarity: 'Epic', isRare: true, icon: '🎀' },
  { id: '006', title: 'Hologram', category: 'Special', likes: '4.2K', rarity: 'Legendary', isRare: true, icon: '🌈' },
];

export const GalleryGrid = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold gradient-text">Gallery Collection</h2>
        <Button variant="cyber" size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Add Art
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryItems.map((item) => (
          <Card 
            key={item.id} 
            className="glass-card p-4 hover:neon-glow cursor-pointer transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-neon-cyan">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.category}</p>
                </div>
              </div>
            </div>
            
            {/* Art Preview Placeholder */}
            <div className="glass-card p-6 rounded-lg mb-4 bg-gradient-neon/10 border border-neon-pink/20">
              <div className="aspect-square bg-gradient-electric rounded-lg flex items-center justify-center">
                <span className="text-4xl opacity-50">{item.icon}</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Heart className="w-4 h-4 text-neon-pink" />
                  <span className="text-sm font-medium text-neon-pink">{item.likes}</span>
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded ${
                  item.isRare 
                    ? 'text-neon-green bg-neon-green/10' 
                    : 'text-neon-cyan bg-neon-cyan/10'
                }`}>
                  {item.rarity}
                </span>
              </div>
              
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="flex-1 text-neon-pink hover:bg-neon-pink/10">
                  <Heart className="w-3 h-3 mr-1" />
                  Like
                </Button>
                <Button variant="ghost" size="sm" className="flex-1 text-neon-cyan hover:bg-neon-cyan/10">
                  <Download className="w-3 h-3 mr-1" />
                  Save
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};