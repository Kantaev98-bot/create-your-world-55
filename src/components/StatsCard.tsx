import React from 'react';
import { Card } from '@/components/ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon?: React.ReactNode;
}

export const StatsCard = ({ title, value, change, isPositive, icon }: StatsCardProps) => {
  return (
    <Card className="glass-card p-4 hover:neon-glow transition-all duration-300 animate-float">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        {icon && <div className="text-neon-cyan">{icon}</div>}
      </div>
      <div className="space-y-1">
        <p className="text-2xl font-bold gradient-text">{value}</p>
        <div className="flex items-center space-x-1">
          {isPositive ? (
            <TrendingUp className="w-4 h-4 text-neon-green" />
          ) : (
            <TrendingDown className="w-4 h-4 text-neon-pink" />
          )}
          <span className={`text-sm font-medium ${
            isPositive ? 'text-neon-green' : 'text-neon-pink'
          }`}>
            {change}
          </span>
        </div>
      </div>
    </Card>
  );
};