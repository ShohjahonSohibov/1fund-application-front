interface SelectProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
}

export function Select({ label, options, value, onChange, placeholder = 'Select...', required = false }: SelectProps) {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors appearance-none bg-white"
        style={{ borderColor: '#E0E0E0' }}
        onFocus={(e) => e.target.style.borderColor = '#6C63FF'}
        onBlur={(e) => e.target.style.borderColor = '#E0E0E0'}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
