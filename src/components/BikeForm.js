import './BikeForm.css'
import {useContext} from "react";
import BikeContext from "./context/BikeContext";

function BikeForm() {

    const {
        onBikeCreate,
        bikeInput,
        clearInput,
        handleBikeChange,
        getBikeArrayfromDB
    } = useContext(BikeContext)
    
    const nameChangeHandler = (event) => {
        handleBikeChange('bikeName', event.target.value)
    }
    const typeChangeHandler = (event) => {
        handleBikeChange('bikeType', event.target.value)
    }
    const colorChangeHandler = (event) => {
        handleBikeChange('bikeColor', event.target.value)
    }
    const wheelSizeChangeHandler = (event) => {
        handleBikeChange('bikeWheelSize', event.target.value)
    }
    const priceChangeHandler = (event) => {
        handleBikeChange('bikePrice', event.target.value)
    }
    const idChangeHandler = (event) => {
        handleBikeChange('bikeID', event.target.value)
    }
    const descriptionChangeHandler = (event) => {
        handleBikeChange('bikeDescription', event.target.value)
    }

    const submitHandler = (event) => { //////////////////////////////////////////////////////////
        event.preventDefault();
        onBikeCreate({...bikeInput})
        clearInput()
    };

    return (
       <form onSubmit={submitHandler}>
           <div className='row'>
               <input
                   type='text'
                   name='name'
                   placeholder='Name'
                   onChange={nameChangeHandler}
                   value={bikeInput.bikeName}
                   required
                   minLength="5"
               />
               <input
                   type='text'
                   name='type'
                   placeholder='Type'
                   onChange={typeChangeHandler}
                   value={bikeInput.bikeType}
                   required
                   minLength="5"
               />
           </div>
           <div className='row'>
               <input
                   type='text'
                   name='color'
                   placeholder='Color'
                   onChange={colorChangeHandler}
                   value={bikeInput.bikeColor}
                   required
                   minLength="3"
               />
               <input
                   type='number'
                   name='wheelSize'
                   placeholder='Wheel size'
                   onChange={wheelSizeChangeHandler}
                   value={bikeInput.bikeWheelSize}
                   min='1'
                   step='1'
                   required
               />
           </div>
           <div className='row'>
               <input
                   type='number'
                   name='price'
                   placeholder='Price'
                   onChange={priceChangeHandler}
                   value={bikeInput.bikePrice}
                   min='1'
                   step='0.01'
                   required
               />
               <input
                   type='text'
                   name='id'
                   placeholder='ID (slug): XXXXXXXXXXXXX'
                   onChange={idChangeHandler}
                   value={bikeInput.bikeID}
                   required
                   minLength="5"
               />
           </div>
           <div className='description'>
               <textarea
                   type='text'
                   name='description'
                   placeholder='Description'
                   onChange={descriptionChangeHandler}
                   value={bikeInput.bikeDescription}
                   required
                   minLength="5"
               />
           </div>
           <div className='form-buttons'>
               <button type='submit'><p>SAVE</p></button>
               <button type='button' onClick={clearInput}><p>CLEAR</p></button>
           </div>
       </form>
    );
}

export default BikeForm
