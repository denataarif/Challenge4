import React from 'react'

import style from './result.module.css'

import CarCard from './CarCard'


const Result = () => {
    return(
        <>
            <div className={style.result_container}>
                <CarCard />
                <CarCard />
                <CarCard />
            </div>
        </>
    )
}

export default Result