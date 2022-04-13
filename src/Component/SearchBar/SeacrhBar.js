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
                            <label for='inputState'>Tipe Driver</label>
                            <select id='inputState'>
                                <option selected>Pilih Tpe Driver.</option>
                                <option>Dengan Sopir</option>
                                <option>Tanpa Sopir (lepas kunci)</option>                           
                            </select>
                        </div>
                        <div className={style.search_group}>
                            <label for="inputAddress2">Tanggal</label>
                            <input type="date" placeholder='Pilih Tanggal' id="inputAddress2"></input>
                        </div>
                        <div className={style.search_group}>
                            <label for="inputAddress2">Waktu Jemput/Ambil</label>
                            <input type="time" id='inputAddress2' placeholder='Pilih Waktu'></input>
                        </div>
                        <div className={style.search_group}>
                            <label for='inputAddress2'>Jumlah Penumpang (optional)</label>
                            <input type="text" id='inputAddress2' placeholder='Jumlah Penumpang'></input>
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