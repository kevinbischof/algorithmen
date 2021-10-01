import React, { useEffect } from 'react'
import { useFetch } from 'react-async'
import styled from 'styled-components'
import { GoogleBook } from '../isbn-check.types'

interface BookProps {
  isbn: string
}

const BookContainer = styled.div`
  display: flex;
  margin-top: 30px;
  border: lightgray 1px solid;
`
const BookInformations = styled.div``
const Cover = styled.div``

export function Book({ isbn }: BookProps): React.ReactElement {
  const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`
  const { data, error } = useFetch(url, {
    headers: { accept: 'application/json' },
  })
  const copy: GoogleBook = data as GoogleBook

  const { data: cover } = useFetch(`https://openlibrary.org/api/books?bibkeys=${isbn}&format=json`, {
    headers: { accept: 'application/json' },
  })
  let thumbnail = null
  if (cover) {
    const copyCover = cover as any
    console.log(copyCover)
    if (copyCover[isbn]) {
      thumbnail = copyCover[isbn].thumbnail_url.replace('-S', '-L')
      console.log(thumbnail)
    }
  } else {
    thumbnail = null
  }

  return (
    <BookContainer>
      {copy && copy.items && (
        <>
          <BookInformations>
            <div>Book-Title: {copy.items[0].volumeInfo.title}</div>
            <div>Untertitel: {copy.items[0].volumeInfo.subtitle}</div>
            <div>Autoren: {copy.items[0].volumeInfo.authors}</div>
            <div>Veröffentlicht: {copy.items[0].volumeInfo.publishedDate}</div>
            {copy.items[0].volumeInfo.industryIdentifiers?.map((item, index) => {
              return (
                <div key={item.type}>
                  {item.type}: {item.identifier}
                </div>
              )
            })}
            <div>Seiten: {copy.items[0].volumeInfo.pageCount}</div>
            <div>Buch-Typ: {copy.items[0].volumeInfo.printType}</div>
            <div>Sprache: {copy.items[0].volumeInfo.language}</div>
          </BookInformations>
          {thumbnail && (
            <Cover>
              <img alt={copy.items[0].volumeInfo.title} src={thumbnail} />
            </Cover>
          )}
        </>
      )}
    </BookContainer>
  )
}

export default Book
