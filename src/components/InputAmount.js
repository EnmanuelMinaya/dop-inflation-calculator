import React from 'react'
import TextField from '@mui/material/TextField';


export default function InputAmount(props) {
    const amount = props.amount;
    const setAmount = props.onChange;
    const handleChange = (event) => {
        setAmount(event.target.value);
    };


    return (
        <div>
            <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="0"
                onChange={handleChange}
            />
        </div>
    );
}




