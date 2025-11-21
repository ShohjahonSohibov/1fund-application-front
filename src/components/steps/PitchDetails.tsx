import { useState } from 'react';
import { Upload, ArrowLeft } from 'lucide-react';
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
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = () => {
    if (problem && solution) {
      onNext({ problem, solution, fileName });
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

      <div className="mb-6">
        <label className="block mb-2 text-sm text-gray-700">
          Upload Pitch Deck <span className="text-gray-400">(Optional)</span>
        </label>
        <label className="flex items-center justify-center gap-2 px-4 py-6 rounded-xl border-2 border-dashed cursor-pointer transition-colors hover:border-purple-500 hover:bg-purple-50">
          <Upload size={20} style={{ color: '#6C63FF' }} />
          <span className="text-gray-600">
            {fileName || 'Click to upload PDF or PPT'}
          </span>
          <input
            type="file"
            accept=".pdf,.ppt,.pptx"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
        {fileName && (
          <p className="text-sm text-green-600 mt-2">✓ {fileName} uploaded</p>
        )}
      </div>

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
