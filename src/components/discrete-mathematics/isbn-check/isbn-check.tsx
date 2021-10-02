import React, { useState } from 'react'
import styled from 'styled-components'
import Title from '../../styles/title'
import Input from '../../styles/input'
import ButtonSkins from '../../styles/button'
import Book from './partial/isbn-check.book'
import { reducer } from '../../../helpers/helper'

const ButtonStyled = styled.button`
  margin-top: 15px;
`

const IsbnCheckContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function checkIsbn(isbn: string): boolean {
  if (!isbn) return false

  const positions = isbn.split('')
  const multiplicators = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
  const gewichteteSumme = positions
    .map((position, index) => {
      return multiplicators[index] * Number(position)
    })
    .reduce(reducer)
  return gewichteteSumme % 11 === 0
}

function createCalculationWay(isbn: string): React.ReactElement[] {
  const array: React.ReactElement[] = []
  const step1 = <div>1. Gewichtete Summe S bestimmen</div>
  const step2 = <div>S = 10*a1 + 9*a2 + 8*a3 + 7*a4 + 6*a5 + 5*a6 + 4*a7 + 3*a8 + 2*a9 + 1*a10</div>

  const positions = isbn.split('')
  const multiplicators = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
  const singleMultiplicans: any[] = []
  positions.forEach((position, index) => {
    singleMultiplicans.push(multiplicators[index] * Number(position))
  })
  const step3 = (
    <div>
      S ={' '}
      {multiplicators.map((multiplicator, index) => {
        if (index === 9) return `${multiplicator}*${positions[index]}`
        return `${multiplicator}*${positions[index]} + `
      })}
    </div>
  )
  const gewichteteSumme = singleMultiplicans.reduce(reducer)
  const step4 = <div>S = {singleMultiplicans.join(' + ')}</div>
  const step5 = <div>S = {gewichteteSumme}</div>
  const step6 = <div>2. Prüfen, ob S ohne Rest durch 11 Teilbar ist </div>
  const step7 = <div>S % 11 {gewichteteSumme % 11 === 0 ? '=' : '!='} 0</div>

  array.push(step1, step2, step3, step4, step5, step6, step7)
  return array
}

export const IsbnCheck = () => {
  const [value, setValue] = useState('')
  const [isbn, setIsbn] = useState('')
  const [isbnResult, setIsbnResult] = useState<boolean>()
  const [isLoading, setIsLoading] = useState(false)

  return (
    <IsbnCheckContainer>
      <Title>ISBN-Check 10-Stellig</Title>
      <Input value={value} title="ISBN-Input" onChange={(e) => setValue(e.target.value)} />
      <br />
      <ButtonStyled
        type="submit"
        aria-label="submit"
        className={ButtonSkins.Simple}
        onClick={() => {
          setIsbn(value)
          setIsbnResult(checkIsbn(value))
        }}
      >
        Submit
      </ButtonStyled>
      {isbn && createCalculationWay(isbn)}
      <br />
      {isbn && (
        <div>
          ISBN: {isbn} ist {isbnResult ? 'korrekt' : 'falsch'}
          {isbnResult && <Book isbn={isbn} />}
        </div>
      )}
    </IsbnCheckContainer>
  )
}

export default IsbnCheck
