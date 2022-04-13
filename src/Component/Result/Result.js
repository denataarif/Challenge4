import React, { useState, useEffect } from 'react'

import style from './result.module.css'

import CarCard from './CarCard'
import DetailCar from './DetailCar'
import SearchBar from '../SearchBar/SeacrhBar'
import axios from 'axios'


const Result = () => {

    const [cars, setCars] = useState([]);
    useEffect(() => {
        axios.get('https://rent-cars-api.herokuapp.com/admin/car')
            .then(res => {
                setCars(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return(
        <>
            <div className={style.space}></div>
            <SearchBar/>
            <div className={style.result_container}>
                {cars && cars.map((car, index) => {
                    return(
                        <CarCard 
                            key={index}
                            id={car.id}
                            name={car.name}
                            price={car.price}
                            image={car.image}
                        />
                    )        
                })}
            </div>
            
        </>
    )
}

export default Result