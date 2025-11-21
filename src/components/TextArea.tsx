interface TextAreaProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  rows?: number;
}

export function TextArea({ label, placeholder, value, onChange, required = false, rows = 3 }: TextAreaProps) {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors resize-none"
        style={{ borderColor: '#E0E0E0' }}
        onFocus={(e) => e.target.style.borderColor = '#6C63FF'}
        onBlur={(e) => e.target.style.borderColor = '#E0E0E0'}
      />
    </div>
  );
}
