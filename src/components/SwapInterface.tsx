import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ArrowUpDown, Settings, Zap } from 'lucide-react';

interface Token {
  symbol: string;
  name: string;
  balance: string;
  icon: string;
}

const tokens: Token[] = [
  { symbol: 'ETH', name: 'Ethereum', balance: '1.2534', icon: '⟠' },
  { symbol: 'USDC', name: 'USD Coin', balance: '2,450.00', icon: '💵' },
  { symbol: 'WBTC', name: 'Wrapped Bitcoin', balance: '0.0532', icon: '₿' },
  { symbol: 'UNI', name: 'Uniswap', balance: '45.67', icon: '🦄' },
];

export const SwapInterface = () => {
  const [fromToken, setFromToken] = useState(tokens[0]);
  const [toToken, setToToken] = useState(tokens[1]);
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');

  const handleSwapTokens = () => {
    setFromToken(toToken);
    setToToken(fromToken);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="glass-card p-6 neon-glow animate-pulse-glow">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold gradient-text">Swap Tokens</h2>
          <Button variant="ghost" size="icon" className="neon-glow">
            <Settings className="w-5 h-5 text-neon-cyan" />
          </Button>
        </div>

        {/* From Token */}
        <div className="space-y-4">
          <div className="glass-card p-4 rounded-xl border border-neon-cyan/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">From</span>
              <span className="text-sm text-neon-cyan">Balance: {fromToken.balance}</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 bg-muted/50 rounded-lg px-3 py-2 min-w-[100px]">
                <span className="text-xl">{fromToken.icon}</span>
                <span className="font-semibold text-neon-cyan">{fromToken.symbol}</span>
              </div>
              <Input
                type="number"
                placeholder="0.0"
                value={fromAmount}
                onChange={(e) => setFromAmount(e.target.value)}
                className="border-none bg-transparent text-right text-2xl font-bold focus:ring-neon-pink/50"
              />
            </div>
          </div>

          {/* Swap Button */}
          <div className="flex justify-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleSwapTokens}
              className="neon-glow hover:cyan-glow rounded-full border border-neon-pink/50 hover:border-neon-cyan/80 transition-all duration-300"
            >
              <ArrowUpDown className="w-5 h-5 text-neon-pink hover:text-neon-cyan transition-colors" />
            </Button>
          </div>

          {/* To Token */}
          <div className="glass-card p-4 rounded-xl border border-neon-purple/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">To</span>
              <span className="text-sm text-neon-purple">Balance: {toToken.balance}</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 bg-muted/50 rounded-lg px-3 py-2 min-w-[100px]">
                <span className="text-xl">{toToken.icon}</span>
                <span className="font-semibold text-neon-purple">{toToken.symbol}</span>
              </div>
              <Input
                type="number"
                placeholder="0.0"
                value={toAmount}
                onChange={(e) => setToAmount(e.target.value)}
                className="border-none bg-transparent text-right text-2xl font-bold focus:ring-neon-purple/50"
              />
            </div>
          </div>

          {/* Swap Info */}
          <div className="glass-card p-3 rounded-lg border border-neon-green/20 bg-neon-green/5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Exchange Rate</span>
              <span className="text-neon-green font-medium">1 {fromToken.symbol} = 2,456.78 {toToken.symbol}</span>
            </div>
            <div className="flex items-center justify-between text-sm mt-1">
              <span className="text-muted-foreground">Gas Fee</span>
              <span className="text-neon-green font-medium">~$12.45</span>
            </div>
          </div>

          {/* Swap Button */}
          <Button 
            variant="neon" 
            className="w-full h-14 text-lg font-bold neon-glow hover:purple-glow transition-all duration-300"
            disabled={!fromAmount || !toAmount}
          >
            <Zap className="w-5 h-5 mr-2" />
            {fromAmount && toAmount ? 'Execute Swap' : 'Enter Amount'}
          </Button>
        </div>
      </Card>
    </div>
  );
};