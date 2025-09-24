import React from 'react';

export const NeonBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" />
      
      {/* Animated neon orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-gradient-neon opacity-20 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-gradient-electric opacity-15 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-gradient-cyber opacity-25 blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(195, 250, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(195, 250, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Vertical lines for cyberpunk effect */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-neon-cyan/30 to-transparent" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-neon-purple/30 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-neon-pink/30 to-transparent" />
    </div>
  );
};