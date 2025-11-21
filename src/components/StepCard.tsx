import { LucideIcon } from "lucide-react";

interface StepCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  stepNumber: number;
}

export function StepCard({ icon: Icon, title, description, stepNumber }: StepCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative mb-6">
        <div 
          className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg" 
          style={{ backgroundColor: '#1A936F' }}
        >
          <Icon size={36} color="white" />
        </div>
        <div 
          className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center"
          style={{ backgroundColor: '#114B5F', color: 'white' }}
        >
          <span>{stepNumber}</span>
        </div>
      </div>
      <h4 className="mb-3" style={{ color: '#114B5F' }}>{title}</h4>
      <p className="text-gray-600 max-w-xs">{description}</p>
    </div>
  );
}
