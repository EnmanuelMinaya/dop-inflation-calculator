import React from 'react'
import TextField from '@mui/material/TextField';


export default function InputAmount(props) {
    const setAmount = props.onChange;
    const handleChange = (event) => {
        setAmount(event.target.value);
    };

    return (
        <>
            <TextField
                id="outlined-required"
                label="Monto inicial (RD$)"
                onChange={handleChange}
                style={{ width: 315 }}

            />
        </>
    );
}




