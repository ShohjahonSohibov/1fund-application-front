import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div 
      className={`backdrop-blur-xl bg-white/90 rounded-3xl shadow-2xl p-8 ${className}`}
      style={{
        border: '1px solid rgba(255, 255, 255, 0.3)'
      }}
    >
      {children}
    </div>
  );
}
