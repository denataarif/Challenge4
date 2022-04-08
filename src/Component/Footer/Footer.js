import React from 'react'

import style from './footer.module.css'

const Footer = () => {
    return(
        <>
            <div className={style.footer}>
                <div className="alamat">
                    <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                    <p>binarcarrental@gmail.com</p>
                    <p>081-233-334-808</p>
                </div>
                <div className={style.navigation}>
                    <ul className={style.navigationList}>
                        <li className="navigationListItem"><a href='#'>Our Services</a></li>
                        <li className="navigationListItem"><a href='#'>Why Us</a></li>
                        <li className="navigationListItem"><a href='#'>Testimonial</a></li>
                        <li className="navigationListItem"><a href='#'>FAQ</a></li>
                    </ul>
                </div>
                <div className="contactUs">
                    <p>Connect With Us</p>
                    <div className="logoSosmed">
                        <img className={style.logoSosmedItem} src="/images/icon_facebook.png" alt="Icon Facebook" />
                        <img className={style.logoSosmedItem} src="/images/icon_instagram.png" alt="Icon Insytagram" />
                        <img className={style.logoSosmedItem} src="/images/icon_twitter.png" alt="Icon Twitter" />
                        <img className={style.logoSosmedItem} src="/images/icon_mail.png" alt="Icon Mail" />
                        <img className={style.logoSosmedItem} src="/images/icon_twitch.png" alt="Icon Twitch" />
                    </div>
                </div>
                <div className="copyRight">
                    <p>Copyright Binar 2022</p>
                    <img src="/images/logo.png" alt="Logo" />
                </div>
            </div>
        </>
    )
}

export default Footer