import { Route, Routes, useLocation } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import './App.css'
import Home from './pages/Home'
import Like from './pages/Like'
import Oneul from './pages/Oneul'
import Login from './pages/Login'
import Cart from './pages/Cart'
import MyPage from './pages/My/MyPage'
import MyPageComp from './components/My/MyPage'
import MyReview from './pages/My/MyReview'
import MyReviewComp from './components/My/MyReview'
import MyReviewWrite from './components/My/MyReview/Write'
import SignUp from './pages/SignUp'
import Category from './pages/Category'
import NavBottom from './components/layout/NavBottom'
import TermService from './pages/SignUp/TermService'
import SignUpId from './pages/SignUp/SignUpId'
import SignUpPw from './pages/SignUp/SignUpPw'
import UserInfo from './pages/SignUp/UserInfo'
import Finish from './pages/SignUp/Finish'
import Product from './pages/Product'
import ProductDetail from './pages/Prdoucts/ProductDetail'
import SnapDetail from './pages/SnapDetail'
import MagazineDetail from './pages/MagazineDetail'
import Search from './pages/Search'
import Order from './pages/Order'
import QnA from './pages/My/QnA'
import QnAComp from './components/My/QnA'
import QnADetail from './components/My/QnADetail'
import QnAWrite from './components/My/QnAWrite'
import Notice from './pages/Notice'
import Faq from './pages/Faq'
import CategoryFashion from './components/Category'
import MainCategory from './pages/Category/MainCategory'



function App() {
  const location = useLocation()
  const currentPath = location.pathname
  return (
    <div className="pb-[70px]">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />}>
            <Route index element={<MainCategory />} />
            <Route path=":topCG/:subCG" element={<CategoryFashion />} />
          </Route>
          <Route path="/oneul" element={<Oneul />} />
          <Route path="/like" element={<Like />} />
          <Route path="/my" element={<MyPage />}>
            <Route path="" element={<MyPageComp />} />
            <Route path="review" element={<MyReview />} >
              <Route path="" element={<MyReviewComp />} />
              <Route path="write" element={<MyReviewWrite />} />
            </Route>
            <Route path="qna" element={<QnA />}>
              <Route path="" element={<QnAComp />} />
              <Route path=":id" element={<QnADetail />} />
              <Route path="write" element={<QnAWrite />} />
            </Route>
          </Route>
          <Route path="/notice" element={<Notice />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/oneul/detail" element={<SnapDetail />} />
          <Route path="/magazine/:id" element={<MagazineDetail />} />
          <Route path="/signup" element={<SignUp />}>
            <Route path="" element={<TermService />} />
            <Route path="idform" element={<SignUpId />} />
            <Route path="pwform" element={<SignUpPw />} />
            <Route path="infoform" element={<UserInfo />} />
            <Route path="finish" element={<Finish />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<Search />} />
          <Route path="/order" element={<Order />} />
        </Routes>
        {!currentPath.includes('/signup') &&
          !currentPath.includes('/detail') &&
          !currentPath.includes('/cart') && <NavBottom />}
      </Provider>
    </div>
  )
}

export default App
