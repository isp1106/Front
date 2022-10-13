import { useState } from 'react'
import { cls } from '../../../utils/index'
import { detailProducts } from '../../../dummy/detail'
import { ReactComponent as GoBackIcon } from '/public/assets/back-on.svg'

const DetailDesc = ({ list }) => {
  const [open, setOpen] = useState(false)
  const moreHnadler = () => {
    setOpen((prev) => !prev)
  }
  return (
    <div className="px-5">
      <div className={cls('overflow-hidden ', open ? '' : 'h-[3000px]')}>
        {list.map((item, idx) => (
          <img src={item} key={idx} />
        ))}
      </div>
      <div
        onClick={moreHnadler}
        className="flex items-center justify-center gap-4 border border-primary "
      >
        <p className="text-black-600 py-3 font-medium text-sm">
          상세 상품정보 더보기
        </p>
        <GoBackIcon
          className={cls(
            'w-[14px] h-[14px]',
            open ? 'rotate-90 ' : '-rotate-90',
          )}
        />
      </div>
      <div className="grid grid-cols-5 border border-black-200 w-full text-center text-[10px] leading-8 mt-8 text-black-200">
        <div className="border-r border-b border-black-200 bg-point">cm</div>
        <div className="border-r border-b border-black-200 bg-point">총장</div>
        <div className="border-r border-b border-black-200 bg-point ">
          어깨너비
        </div>
        <div className="border-r border-b border-black-200 bg-point">
          가슴단면
        </div>
        <div className="border-r border-b border-black-200 bg-point">
          소매길이
        </div>
        <div className="border-r border-b border-black-200 bg-point">1size</div>
        <div className="border-r border-black-200 text-black-800">66.5</div>
        <div className="border-r border-black-200 text-black-800">60</div>
        <div className="border-r border-black-200 text-black-800">68</div>
        <div className="text-black-800">86</div>
      </div>
    </div>
  )
}

export default DetailDesc
