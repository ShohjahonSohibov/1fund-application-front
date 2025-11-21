import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { GlassCard } from '../GlassCard';
import { TextArea } from '../TextArea';
import { StepIndicator } from '../StepIndicator';

interface PitchDetailsProps {
  onNext: (data: any) => void;
  onBack: () => void;
}

export function PitchDetails({ onNext, onBack }: PitchDetailsProps) {
  const [problem, setProblem] = useState('');
  const [solution, setSolution] = useState('');

  const handleSubmit = () => {
    if (problem && solution) {
      onNext({ problem, solution });
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

      <StepIndicator currentStep={3} totalSteps={6} />
      
      <div className="text-center mb-8">
        <h2 className="mb-2" style={{ color: '#6C63FF' }}>Pitch Details</h2>
        <p className="text-gray-600 text-sm">Share your startup's story</p>
      </div>

      <TextArea
        label="Problem"
        placeholder="What problem are you solving?"
        value={problem}
        onChange={setProblem}
        required
        rows={3}
      />

      <TextArea
        label="Solution"
        placeholder="How does your product solve this problem?"
        value={solution}
        onChange={setSolution}
        required
        rows={3}
      />

      <button
        onClick={handleSubmit}
        disabled={!problem || !solution}
        className="w-full py-3 rounded-xl text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg"
        style={{ backgroundColor: '#6C63FF' }}
      >
        Next
      </button>
    </GlassCard>
  );
}

