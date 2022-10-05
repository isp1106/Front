import { cls } from '../../utils'
const SwitchBtn = ({ category, changeHandler, active }) => {
  return (
    <div className="w-[42px] h-[84px] overflow-hidden transition grid-rows-2 fixed rounded-lg border border-point grid bottom-20 right-5 text-[12px] font-bold overflow-hidden">
      {category.map((item, index) => (
        <div
          key={index}
          onClick={changeHandler}
          className={cls(
            'transition flex justify-center items-center',
            active === item
              ? 'bg-point text-white '
              : 'bg-white text-black-600 ',
          )}
        >
          {item}
        </div>
      ))}
    </div>
  )
}

export default SwitchBtn
