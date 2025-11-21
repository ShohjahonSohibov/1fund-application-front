import { CheckCircle, ArrowRight } from 'lucide-react';
import { GlassCard } from '../GlassCard';

interface InvestorSuccessScreenProps {
  onComplete: () => void;
}

export function InvestorSuccessScreen({ onComplete }: InvestorSuccessScreenProps) {
  return (
    <GlassCard className="max-w-md w-full text-center">
      <div className="mb-8">
        <div 
          className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce"
          style={{ backgroundColor: '#00C9A7' }}
        >
          <CheckCircle size={48} color="white" />
        </div>
        
        <h2 className="mb-3" style={{ color: '#6C63FF' }}>Welcome to 1good Investors.</h2>
        <p className="text-gray-600 mb-2">You can now discover startups raising capital.</p>
        <p className="text-sm text-gray-500">
          Start exploring investment opportunities and connect with founders.
        </p>
      </div>

      <div className="bg-purple-50 rounded-2xl p-6 mb-8">
        <h4 className="mb-3" style={{ color: '#6C63FF' }}>What's Next?</h4>
        <ul className="text-left text-sm text-gray-600 space-y-2">
          <li className="flex items-start gap-2">
            <span style={{ color: '#00C9A7' }}>✓</span>
            <span>Browse vetted startups seeking investment</span>
          </li>
          <li className="flex items-start gap-2">
            <span style={{ color: '#00C9A7' }}>✓</span>
            <span>Review pitch decks and financials</span>
          </li>
          <li className="flex items-start gap-2">
            <span style={{ color: '#00C9A7' }}>✓</span>
            <span>Connect with founders and start investing</span>
          </li>
        </ul>
      </div>

      <button
        onClick={onComplete}
        className="w-full py-3 rounded-xl text-white transition-all hover:shadow-lg flex items-center justify-center gap-2"
        style={{ backgroundColor: '#6C63FF' }}
      >
        Go to Dashboard
        <ArrowRight size={20} />
      </button>
    </GlassCard>
  );
}
