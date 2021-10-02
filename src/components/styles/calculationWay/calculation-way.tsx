import React from 'react'
import Step from './step'

interface CalculationWayProps {
  calculationSteps: React.ReactElement[]
}

export const CalculationWay = ({ calculationSteps }: CalculationWayProps): React.ReactElement => {
  return (
    <>
      {calculationSteps.map((step) => {
        return <Step key={step.key}>{step}</Step>
      })}
    </>
  )
}

export default CalculationWay
