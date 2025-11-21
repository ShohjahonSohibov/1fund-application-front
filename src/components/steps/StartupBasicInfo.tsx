import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { GlassCard } from '../GlassCard';
import { Input } from '../Input';
import { Select } from '../Select';
import { TextArea } from '../TextArea';
import { StepIndicator } from '../StepIndicator';

interface StartupBasicInfoProps {
  onNext: (data: any) => void;
  onBack: () => void;
}

const industries = [
  'Fintech',
  'Healthcare',
  'Education',
  'E-commerce',
  'SaaS',
  'AI/ML',
  'Blockchain',
  'CleanTech',
  'AgriTech',
  'Other'
];

const stages = [
  'Idea',
  'MVP',
  'Early Traction',
  'Growth',
  'Scaling'
];

const countries = [
  'United States',
  'United Kingdom',
  'Uzbekistan',
  'India',
  'Singapore',
  'UAE',
  'Germany',
  'Canada',
  'Other'
];

export function StartupBasicInfo({ onNext, onBack }: StartupBasicInfoProps) {
  const [startupName, setStartupName] = useState('');
  const [industry, setIndustry] = useState('');
  const [stage, setStage] = useState('');
  const [country, setCountry] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (startupName && industry && stage && country && description) {
      onNext({ startupName, industry, stage, country, description });
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

      <StepIndicator currentStep={1} totalSteps={6} />
      
      <div className="text-center mb-8">
        <h2 className="mb-2" style={{ color: '#6C63FF' }}>Startup Basic Info</h2>
        <p className="text-gray-600 text-sm">Tell us about your startup</p>
      </div>

      <Input
        label="Startup Name"
        placeholder="My Awesome Startup"
        value={startupName}
        onChange={setStartupName}
        required
      />

      <Select
        label="Industry"
        options={industries}
        value={industry}
        onChange={setIndustry}
        placeholder="Select industry"
        required
      />

      <Select
        label="Stage"
        options={stages}
        value={stage}
        onChange={setStage}
        placeholder="Select stage"
        required
      />

      <Select
        label="Country"
        options={countries}
        value={country}
        onChange={setCountry}
        placeholder="Select country"
        required
      />

      <TextArea
        label="One-line Description"
        placeholder="What does your startup do?"
        value={description}
        onChange={setDescription}
        required
        rows={2}
      />

      <button
        onClick={handleSubmit}
        disabled={!startupName || !industry || !stage || !country || !description}
        className="w-full py-3 rounded-xl text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg"
        style={{ backgroundColor: '#6C63FF' }}
      >
        Next
      </button>
    </GlassCard>
  );
}
