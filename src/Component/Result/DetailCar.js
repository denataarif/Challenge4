import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

import SearchBar from '../SearchBar/SeacrhBar'
import style from './result.module.css'

const DetailCar = () => {

    const param = useParams()
    const [car, setCar] = useState()
    useEffect(() => {
        axios.get(`https://rent-cars-api.herokuapp.com/admin/car/${param.id}`)
            .then(res => {
                setCar(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return(
        <>
            <div className={`bg-light ${style.space}`}></div>
            <SearchBar/>
            <div className="container mt-5">
                <div className={`row justify-content-between`}>
                    <div className={`col-7 ${style.detailCar}`}>
                        <div className="tentangPaket">
                            <h6>Tentang Paket</h6>
                            <p>include</p>
                            <ul>
                                <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                <li>Sudah termasuk bensin selama 12 jam</li>
                                <li>Sudah termasuk Tiket Wisata</li>
                                <li>Sudah termasuk pajak</li>
                            </ul>
                            <p>Exclude</p>
                            <ul>
                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                <li>Tidak termasuk akomodasi penginapan</li>
                            </ul>
                        </div>
                        <div className="refund">
                            <h6>Refund, Reschedule, Overtime</h6>
                            <ul>
                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                <li>Tidak termasuk akomodasi penginapan</li>
                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                <li>Tidak termasuk akomodasi penginapan</li>
                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                <li>Tidak termasuk akomodasi penginapan</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-5">
                    {car && 
                        <div className={`card ${style.carDetailCar} `} >
                            <img className="card-img-top" src={car.image} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-tittle">{car.name}</h5>
                                <div className="d-flex">
                                    <p className="detailListItems mr-2"> <img src="/images/fi_users.png" /> 4 orang</p>
                                    <p className="detailListItems mr-2"> <img src="/images/fi_settings.png" /> Manual</p>
                                    <p className="detailListItems mr-2"> <img src="/images/fi_calendar.png" /> Tahun 2022</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p>Total</p>
                                    <p><b>Rp {car.price}</b></p>
                                </div>
                                <a href="#" className="btn btn-success btn-block">Lanjutkan Pembayaran</a>
                            </div>
                        </div>
                        }
                </div>
                </div>
                <div className='d-flex justify-content-center mt-5'>
                    <a href="#" className='btn btn-success'>Lanjutkan Pembayaran</a>
                </div>
            </div>
        </>
    )
}

export default DetailCar