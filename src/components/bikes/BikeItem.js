import React, {useContext, useState} from 'react';
import './BikeItem.css'
import CloseIcon from "@material-ui/icons/Close"
import NativeSelect from '@material-ui/core/NativeSelect';
import BikeContext from "../context/BikeContext";



function BikeItem(props) {

    let initialItemBorderColor = {border: '2px solid #6FCF97'}
    const [itemBorderColor, setItemBorderColor] = useState(initialItemBorderColor);

    const closeIconStyle = {
        fontSize: 'medium'
    }
    const yellowBorder = {
        border: '2px solid #F2994A'
    }
    const redBorder = {
        border: '2px solid #EB5757'
    }

    const handleChange = (event) => {
        const value = event.target.value
        if (value === 'Busy') {
            setItemBorderColor(yellowBorder)
        } else if (value === 'Unvailable') {
            setItemBorderColor(redBorder)
        } else {
            setItemBorderColor(initialItemBorderColor)
        }
    }

    return (
        <>
            <div className='bike-item' style={itemBorderColor}>
                <div>
                    <div className='bike-fields'><span
                        className='bike-name'>{props.name.toUpperCase()} -</span> {props.type.toUpperCase()} ({props.color.toUpperCase()})
                    </div>
                    <div className='bike-id'>ID: {props.id}</div>
                    <div className='status'>
                        <div>STATUS:</div>
                        <NativeSelect className='select'
                            //value={state.age}
                                      onChange={handleChange}
                                      name="status"
                                      inputProps={{'aria-label': 'status'}}
                        >
                            <option value='Available'>Available</option>
                            <option value='Busy'>Busy</option>
                            <option value='Unvailable'>Unvailable</option>
                        </NativeSelect>
                    </div>
                </div>
                <div className='bike-item-right'>
                    <div className='bike-item-right-close'>
                        <CloseIcon style={closeIconStyle}/>
                    </div>
                    <div>{props.price} UAH/hr.</div>
                </div>
            </div>
        </>
    );
}

export default BikeItem
