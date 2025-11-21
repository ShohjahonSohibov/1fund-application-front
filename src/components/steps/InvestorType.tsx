import { useState } from 'react';
import { User, Award, Building2, ArrowLeft } from 'lucide-react';
import { GlassCard } from '../GlassCard';
import { StepIndicator } from '../StepIndicator';

interface InvestorTypeProps {
  onNext: (data: any) => void;
  onBack: () => void;
}

export function InvestorType({ onNext, onBack }: InvestorTypeProps) {
  const [selectedType, setSelectedType] = useState<string>('');

  const handleSubmit = () => {
    if (selectedType) {
      onNext({ investorType: selectedType });
    }
  };

  const investorTypes = [
    {
      id: 'individual',
      title: 'Individual Investor',
      description: 'Personal investments in startups',
      icon: User
    },
    {
      id: 'angel',
      title: 'Angel / Accredited Investor',
      description: 'High net-worth individual investor',
      icon: Award
    },
    {
      id: 'vc',
      title: 'VC / Investment Fund',
      description: 'Institutional investment firm',
      icon: Building2
    }
  ];

  return (
    <GlassCard className="max-w-2xl w-full">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-4"
      >
        <ArrowLeft size={20} />
        <span>Back</span>
      </button>

      <StepIndicator currentStep={1} totalSteps={6} />
      
      <div className="text-center mb-8">
        <h2 className="mb-2" style={{ color: '#6C63FF' }}>Investor Type</h2>
        <p className="text-gray-600 text-sm">Select your investor category</p>
      </div>

      <div className="grid gap-4 mb-6">
        {investorTypes.map((type) => {
          const Icon = type.icon;
          return (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className="flex items-center gap-4 p-6 rounded-2xl border-2 transition-all hover:shadow-lg text-left"
              style={{
                backgroundColor: selectedType === type.id ? '#F8F7FF' : 'white',
                borderColor: selectedType === type.id ? '#6C63FF' : '#E0E0E0'
              }}
            >
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: selectedType === type.id ? '#6C63FF' : '#F3F4F6' }}
              >
                <Icon size={28} color={selectedType === type.id ? 'white' : '#6C63FF'} />
              </div>
              <div>
                <h4 className="mb-1" style={{ color: '#6C63FF' }}>{type.title}</h4>
                <p className="text-sm text-gray-600">{type.description}</p>
              </div>
            </button>
          );
        })}
      </div>

      <button
        onClick={handleSubmit}
        disabled={!selectedType}
        className="w-full py-3 rounded-xl text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg"
        style={{ backgroundColor: '#6C63FF' }}
      >
        Next
      </button>
    </GlassCard>
  );
}
