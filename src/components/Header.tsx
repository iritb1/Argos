import React from 'react'
import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify} from 'react-icons/bs'

function Header({OpenSidebar}) {
    const StartDate = new Date('2023-10-07');
    const currentDate = new Date();
    const differenceInMilliseconds = currentDate.getTime() - StartDate.getTime();
    const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            {/* <BsSearch  className='icon'/> */}
            <div>חרבות ברזל יום {differenceInDays}</div>
        </div>
        <div className='header-right'>
            <BsFillBellFill className='icon'/>
            <BsPersonCircle className='icon'/>
        </div>
    </header>
  )
}

export default Header