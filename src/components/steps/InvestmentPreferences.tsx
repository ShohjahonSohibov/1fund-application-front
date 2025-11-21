import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { GlassCard } from '../GlassCard';
import { StepIndicator } from '../StepIndicator';

interface InvestmentPreferencesProps {
  onNext: (data: any) => void;
  onBack: () => void;
}

export function InvestmentPreferences({ onNext, onBack }: InvestmentPreferencesProps) {
  const [investmentStyle, setInvestmentStyle] = useState<'solo' | 'group' | null>(null);
  const [mentoring, setMentoring] = useState<boolean | null>(null);
  const [reviewDecks, setReviewDecks] = useState<boolean | null>(null);

  const handleSubmit = () => {
    if (investmentStyle !== null && mentoring !== null && reviewDecks !== null) {
      onNext({ investmentStyle, mentoring, reviewDecks });
    }
  };

  return (
    <GlassCard className="max-w-md w-full">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-4"
      >
        <ArrowLeft size={20} />
        <span>Back</span>
      </button>

      <StepIndicator currentStep={4} totalSteps={6} />
      
      <div className="text-center mb-8">
        <h2 className="mb-2" style={{ color: '#6C63FF' }}>Investment Preferences</h2>
        <p className="text-gray-600 text-sm">Customize your investment approach</p>
      </div>

      {/* Investment Style */}
      <div className="mb-6">
        <label className="block mb-3 text-sm text-gray-700">
          Investment Style <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setInvestmentStyle('solo')}
            className="py-4 rounded-xl border-2 transition-all"
            style={{
              backgroundColor: investmentStyle === 'solo' ? '#6C63FF' : 'white',
              color: investmentStyle === 'solo' ? 'white' : '#1B1B1B',
              borderColor: investmentStyle === 'solo' ? '#6C63FF' : '#E0E0E0'
            }}
          >
            Solo
          </button>
          <button
            onClick={() => setInvestmentStyle('group')}
            className="py-4 rounded-xl border-2 transition-all"
            style={{
              backgroundColor: investmentStyle === 'group' ? '#6C63FF' : 'white',
              color: investmentStyle === 'group' ? 'white' : '#1B1B1B',
              borderColor: investmentStyle === 'group' ? '#6C63FF' : '#E0E0E0'
            }}
          >
            Group
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2">Do you prefer to invest alone or with others?</p>
      </div>

      {/* Mentoring */}
      <div className="mb-6">
        <label className="block mb-3 text-sm text-gray-700">
          Open to mentoring founders? <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setMentoring(true)}
            className="py-4 rounded-xl border-2 transition-all"
            style={{
              backgroundColor: mentoring === true ? '#00C9A7' : 'white',
              color: mentoring === true ? 'white' : '#1B1B1B',
              borderColor: mentoring === true ? '#00C9A7' : '#E0E0E0'
            }}
          >
            Yes
          </button>
          <button
            onClick={() => setMentoring(false)}
            className="py-4 rounded-xl border-2 transition-all"
            style={{
              backgroundColor: mentoring === false ? '#E0E0E0' : 'white',
              color: mentoring === false ? '#1B1B1B' : '#1B1B1B',
              borderColor: mentoring === false ? '#9CA3AF' : '#E0E0E0'
            }}
          >
            No
          </button>
        </div>
      </div>

      {/* Review Pitch Decks */}
      <div className="mb-6">
        <label className="block mb-3 text-sm text-gray-700">
          Open to reviewing pitch decks weekly? <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setReviewDecks(true)}
            className="py-4 rounded-xl border-2 transition-all"
            style={{
              backgroundColor: reviewDecks === true ? '#00C9A7' : 'white',
              color: reviewDecks === true ? 'white' : '#1B1B1B',
              borderColor: reviewDecks === true ? '#00C9A7' : '#E0E0E0'
            }}
          >
            Yes
          </button>
          <button
            onClick={() => setReviewDecks(false)}
            className="py-4 rounded-xl border-2 transition-all"
            style={{
              backgroundColor: reviewDecks === false ? '#E0E0E0' : 'white',
              color: reviewDecks === false ? '#1B1B1B' : '#1B1B1B',
              borderColor: reviewDecks === false ? '#9CA3AF' : '#E0E0E0'
            }}
          >
            No
          </button>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        disabled={investmentStyle === null || mentoring === null || reviewDecks === null}
        className="w-full py-3 rounded-xl text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg"
        style={{ backgroundColor: '#6C63FF' }}
      >
        Finish Setup
      </button>
    </GlassCard>
  );
}
