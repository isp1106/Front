import Header from './Header'
import Profile from './Profile'
import Process from './Process'
import MyPossession from './MyPossession'
import MyNav from './MyNav'
import Guest from './Guest'

const MyPageSegment = () => {
  // api (useEffect async await)
  const token = localStorage.getItem('accessToken')

  return (
    <div>
      <Header />
      {!token ? (
        <Guest />
      ) : (
        <>
          <Profile />
          <Process />
          <MyPossession />
        </>
      )}
      <MyNav />
    </div>
  )
}

export default MyPageSegment
