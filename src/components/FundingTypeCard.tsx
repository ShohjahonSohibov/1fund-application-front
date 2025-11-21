import { LucideIcon } from "lucide-react";

interface FundingTypeCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FundingTypeCard({ icon: Icon, title, description }: FundingTypeCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
      <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: '#88D498' }}>
        <Icon size={32} style={{ color: '#114B5F' }} />
      </div>
      <h3 className="mb-4" style={{ color: '#114B5F' }}>{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
