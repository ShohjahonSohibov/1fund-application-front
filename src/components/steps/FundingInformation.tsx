import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { GlassCard } from '../GlassCard';
import { Select } from '../Select';
import { StepIndicator } from '../StepIndicator';

interface FundingInformationProps {
  onNext: (data: any) => void;
  onBack: () => void;
}

const fundingAmounts = [
  '$50K - $100K',
  '$100K - $250K',
  '$250K - $500K',
  '$500K - $1M',
  '$1M - $2M',
  '$2M - $5M',
  '$5M+'
];

export function FundingInformation({ onNext, onBack }: FundingInformationProps) {
  const [raisingNow, setRaisingNow] = useState<boolean | null>(null);
  const [amount, setAmount] = useState('');

  const handleSubmit = () => {
    if (raisingNow !== null) {
      onNext({ raisingNow, amount: raisingNow ? amount : null });
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
        <h2 className="mb-2" style={{ color: '#6C63FF' }}>Funding Information</h2>
        <p className="text-gray-600 text-sm">Help us understand your funding needs</p>
      </div>

      <div className="mb-6">
        <label className="block mb-3 text-sm text-gray-700">
          Are you raising now? <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setRaisingNow(true)}
            className="py-4 rounded-xl border-2 transition-all"
            style={{
              backgroundColor: raisingNow === true ? '#6C63FF' : 'white',
              color: raisingNow === true ? 'white' : '#1B1B1B',
              borderColor: raisingNow === true ? '#6C63FF' : '#E0E0E0'
            }}
          >
            Yes
          </button>
          <button
            onClick={() => setRaisingNow(false)}
            className="py-4 rounded-xl border-2 transition-all"
            style={{
              backgroundColor: raisingNow === false ? '#6C63FF' : 'white',
              color: raisingNow === false ? 'white' : '#1B1B1B',
              borderColor: raisingNow === false ? '#6C63FF' : '#E0E0E0'
            }}
          >
            No
          </button>
        </div>
      </div>

      {raisingNow === true && (
        <div className="mb-6 animate-fadeIn">
          <Select
            label="Amount Seeking"
            options={fundingAmounts}
            value={amount}
            onChange={setAmount}
            placeholder="Select amount range"
            required
          />
        </div>
      )}

      <button
        onClick={handleSubmit}
        disabled={raisingNow === null || (raisingNow === true && !amount)}
        className="w-full py-3 rounded-xl text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg"
        style={{ backgroundColor: '#6C63FF' }}
      >
        Finish Setup
      </button>
    </GlassCard>
  );
}
