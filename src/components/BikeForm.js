import './BikeForm.css'
import {useContext, useState} from "react";
import BikeContext from "./context/BikeContext";

function BikeForm() {

    const {onBikeCreate, bikeInput, setBikeInpuT, status} = useContext(BikeContext)




    const nameChangeHandler = (event) => {
        let value = event.target.value
        setBikeInpuT((bikeInput)=>{
            return {
                ...bikeInput,
                bikeName: value,
            }
        })
    }
    const typeChangeHandler = (event) => {
        let value = event.target.value
        setBikeInpuT((bikeInput)=>{
            return {
                ...bikeInput,
                bikeType: value,
            }
        })
    }
    const colorChangeHandler = (event) => {
        let value = event.target.value
        setBikeInpuT((bikeInput)=>{
            return {
                ...bikeInput,
                bikeColor: value,
            }
        })
    }
    const wheelSizeChangeHandler = (event) => {
        let value = event.target.value
        setBikeInpuT((bikeInput)=>{
            return {
                ...bikeInput,
                bikeWheelSize: value,
            }
        })
    }
    const priceChangeHandler = (event) => {
        let value = event.target.value
        setBikeInpuT((bikeInput)=>{
            return {
                ...bikeInput,
                bikePrice: value,
            }
        })
    }
    const idChangeHandler = (event) => {
        let value = event.target.value
        setBikeInpuT((bikeInput)=>{
            return {
                ...bikeInput,
                bikeID: value,
            }
        })
    }
    const descriptionChangeHandler = (event) => {
        let value = event.target.value
        setBikeInpuT((bikeInput)=>{
            return {
                ...bikeInput,
                bikeDescription: value
            }
        })
    }

    const submitHandler = (event) => { //////////////////////////////////////////////////////////
        event.preventDefault();


        onBikeCreate({...bikeInput})

        setBikeInpuT({ // очищаємо інпут
            bikeName: '',
            bikeType: '',
            bikeColor: '',
            bikeWheelSize: '',
            bikePrice: '',
            bikeID: '',
            bikeDescription: '',

            }
        );
    };


    return (
       <form onSubmit={submitHandler}>
           <div className='row'>
               <input type='text' name='name' placeholder='Name' onChange={nameChangeHandler} value={bikeInput.bikeName}/>
               <input type='text' name='type' placeholder='Type' onChange={typeChangeHandler} value={bikeInput.bikeType}/>
           </div>
           <div className='row'>
               <input type='text' name='color' placeholder='Color' onChange={colorChangeHandler} value={bikeInput.bikeColor}/>
               <input type='number' name='wheelSize' placeholder='Wheel size' onChange={wheelSizeChangeHandler} value={bikeInput.bikeWheelSize} min='1'
                      step='1'/>
           </div>
           <div className='row'>
               <input type='number' name='price' placeholder='Price' onChange={priceChangeHandler} value={bikeInput.bikePrice} min='0.01'
                      step='0.01'/>
               <input type='text' name='id' placeholder='ID (slug): XXXXXXXXXXXXX' onChange={idChangeHandler} value={bikeInput.bikeID}/>
           </div>
           <div className='description'>
               <input type='text' name='description' placeholder='Description' onChange={descriptionChangeHandler} value={bikeInput.bikeDescription}/>
           </div>
           <div className='form-buttons'>
               <button><p>SAVE</p></button>
               <button><p>CLEAR</p></button>
           </div>
       </form>
    );
}

export default BikeForm
