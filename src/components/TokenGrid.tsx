import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface Token {
  symbol: string;
  name: string;
  price: string;
  change24h: string;
  isPositive: boolean;
  icon: string;
}

const popularTokens: Token[] = [
  { symbol: 'ETH', name: 'Ethereum', price: '$2,456.78', change24h: '+3.45%', isPositive: true, icon: '⟠' },
  { symbol: 'BTC', name: 'Bitcoin', price: '$43,287.50', change24h: '+1.23%', isPositive: true, icon: '₿' },
  { symbol: 'USDC', name: 'USD Coin', price: '$1.00', change24h: '0.00%', isPositive: true, icon: '💵' },
  { symbol: 'UNI', name: 'Uniswap', price: '$8.45', change24h: '-2.1%', isPositive: false, icon: '🦄' },
  { symbol: 'MATIC', name: 'Polygon', price: '$0.87', change24h: '+5.67%', isPositive: true, icon: '🔷' },
  { symbol: 'LINK', name: 'Chainlink', price: '$14.23', change24h: '+0.89%', isPositive: true, icon: '🔗' },
];

export const TokenGrid = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold gradient-text">Popular Tokens</h2>
        <Button variant="cyber" size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Add Token
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {popularTokens.map((token) => (
          <Card 
            key={token.symbol} 
            className="glass-card p-4 hover:neon-glow cursor-pointer transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">{token.icon}</div>
                <div>
                  <h3 className="font-bold text-neon-cyan">{token.symbol}</h3>
                  <p className="text-xs text-muted-foreground">{token.name}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-xl font-bold gradient-text">{token.price}</p>
              <div className="flex items-center">
                <span className={`text-sm font-medium px-2 py-1 rounded ${
                  token.isPositive 
                    ? 'text-neon-green bg-neon-green/10' 
                    : 'text-neon-pink bg-neon-pink/10'
                }`}>
                  {token.change24h}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};