import React from 'react'
import { Link } from 'react-router-dom'
const CarCard = (props) => {
    return(
        <>
        <div className="card" >
            <img className="card-img-top" src={props.image} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-tittle">{props.name}</h5>
                <h5 className="card-title">Rp {props.price} / Hari</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p> <img src="/images/fi_users.png" /> 4 orang</p>
                <p> <img src="/images/fi_settings.png" /> Manual</p>
                <p> <img src="/images/fi_calendar.png" /> Tahun 2022</p>
                <Link to={`/detail/ ${props.id}`}>
                    <a className="btn btn-success btn-block">Go somewhere</a>
                </Link>
            </div>
        </div>
</>
    )
}

export default CarCard