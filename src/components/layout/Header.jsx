import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div  className='border-green-700 border-4'>
      <img src="assets/logoSmall.svg" alt="logo image" className='flex justify-start align-middle'/>

      <img src="assets/search_icon.svg" alt="search" />
      </div>
   

    </div>
  )
}

export default Header