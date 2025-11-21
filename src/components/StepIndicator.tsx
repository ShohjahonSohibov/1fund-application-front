interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-center gap-2 mb-2">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className="h-2 rounded-full transition-all duration-300"
            style={{
              width: index === currentStep ? '40px' : '24px',
              backgroundColor: index === currentStep ? '#6C63FF' : index < currentStep ? '#00C9A7' : '#E0E0E0'
            }}
          />
        ))}
      </div>
      <p className="text-center text-sm text-gray-600">
        Step {currentStep + 1} of {totalSteps}
      </p>
    </div>
  );
}
