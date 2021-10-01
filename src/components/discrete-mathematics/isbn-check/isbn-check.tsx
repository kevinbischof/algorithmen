import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useFetch } from 'react-async'
import Title from '../../styles/title'
import Input from '../../styles/input'
import ButtonSkins from '../../styles/button'
import { GoogleBook } from './isbn-check.types'
import Book from './partial/isbn-check.book'

const reducer = (previousValue: number, currentValue: number) => previousValue + currentValue

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
      <br />
      {isbn && (
        <div>
          ISBN: {isbn} ist {isbnResult ? 'korrekt' : 'falsch'}
          <Book isbn={isbn} />
        </div>
      )}
    </IsbnCheckContainer>
  )
}

export default IsbnCheck
