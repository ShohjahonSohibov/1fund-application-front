import { Rocket, TrendingUp } from 'lucide-react';
import { GlassCard } from '../GlassCard';

interface AccountTypeSelectionProps {
  onSelect: (type: 'startup' | 'investor') => void;
}

export function AccountTypeSelection({ onSelect }: AccountTypeSelectionProps) {
  return (
    <GlassCard className="max-w-2xl w-full">
      <div className="text-center mb-10">
        <h1 className="mb-3" style={{ color: '#6C63FF' }}>Join Us</h1>
        <p className="text-gray-600">Choose your account type to get started</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <button
          onClick={() => onSelect('startup')}
          className="group p-8 rounded-2xl border-2 transition-all hover:scale-105 hover:shadow-xl bg-white"
          style={{ borderColor: '#E0E0E0' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#6C63FF';
            e.currentTarget.style.backgroundColor = '#F8F7FF';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#E0E0E0';
            e.currentTarget.style.backgroundColor = 'white';
          }}
        >
          <div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors"
            style={{ backgroundColor: '#6C63FF' }}
          >
            <Rocket size={32} color="white" />
          </div>
          <h3 className="mb-2" style={{ color: '#6C63FF' }}>I'm a Startup</h3>
          <p className="text-gray-600 text-sm">
            Raise funding and connect with investors
          </p>
        </button>

        <button
          onClick={() => onSelect('investor')}
          className="group p-8 rounded-2xl border-2 transition-all hover:scale-105 hover:shadow-xl bg-white"
          style={{ borderColor: '#E0E0E0' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#00C9A7';
            e.currentTarget.style.backgroundColor = '#F0FFF9';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#E0E0E0';
            e.currentTarget.style.backgroundColor = 'white';
          }}
        >
          <div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors"
            style={{ backgroundColor: '#00C9A7' }}
          >
            <TrendingUp size={32} color="white" />
          </div>
          <h3 className="mb-2" style={{ color: '#00C9A7' }}>I'm an Investor</h3>
          <p className="text-gray-600 text-sm">
            Discover and invest in promising startups
          </p>
        </button>
      </div>
    </GlassCard>
  );
}