import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Like from './pages/Like'
import Onul from './pages/Onul'
import Login from './pages/Login'
import Cart from './pages/Cart'
import MyPage from './pages/MyPage'
import SignIn from './pages/SignIn'
import Category from './pages/Category'
import NavBottom from './components/layout/NavBottom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/onul" element={<Onul />} />
        <Route path="/like" element={<Like />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <NavBottom />
    </>
  )
}

export default App
