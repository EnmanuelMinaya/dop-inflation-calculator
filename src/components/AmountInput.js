import React from 'react'
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';


export default function AmountInput() {
    const [amount, setAmount] = React.useState();

    const handleChange = (event) => {
        setAmount(event.target.value);
    };

    return (
        <div>
            <FormControl fullWidth sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="filled-adornment-amount">Monto</InputLabel>
                <FilledInput
                    id="filled-adornment-amount"
                    value={amount}
                    onChange={handleChange}
                    startAdornment={<InputAdornment position="start">RD$</InputAdornment>}
                />
            </FormControl>
        </div>
    );
}




