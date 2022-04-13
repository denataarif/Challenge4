import React from 'react'

import style from './hero.module.css'

const Hero = () => {
    return(
        <>
            <section className="hero bg-light d-flex align-item-center">
                    <div className="container-fluid heroes mt-5 d-flex align-item-center">
                        <div className='container'>
                            <div className="row ">
                                <div className={`col-6 ${style.heroDescription}`}>
                                    <h1 className="font-hel font-bold font-36">Sewa dan Rental Mobil Terbaik di Kawasan (Lokasimu)</h1>
                                    <p className="font-hel font-14 font-w300">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebututhanmu untuk sewa mobil selama 24 jam.</p>
                                </div>
                                <div className={`col-6 ${style.heroImage}`}>
                                    <img src="/images/img_car.png" alt="Gambar Mobil"/>
                                </div>
                            </div>
                        </div>
                    </div>
                
            </section>
        </>
    )
}

export default Hero