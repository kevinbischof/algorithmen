import React from 'react'
import styled from 'styled-components'

interface StepProps {
  children: React.ReactNode
}

const StepContainer = styled.div`
  display: flex;
  height: 70px;
`

export const Step = ({ children }: StepProps): React.ReactElement => {
  return <StepContainer>{children}</StepContainer>
}

export default Step
