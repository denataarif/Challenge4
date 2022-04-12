import React, {useEffect,useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import SearchBar from '../SearchBar/SeacrhBar'

const DetailCar = () => {

    const param = useParams();
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
            <SearchBar/>
            <div className="container mt-5">
                <div className='row justify-content-between'>
                    <div className="col">
                        <div className="tentangPaket">
                            <h6>Tentang Paket</h6>
                            <p>include</p>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <p>Exclude</p>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        <div className="refund">
                            <h6>Refund, Reschedule, Overtime</h6>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" >
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