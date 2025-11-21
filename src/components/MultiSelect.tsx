import { useState, useRef, useEffect } from 'react';
import { X, ChevronDown } from 'lucide-react';

interface MultiSelectProps {
  label: string;
  options: string[];
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
  required?: boolean;
}

export function MultiSelect({ label, options, value, onChange, placeholder = 'Select...', required = false }: MultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleOption = (option: string) => {
    if (value.includes(option)) {
      onChange(value.filter(v => v !== option));
    } else {
      onChange([...value, option]);
    }
  };

  const removeOption = (option: string) => {
    onChange(value.filter(v => v !== option));
  };

  return (
    <div className="mb-4" ref={dropdownRef}>
      <label className="block mb-2 text-sm text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      
      <div className="relative">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 cursor-pointer transition-colors min-h-[48px]"
          style={{ borderColor: isOpen ? '#6C63FF' : '#E0E0E0' }}
        >
          {value.length === 0 ? (
            <span className="text-gray-400">{placeholder}</span>
          ) : (
            <div className="flex flex-wrap gap-2">
              {value.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-sm"
                  style={{ backgroundColor: '#F8F7FF', color: '#6C63FF' }}
                >
                  {item}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeOption(item);
                    }}
                    className="hover:opacity-70"
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
            </div>
          )}
          <ChevronDown 
            size={20} 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
            style={{ color: '#9CA3AF' }}
          />
        </div>

        {isOpen && (
          <div className="absolute z-10 w-full mt-2 bg-white border-2 rounded-xl shadow-lg max-h-60 overflow-y-auto"
            style={{ borderColor: '#E0E0E0' }}
          >
            {options.map((option) => (
              <label
                key={option}
                className="flex items-center gap-3 px-4 py-3 hover:bg-purple-50 cursor-pointer transition-colors"
              >
                <input
                  type="checkbox"
                  checked={value.includes(option)}
                  onChange={() => toggleOption(option)}
                  className="w-4 h-4"
                  style={{ accentColor: '#6C63FF' }}
                />
                <span className="text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
