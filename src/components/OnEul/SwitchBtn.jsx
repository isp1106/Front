import { cls } from '../../utils'
const SwitchBtn = ({ category, changeHandler, active }) => {
  console.log(active === category[0], active)
  return (
    <div className="transition fixed rounded-lg shadow-md flex flex-col justify-evenly items-center top-[420px] right-2 text-[12px] font-bold overflow-hidden">
      {category.map((item, index) => (
        <div
          key={index}
          onClick={changeHandler}
          className={cls(
            'transition flex justify-center items-center  w-[42px] h-[42px]  ',
            active === item
              ? 'bg-primary text-white'
              : ' bg-white text-black-600',
          )}
        >
          {item}
        </div>
      ))}
    </div>
  )
}

export default SwitchBtn
