import SwiperContainer from './SwiperContainer'

const TodayBest = ({ category }) => {
  return (
    <>
      <div className="text-xl font-bold ml-5 mb-5 mt-20">
        <span className="text-primary">오늘</span>의 {category} 베스트
      </div>
      <SwiperContainer category={category} />
    </>
  )
}

export default TodayBest
