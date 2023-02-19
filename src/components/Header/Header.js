import React from 'react'
import './header.css'
import Logo from '../../assets/Funiro..svg'

const Header = () => {
  return (
   <header className='header'>
        <div className='container'>
            <nav className='header__nav'>
                <h1 className='header__title'>
                    <img src={Logo} alt=''/>
                    <ul className='heder__menu'>
                        <li className='header__item'>Products</li>
                        <li className='header__item'>Rooms</li>
                        <li className='header__item'>Contacts us</li>
                    </ul>
                </h1>
            </nav>
        </div>
   </header>
  )
}

export default Header;