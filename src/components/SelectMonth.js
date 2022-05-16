import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectMonth() {
    const [month, setMonth] = React.useState('');

    const handleChange = (event) => {
        setMonth(event.target.value);
    };

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="demo-simple-select-autowidth-label">Mes</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={month}
                    onChange={handleChange}
                    autoWidth
                    label="Mes"
                >

                    <MenuItem value={'1'}>Enero</MenuItem>
                    <MenuItem value={'2'}>Febrero</MenuItem>
                    <MenuItem value={'3'}>Marzo</MenuItem>
                    <MenuItem value={'4'}>Abril</MenuItem>
                    <MenuItem value={'5'}>Mayo</MenuItem>
                    <MenuItem value={'6'}>Junio</MenuItem>
                    <MenuItem value={'7'}>Julio</MenuItem>
                    <MenuItem value={'8'}>Agosto</MenuItem>
                    <MenuItem value={'9'}>Septiembre</MenuItem>
                    <MenuItem value={'10'}>Octubre</MenuItem>
                    <MenuItem value={'11'}>Noviembre</MenuItem>
                    <MenuItem value={'12'}>Diciembre</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
