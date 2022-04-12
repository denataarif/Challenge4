import React from 'react'
import { Link } from 'react-router-dom'
import style from './searchbar.module.css'

const SearchBar = () => {
    return(
        <>
            <div>
                <form id="search-car">
                    <div className={style.search_container}>
                        <div className={style.search_group}>
                            <label>Tipe Driver</label>
                            <select placeholder='Pilih Tipe Driver'>
                                <option>Driver Jarak Jauh</option>
                                <option>Driver Jarak Dekat</option>                           
                            </select>
                        </div>
                        <div className={style.search_group}>
                            <label>Tanggal</label>
                            <input type="date" placeholder='Pilih Tanggal'></input>
                        </div>
                        <div className={style.search_group}>
                            <label>Waktu Jemput/Ambil</label>
                            <input type="time"></input>
                        </div>
                        <div className={style.search_group}>
                            <label>Jumlah Penumpang (optional)</label>
                            <input type="text"></input>
                        </div>
                        <Link to={`/result/`} className={style.submit}>
                            <button type='submit'>Cari Mobil</button>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SearchBar