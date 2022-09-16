import TodayMagazine from './TodayMagazine'
const Latest = () => {
  return (
    <div className="relative bg-primary h-[37.5rem] before:content-[attr(before)] before:absolute before:w-full before:h-48 before:bg-[#FEF1DD] before:bottom-0 z-1">
      <h2 className="py-10 px-5 bg-primary border-2 border-white border-b-2 border-l-0 border-r-0 border-t-0 text-white text-xl font-bold">
        오늘의 추천 매거진
      </h2>
      <div className="bg-primary flex flex-col items-end pr-[1.875rem]">
        <h3 className="text-[2rem] text-white">スタイル</h3>
        <p className="text-xs text-white w-[10.5rem] text-right mb-12">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea
        </p>
        <TodayMagazine />
        {/* 누끼이미지추가예정 */}
      </div>
    </div>
  )
}

export default Latest
