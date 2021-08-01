import React, {useState} from "react";
import BikeContext from "./BikeContext";
import * as localForage from 'localforage'

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

    const saveDataToDB = (field, data) => {  
        localForage.setItem(field, data)
    };
    
    const onBikeCreate = (newBike) => {
      let checkDoubleIDArray = bikeArray.map(bike => {
         if(newBike.bikeID === bike.bikeID) 
          return bike.bikeID
          }
        )
        checkDoubleIDArray.includes(newBike.bikeID)?alert('Такий ID вже існує!'):setBikeArray([newBike, ...bikeArray])  //checking bikes on double ID
        saveDataToDB(`ID: ${newBike.bikeID}`, newBike)
    }

    saveDataToDB('arr', bikeArray)
    
    const [bikeInput, setBikeInpuT] = useState(defoltValue);

    const removeBike = (id) => {                                                    // Delete bike
        setBikeArray(bikeArray.filter(bike => bike.bikeID !== id))
    }

    const clearInput = () => {                                                              // clear input
        setBikeInpuT(defoltValue)
    }

    const handleBikeChange = (name, value) =>{                                      //adding data from input
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
           AveragePriceCounter,
           saveDataToDB
       }}>
           {children}
       </BikeContext.Provider>
    );
}

export default BikeContextprovider
