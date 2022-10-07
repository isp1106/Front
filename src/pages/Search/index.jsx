import React, { useState } from 'react'
import { useEffect } from 'react'
import BeforeSearch from './BeforeSearch'
import SearchHeader from './SearchHeader'

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
      <SearchHeader
        focus={focus}
        setFocus={setFocus}
        animation={inputAnimation}
        setAnimation={setInputAnimation}
      />
      <BeforeSearch
        focus={focus}
        setFocus={setFocus}
        animation={inputAnimation}
        setAnimation={setInputAnimation}
      />
    </div>
  )
}

export default Search
