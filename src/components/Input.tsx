interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

export function Input({ label, type = 'text', placeholder, value, onChange, required = false }: InputProps) {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
        style={{ borderColor: '#E0E0E0' }}
        onFocus={(e) => e.target.style.borderColor = '#6C63FF'}
        onBlur={(e) => e.target.style.borderColor = '#E0E0E0'}
      />
    </div>
  );
}
