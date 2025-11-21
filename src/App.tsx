import { useState } from "react";
import { AccountTypeSelection } from "./components/steps/AccountTypeSelection";
import { CreateAccount } from "./components/steps/CreateAccount";
import { StartupBasicInfo } from "./components/steps/StartupBasicInfo";
import { FoundersInfo } from "./components/steps/FoundersInfo";
import { PitchDetails } from "./components/steps/PitchDetails";
import { FundingInformation } from "./components/steps/FundingInformation";
import { SuccessScreen } from "./components/steps/SuccessScreen";
import { InvestorCreateAccount } from "./components/steps/InvestorCreateAccount";
import { InvestorType } from "./components/steps/InvestorType";
import { InvestorProfile } from "./components/steps/InvestorProfile";
import { InvestorVerification } from "./components/steps/InvestorVerification";
import { InvestmentPreferences } from "./components/steps/InvestmentPreferences";
import { InvestorSuccessScreen } from "./components/steps/InvestorSuccessScreen";

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [accountType, setAccountType] = useState<
    "startup" | "investor" | null
  >(null);
  const [formData, setFormData] = useState<any>({});

  const handleAccountTypeSelect = (
    type: "startup" | "investor",
  ) => {
    setAccountType(type);
    setCurrentStep(1);
  };

  const handleStepComplete = (data: any) => {
    setFormData({ ...formData, ...data });
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
    if (currentStep === 1) {
      setAccountType(null);
    }
  };

  const handleComplete = () => {
    console.log("Signup complete!", formData);
    // In a real app, this would navigate to the dashboard
    alert(`Welcome to 1good Investors! 🚀`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      {/* Logo */}
      <div className="fixed top-8 left-8">
        <div className="flex items-center gap-2">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: "#6C63FF" }}
          >
            <span className="text-white text-xl">1</span>
          </div>
          <span className="text-white text-xl hidden md:inline">
            1good Investors
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-4xl">
        {currentStep === 0 && (
          <AccountTypeSelection
            onSelect={handleAccountTypeSelect}
          />
        )}

        {/* Startup Flow */}
        {currentStep === 1 && accountType === "startup" && (
          <CreateAccount
            onNext={handleStepComplete}
            onBack={handleBack}
          />
        )}

        {currentStep === 2 && accountType === "startup" && (
          <StartupBasicInfo
            onNext={handleStepComplete}
            onBack={handleBack}
          />
        )}

        {currentStep === 3 && accountType === "startup" && (
          <FoundersInfo
            onNext={handleStepComplete}
            onBack={handleBack}
          />
        )}

        {currentStep === 4 && accountType === "startup" && (
          <PitchDetails
            onNext={handleStepComplete}
            onBack={handleBack}
          />
        )}

        {currentStep === 5 && accountType === "startup" && (
          <FundingInformation
            onNext={handleStepComplete}
            onBack={handleBack}
          />
        )}

        {currentStep === 6 && accountType === "startup" && (
          <SuccessScreen onComplete={handleComplete} />
        )}

        {/* Investor Flow */}
        {currentStep === 1 && accountType === "investor" && (
          <InvestorCreateAccount
            onNext={handleStepComplete}
            onBack={handleBack}
          />
        )}

        {currentStep === 2 && accountType === "investor" && (
          <InvestorType
            onNext={handleStepComplete}
            onBack={handleBack}
          />
        )}

        {currentStep === 3 && accountType === "investor" && (
          <InvestorProfile
            onNext={handleStepComplete}
            onBack={handleBack}
          />
        )}

        {currentStep === 4 && accountType === "investor" && (
          <InvestorVerification
            onNext={handleStepComplete}
            onBack={handleBack}
          />
        )}

        {currentStep === 5 && accountType === "investor" && (
          <InvestmentPreferences
            onNext={handleStepComplete}
            onBack={handleBack}
          />
        )}

        {currentStep === 6 && accountType === "investor" && (
          <InvestorSuccessScreen onComplete={handleComplete} />
        )}
      </div>

      {/* Background decorative elements */}
      <div
        className="fixed top-20 right-20 w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ backgroundColor: "#00C9A7" }}
      />
      <div
        className="fixed bottom-20 left-20 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ backgroundColor: "#6C63FF" }}
      />
    </div>
  );
}