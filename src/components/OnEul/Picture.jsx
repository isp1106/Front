import React from 'react'
const Picture = () => {
  return (
    <div>
      <div
        className=" h-[270px] bg-cover relative"
        style={{
          backgroundImage: `url("https://image.musinsa.com/mfile_s01/cms-files/63185a04402762.02498053.jpg")`,
        }}
      >
        <h3 className="leading-[43.33px] text-3xl font-bold text-white absolute bottom-[40px] left-[20px]">
          한국 트렌드 세터 <br />
          Style ranker
        </h3>
      </div>
    </div>
  )
}

export default Picture
