import { Check } from "lucide-react";

interface TrustBadgeProps {
  label: string;
}

export function TrustBadge({ label }: TrustBadgeProps) {
  return (
    <div 
      className="inline-flex items-center gap-2 px-6 py-3 rounded-full shadow-md"
      style={{ backgroundColor: 'white', border: '2px solid #88D498' }}
    >
      <div 
        className="w-6 h-6 rounded-full flex items-center justify-center"
        style={{ backgroundColor: '#1A936F' }}
      >
        <Check size={16} color="white" strokeWidth={3} />
      </div>
      <span style={{ color: '#114B5F' }}>{label}</span>
    </div>
  );
}
