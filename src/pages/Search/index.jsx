import React, { useState } from 'react'
import { useEffect } from 'react'
import CategoryHeader from '../Category/CategoryHeader'
import BeforeSearch from './BeforeSearch'

function Search() {
  const [focus, setFocus] = useState(false)
  const [inputAnimation, setInputAnimation] = useState('')

  useEffect(() => {
    setFocus(true)
    setInputAnimation('openSearchBar')
    setTimeout(() => {
      setInputAnimation('')
    }, 1000)
  }, [])
  return (
    <div>
      <CategoryHeader
        focus={focus}
        setFocus={setFocus}
        animation={inputAnimation}
        setAnimation={setInputAnimation}
      />
      <BeforeSearch focus={focus} setFocus={setFocus} />
    </div>
  )
}

export default Search
