import React, {useState} from "react";
import BikeContext from "./BikeContext";

const defoltValue = {
    bikeName: '',
    bikeType: '',
    bikeColor: '',
    bikeWheelSize: '',
    bikePrice: '',
    bikeID: '',
    bikeDescription: '',
    status: 'Available'
}

function BikeContextprovider({children}) {

    const initionalBikesState  = [];
    const [bikeArray, setBikeArray] = useState(initionalBikesState);

    const onBikeCreate = (newBike) => {
        bikeArray.map(bike => {
            if(newBike.bikeID === bike.bikeID){
                return alert('Такий ID вже існує!!!')
            }
        })
        setBikeArray([newBike, ...bikeArray])
    }

    const [bikeInput, setBikeInpuT] = useState(defoltValue);

    const removeBike = (id) => {                                                    // Видалити байк
        setBikeArray(bikeArray.filter(bike => bike.bikeID !== id))
    }

    const clearInput = () => {                                                              // очистити інпут
        setBikeInpuT(defoltValue)
    }

    const handleBikeChange = (name, value) =>{                                      //додати дані з інпута
        setBikeInpuT({...bikeInput, [name]: value})
    }

    const availableBikes = bikeArray.filter(bike => bike.status === 'Available')
    const bookedBikes = bikeArray.filter(bike => bike.status !== 'Available')

    const AveragePriceCounter = () => {
        let totalPrice = 0
        bikeArray.forEach(bike => {
            totalPrice += +bike.bikePrice;
        })
        return totalPrice/bikeArray.length
    }


    return (
       <BikeContext.Provider value={{
           onBikeCreate,
           bikeArray,
           bikeInput,
           setBikeInpuT,
           setBikeArray,
           clearInput,
           handleBikeChange,
           defoltValue,
           removeBike,
           availableBikes,
           bookedBikes,
           AveragePriceCounter
       }}>
           {children}
       </BikeContext.Provider>
    );
}

export default BikeContextprovider
