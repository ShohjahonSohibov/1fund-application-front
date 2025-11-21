import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { GlassCard } from '../GlassCard';
import { Input } from '../Input';
import { Select } from '../Select';
import { StepIndicator } from '../StepIndicator';

interface FoundersInfoProps {
  onNext: (data: any) => void;
  onBack: () => void;
}

export function FoundersInfo({ onNext, onBack }: FoundersInfoProps) {
  const [numberOfFounders, setNumberOfFounders] = useState('');
  const [linkedIn, setLinkedIn] = useState('');

  const handleSubmit = () => {
    if (numberOfFounders) {
      onNext({ numberOfFounders, linkedIn });
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

      <StepIndicator currentStep={2} totalSteps={6} />
      
      <div className="text-center mb-8">
        <h2 className="mb-2" style={{ color: '#6C63FF' }}>Founders Info</h2>
        <p className="text-gray-600 text-sm">Tell us about your founding team</p>
      </div>

      <Select
        label="Number of Founders"
        options={['1', '2', '3', '4', '5+']}
        value={numberOfFounders}
        onChange={setNumberOfFounders}
        placeholder="Select number"
        required
      />

      <Input
        label="LinkedIn Profile"
        placeholder="https://linkedin.com/in/yourprofile"
        value={linkedIn}
        onChange={setLinkedIn}
      />
      <p className="text-xs text-gray-500 -mt-2 mb-4">Optional - helps build trust with investors</p>

      <button
        onClick={handleSubmit}
        disabled={!numberOfFounders}
        className="w-full py-3 rounded-xl text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg"
        style={{ backgroundColor: '#6C63FF' }}
      >
        Next
      </button>
    </GlassCard>
  );
}
