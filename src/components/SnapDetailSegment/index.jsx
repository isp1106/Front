import Header from './Header'
import UserInfo from './UserInfo'
import Location from './Location'
import ProductShortCut from './ProductShortCut'
import ProductDetail from './ProductDetail'
const SnapDetialSegment = () => {
  return (
    <div>
      <Header />
      <UserInfo />
      <div className="px-5 pb-8">
        <Location />
        <ProductShortCut />
        <ProductDetail />
      </div>
    </div>
  )
}

export default SnapDetialSegment
