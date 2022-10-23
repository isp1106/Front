import React, { useState, useEffect } from 'react'
import Main from '../../components/Main'
import LoadingPage from '../LoadingPage'

const Home = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  return <>{loading ? <LoadingPage /> : <Main />}</>
}

export default Home
