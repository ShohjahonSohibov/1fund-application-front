import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { GlassCard } from '../GlassCard';
import { Select } from '../Select';
import { MultiSelect } from '../MultiSelect';
import { StepIndicator } from '../StepIndicator';

interface InvestorProfileProps {
  onNext: (data: any) => void;
  onBack: () => void;
}

const countries = [
  'United States',
  'United Kingdom',
  'Canada',
  'Germany',
  'France',
  'Singapore',
  'UAE',
  'India',
  'Australia',
  'Other'
];

const investmentFocus = [
  'Early Stage (Seed/Pre-Seed)',
  'Series A',
  'Series B+',
  'Growth Stage',
  'All Stages'
];

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
  'Consumer Apps',
  'Enterprise Software',
  'Cybersecurity'
];

const investmentRanges = [
  '$5K - $25K',
  '$25K - $50K',
  '$50K - $100K',
  '$100K - $250K',
  '$250K - $500K',
  '$500K - $1M',
  '$1M+'
];

export function InvestorProfile({ onNext, onBack }: InvestorProfileProps) {
  const [country, setCountry] = useState('');
  const [focus, setFocus] = useState('');
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [range, setRange] = useState('');

  const handleSubmit = () => {
    if (country && focus && selectedIndustries.length > 0 && range) {
      onNext({ country, focus, industries: selectedIndustries, range });
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
        <h2 className="mb-2" style={{ color: '#6C63FF' }}>Investor Profile</h2>
        <p className="text-gray-600 text-sm">Tell us about your investment preferences</p>
      </div>

      <Select
        label="Country"
        options={countries}
        value={country}
        onChange={setCountry}
        placeholder="Select country"
        required
      />

      <Select
        label="Investment Focus"
        options={investmentFocus}
        value={focus}
        onChange={setFocus}
        placeholder="Select stage"
        required
      />

      <MultiSelect
        label="Preferred Industries"
        options={industries}
        value={selectedIndustries}
        onChange={setSelectedIndustries}
        placeholder="Select industries"
        required
      />

      <Select
        label="Investment Range"
        options={investmentRanges}
        value={range}
        onChange={setRange}
        placeholder="Select range"
        required
      />

      <button
        onClick={handleSubmit}
        disabled={!country || !focus || selectedIndustries.length === 0 || !range}
        className="w-full py-3 rounded-xl text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg"
        style={{ backgroundColor: '#6C63FF' }}
      >
        Next
      </button>
    </GlassCard>
  );
}
