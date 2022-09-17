import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Like from './pages/Like'
import Onul from './pages/Onul'
import Login from './pages/Login'
import Cart from './pages/Cart'
import MyPage from './pages/MyPage'
import SignUp from './pages/SignUp'
import Category from './pages/Category'
import NavBottom from './components/layout/NavBottom'

function App() {
  const location = useLocation()
  const currentPath = location.pathname
  return (
    <div className="pb-[64px]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/onul" element={<Onul />} />
        <Route path="/like" element={<Like />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {currentPath !== '/signup' && <NavBottom />}
    </div>
  )
}

export default App
