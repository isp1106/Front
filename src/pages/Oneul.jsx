import React, { useState } from 'react'
import OnEul from '../components/OnEul'
import SwitchBtn from '../components/OnEul/SwitchBtn'
const category = ['패션', '라이프']
const Onul = () => {
  const [active, setActive] = useState(category[0])
  const changeHandler = () => {
    active === category[0] ? setActive(category[1]) : setActive(category[0])
  }
  return (
    <div className="relative">
      <OnEul />
      <SwitchBtn
        category={category}
        changeHandler={changeHandler}
        active={active}
      />
    </div>
  )
}

export default Onul
