import React from 'react'

import style from './header.module.css'

const Header = () => {
    return(
        <>
            <div className='navbar bg-light'>
                <div className='logo'>
                    <img src="/images/logo.png" />
                </div>
                <div className='Menu'>
                    <ul className={style.menuList}>
                        <li className={style.menuListItem}><a href='#' className={style.menuListItema}>Our Services</a></li>
                        <li className={style.menuListItem}><a href='#' className={style.menuListItema}>Why Us</a></li>
                        <li className={style.menuListItem}><a href='#' className={style.menuListItema}>Testimonial</a></li>
                        <li className={style.menuListItem}><a href='#' className={style.menuListItema}>FAQ</a></li>
                        <li className={style.menuListItem}><button className={style.submit} type="submit">Register</button></li>
                    </ul>
                </div>
            </div>
        </>

    )
}

export default Header