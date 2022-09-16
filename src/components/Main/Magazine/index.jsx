import SwiperMagazine from "./SwiperMagazine"

function Magazine() {
  const verticalWritingMode = {
    writingMode:'vertical-lr'
  }
  return (
    <div className='flex box-border border-2 border-primary border-l-0 border-r-0 m-auto'>
      <h2 className='w-[3.75rem] border-2 border-primary border-b-0 border-l-0 border-t-0 text-xl flex items-center justify-center leading-none font-bold text-primary relative'>
        <span style={verticalWritingMode} >최근 매거진</span>
      </h2>
      <SwiperMagazine />
    </div>
  )
}

export default Magazine
