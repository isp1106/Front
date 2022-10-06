import React, { useState } from 'react'
import CategoryHeader from './Category/CategoryHeader'

const Search = () => {
  const [focus, setFocus] = useState(false)
  return (
    <div>
      <CategoryHeader focus={focus} setFocus={setFocus} />
    </div>
  )
}

export default Search
