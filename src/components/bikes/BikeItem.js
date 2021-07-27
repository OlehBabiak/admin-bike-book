import React from 'react';
import './BikeItem.css'
import CloseIcon from "@material-ui/icons/Close"
import NativeSelect from '@material-ui/core/NativeSelect';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function BikeItem(props) {

    const closeIconStyle = {
        fontSize: 'medium'
    }

    const handleChange = () => {
        console.log('border changes color') // !!!!!!!!!!!!!!!!!!!!
    }
    return (
        <>
            <div className='bike-item'>
                <div>
                    <div className='bike-fields'><span className='bike-name'>{props.name.toUpperCase()} -</span> {props.type.toUpperCase()} ({props.color.toUpperCase()})</div>
                    <div className='bike-id'>ID: {props.id}</div>
                    <div className='status'>
                        <div>STATUS:</div>
                            <NativeSelect className='select'
                                //value={state.age}
                                onChange={handleChange}
                                name="status"
                                inputProps={{ 'aria-label': 'status' }}
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
