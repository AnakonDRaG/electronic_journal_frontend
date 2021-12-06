import { useState } from 'react'

export const useStep = (totalSteps: number) => {
  const [currentStep, setCurrentStep] = useState<number>(0)

  const onNextStep = () =>
    currentStep < totalSteps ? setCurrentStep(currentStep + 1) : totalSteps

  const onPrevStep = () =>
    currentStep > 0 ? setCurrentStep(currentStep - 1) : 0

  return { currentStep, onNextStep, onPrevStep }
}
