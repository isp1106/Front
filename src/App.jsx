import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Like from './pages/Like'
import Oneul from './pages/Oneul'
import Login from './pages/Login'
import Cart from './pages/Cart'
import MyPage from './pages/MyPage'
import MyReview from './pages/MyReview'
import SignUp from './pages/SignUp'
import Category from './pages/Category'
import NavBottom from './components/layout/NavBottom'
import TermService from './pages/SignUp/TermService'
import SignUpId from './pages/SignUp/SignUpId'
import SignUpPw from './pages/SignUp/SignUpPw'
import UserInfo from './pages/SignUp/UserInfo'
import Finish from './pages/SignUp/Finish'
import Product from './pages/Product'
import ProductDetail from './pages/ProductDetail'
import SnapDetail from './pages/SnapDetail'
import MagazineDetail from './pages/MagazineDetail'
import Search from './pages/Search'

function App() {
  const location = useLocation()
  const currentPath = location.pathname
  return (
    <div className="pb-[75px]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/oneul" element={<Oneul />} />
        <Route path="/like" element={<Like />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />

        {/*실제사용 아래 임시 <Route path="/product/detail/:id" element={<DetailPage />} /> */}
        <Route path="/product/detail" element={<ProductDetail />} />
        <Route path="/oneul/detail" element={<SnapDetail />} />
        <Route path="/magazine/id" element={<MagazineDetail />} />
        <Route path="/my/review" element={<MyReview />} />
        <Route path="/signup" element={<SignUp />}>a
          <Route path="" element={<TermService />} />
          <Route path="idform" element={<SignUpId />} />
          <Route path="pwform" element={<SignUpPw />} />
          <Route path="infoform" element={<UserInfo />} />
          <Route path="finish" element={<Finish />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      {!currentPath.includes('/signup') &&
        !currentPath.includes('/detail') &&
        !currentPath.includes('/cart') && <NavBottom />}
    </div>
  )
}

export default App
