import React from 'react'

const CarCard = () => {
    return(
        <>
        <div className="card" >
            <img className="card-img-top" src="/images/Group_16.png" alt="Card image cap"/>
            <div className="card-body">
                <p className="card-text">Nama/Tipe Mobil</p>
                <h5 className="card-title">Rp 430.000 / hari</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p> <img src="/images/fi_users.png" /> 4 orang</p>
                <p> <img src="/images/fi_settings.png" /> Manual</p>
                <p> <img src="/images/fi_calendar.png" /> Tahun 2022</p>
                <a href="#" className="btn btn-success">Go somewhere</a>
            </div>
        </div>
</>
    )
}

export default CarCard