import './Statistics.css'
import {useContext} from "react";
import BikeContext from "./context/BikeContext";

function Statistics() {

    const {bikeArray} = useContext(BikeContext)
    let totalBikes = bikeArray.length
    let totalPrice = 0
    bikeArray.forEach(bike => {
        totalPrice += +bike.price;
    })
    let xxx = +totalPrice / totalBikes

    return (
        <div className='statistic'>
            <div className='statistic-title'>Statistics</div>
            <div className='statistic-item'>Total Bikes: <span>{totalBikes}</span></div>
            <div className='statistic-item'>Available Bikes: <span>0</span></div>
            <div className='statistic-item'>Booked Bikes: <span>0</span></div>
            <div className='statistic-item'>Average bike cost: <span>{xxx}</span>UAH/hr.</div>
        </div>
    );
}

export default Statistics
