import './Statistics.css'
import {useContext} from "react";
import BikeContext from "./context/BikeContext";

function Statistics() {

    const {bikeArray, availableBikes, bookedBikes, AveragePriceCounter} = useContext(BikeContext)

    const averageCost = Math.round(AveragePriceCounter().toFixed(4))



    return (
        <div className='statistic'>
            <div className='statistic-title'>Statistics</div>
            <div className='statistic-item'>Total Bikes: <span>{bikeArray.length}</span></div>
            <div className='statistic-item'>Available Bikes: <span>{availableBikes.length}</span></div>
            <div className='statistic-item'>Booked Bikes: <span>{bookedBikes.length}</span></div>
            <div className='statistic-item'>Average bike cost:
                <span> {averageCost > 0 && averageCost}{isNaN(averageCost) && 0.00}</span> UAH/hr.</div>
        </div>
    );
}

export default Statistics
