import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div 
        className="w-14 h-14 rounded-full flex items-center justify-center mb-4" 
        style={{ backgroundColor: '#1A936F' }}
      >
        <Icon size={24} color="white" />
      </div>
      <h4 className="mb-2" style={{ color: '#114B5F' }}>{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
