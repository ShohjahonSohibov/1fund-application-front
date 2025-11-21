import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { GlassCard } from '../GlassCard';
import { Input } from '../Input';
import { StepIndicator } from '../StepIndicator';

interface CreateAccountProps {
  onNext: (data: any) => void;
  onBack: () => void;
}

export function CreateAccount({ onNext, onBack }: CreateAccountProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = () => {
    if (fullName && email && agreed) {
      onNext({ fullName, email });
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

      <StepIndicator currentStep={0} totalSteps={6} />
      
      <div className="text-center mb-8">
        <h2 className="mb-2" style={{ color: '#6C63FF' }}>Create Account</h2>
        <p className="text-gray-600 text-sm">Set up your startup profile</p>
      </div>

      <Input
        label="Startup Name"
        placeholder="OpenAI"
        value={fullName}
        onChange={setFullName}
        required
      />

      <Input
        label="Work Email"
        type="email"
        placeholder="openai@startup.com"
        value={email}
        onChange={setEmail}
        required
      />

      <div className="mb-6">
        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-1"
          />
          <span className="text-sm text-gray-600">
            I agree to the <a href="#" className="text-purple-600 hover:underline">Terms of Service</a> and <a href="#" className="text-purple-600 hover:underline">Privacy Policy</a>
          </span>
        </label>
      </div>

      <button
        onClick={handleSubmit}
        disabled={!fullName || !email || !agreed}
        className="w-full py-3 rounded-xl text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg"
        style={{ backgroundColor: '#6C63FF' }}
      >
        Continue
      </button>
    </GlassCard>
  );
}

