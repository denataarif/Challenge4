import React from 'react'

import style from './layout.module.css'

const Layout = ({ children }) => {
    return(
        <>
            {/* Navbar */}
            <div className='navbar sticky-top bg-light'>
                <div className='container'>
                    <div className='logo'>
                        <img src="/images/logo.png" />
                    </div>
                    <div className='Menu'>
                        <ul className={style.menuList}>
                            <li className={style.menuListItem}><a href='#'>Our Services</a></li>
                            <li className={style.menuListItem}><a href='#'>Why Us</a></li>
                            <li className={style.menuListItem}><a href='#'>Testimonial</a></li>
                            <li className={style.menuListItem}><a href='#'>FAQ</a></li>
                            <li className={style.menuListItem}><button className={style.submit} type="submit">Register</button></li>
                        </ul>
                    </div>
                </div>
                
            </div>

            {children}

            {/* Footer */}
            <div className={style.footer}>
            <div className="container">
                <div className='row'>
                    <div className="alamat col-3">
                        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                        <p>binarcarrental@gmail.com</p>
                        <p>081-233-334-808</p>
                    </div>
                    <div className={`col-3 ${style.navigation}`}>
                        <ul className={style.navigationList}>
                            <li className={`${style.navigationListItem}`}><a href='#'>Our Services</a></li>
                            <li className={`${style.navigationListItem}`}><a href='#'>Why Us</a></li>
                            <li className={`${style.navigationListItem}`}><a href='#'>Testimonial</a></li>
                            <li className={`${style.navigationListItem}`}><a href='#'>FAQ</a></li>
                        </ul>
                    </div>
                    <div className="contactUs col-3">
                        <p>Connect With Us</p>
                        <div className="logoSosmed">
                            <img className={style.logoSosmedItem} src="/images/icon_facebook.png" alt="Icon Facebook" />
                            <img className={style.logoSosmedItem} src="/images/icon_instagram.png" alt="Icon Insytagram" />
                            <img className={style.logoSosmedItem} src="/images/icon_twitter.png" alt="Icon Twitter" />
                            <img className={style.logoSosmedItem} src="/images/icon_mail.png" alt="Icon Mail" />
                            <img className={style.logoSosmedItem} src="/images/icon_twitch.png" alt="Icon Twitch" />
                        </div>
                    </div>
                    <div className="copyRight col-3">
                        <p>Copyright Binar 2022</p>
                        <img src="/images/logo.png" alt="Logo" />
                    </div>
                </div>
            </div>
            </div>
        </>
        
    )
}

export default Layout