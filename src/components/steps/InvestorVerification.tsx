import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { GlassCard } from '../GlassCard';
import { Input } from '../Input';
import { StepIndicator } from '../StepIndicator';

interface InvestorVerificationProps {
  onNext: (data: any) => void;
  onBack: () => void;
}

export function InvestorVerification({ onNext, onBack }: InvestorVerificationProps) {
  const [linkedIn, setLinkedIn] = useState('');
  const [website, setWebsite] = useState('');

  const handleSubmit = () => {
    onNext({ linkedIn, website });
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

      <StepIndicator currentStep={3} totalSteps={6} />
      
      <div className="text-center mb-8">
        <h2 className="mb-2" style={{ color: '#6C63FF' }}>Verification</h2>
        <p className="text-gray-600 text-sm">Help startups know more about you (optional)</p>
      </div>

      <Input
        label="LinkedIn Profile"
        placeholder="https://linkedin.com/in/yourprofile"
        value={linkedIn}
        onChange={setLinkedIn}
      />
      <p className="text-xs text-gray-500 -mt-2 mb-4">Helps build credibility with founders</p>

      <Input
        label="Website / Portfolio Link"
        placeholder="https://yourwebsite.com"
        value={website}
        onChange={setWebsite}
      />
      <p className="text-xs text-gray-500 -mt-2 mb-4">Optional - showcase your track record</p>

      <button
        onClick={handleSubmit}
        className="w-full py-3 rounded-xl text-white transition-all hover:shadow-lg"
        style={{ backgroundColor: '#6C63FF' }}
      >
        Next
      </button>
    </GlassCard>
  );
}
