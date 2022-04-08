import React from 'react'

import style from './searchbar.module.css'

const SearchBar = () => {
    return(
        <>
            <div>
                <form id="search-car">
                    <div className={style.search_container}>
                        <div className={style.search_group}>
                            <label>Tipe Driver</label>
                            <select>
                                <option>Driver Jarak Jauh</option>
                                <option>Driver Jarak Dekat</option>                            </select>
                        </div>
                        <div className={style.search_group}>
                            <label>Tanggal</label>
                            <input type="date"></input>
                        </div>
                        <div className={style.search_group}>
                            <label>Waktu Jemput/Ambil</label>
                            <input type="time"></input>
                        </div>
                        <div className={style.search_group}>
                            <label>Jumlah Penumpang (optional)</label>
                            <input type="text"></input>
                        </div>
                        <div className={style.submit}>
                            <button type='submit'>Cari Mobil</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SearchBar