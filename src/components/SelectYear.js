import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectYear() {
    const [year, setYear] = React.useState('');

    const handleChange = (event) => {
        setYear(event.target.value);
    };

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="demo-simple-select-autowidth-label">Año</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={year}
                    onChange={handleChange}
                    autoWidth
                    label="Año"
                >

                    <MenuItem value={'1950'}>1950</MenuItem>
                    <MenuItem value={'1951'}>1951</MenuItem>
                    <MenuItem value={'1952'}>1952</MenuItem>
                    <MenuItem value={'1953'}>1953</MenuItem>
                    <MenuItem value={'1954'}>1954</MenuItem>
                    <MenuItem value={'1955'}>1955</MenuItem>
                    <MenuItem value={'1956'}>1956</MenuItem>
                    <MenuItem value={'1957'}>1957</MenuItem>
                    <MenuItem value={'1958'}>1958</MenuItem>
                    <MenuItem value={'1959'}>1959</MenuItem>
                    <MenuItem value={'1960'}>1960</MenuItem>
                    <MenuItem value={'1961'}>1961</MenuItem>
                    <MenuItem value={'1962'}>1962</MenuItem>
                    <MenuItem value={'1963'}>1963</MenuItem>
                    <MenuItem value={'1964'}>1964</MenuItem>
                    <MenuItem value={'1965'}>1965</MenuItem>
                    <MenuItem value={'1966'}>1966</MenuItem>
                    <MenuItem value={'1967'}>1967</MenuItem>
                    <MenuItem value={'1968'}>1968</MenuItem>
                    <MenuItem value={'1969'}>1969</MenuItem>
                    <MenuItem value={'1970'}>1970</MenuItem>
                    <MenuItem value={'1971'}>1971</MenuItem>
                    <MenuItem value={'1972'}>1972</MenuItem>
                    <MenuItem value={'1973'}>1973</MenuItem>
                    <MenuItem value={'1974'}>1974</MenuItem>
                    <MenuItem value={'1975'}>1975</MenuItem>
                    <MenuItem value={'1976'}>1976</MenuItem>
                    <MenuItem value={'1977'}>1977</MenuItem>
                    <MenuItem value={'1978'}>1978</MenuItem>
                    <MenuItem value={'1979'}>1979</MenuItem>
                    <MenuItem value={'1980'}>1980</MenuItem>
                    <MenuItem value={'1981'}>1981</MenuItem>
                    <MenuItem value={'1982'}>1982</MenuItem>
                    <MenuItem value={'1983'}>1983</MenuItem>
                    <MenuItem value={'1984'}>1984</MenuItem>
                    <MenuItem value={'1985'}>1985</MenuItem>
                    <MenuItem value={'1986'}>1986</MenuItem>
                    <MenuItem value={'1987'}>1987</MenuItem>
                    <MenuItem value={'1988'}>1988</MenuItem>
                    <MenuItem value={'1989'}>1989</MenuItem>
                    <MenuItem value={'1990'}>1990</MenuItem>
                    <MenuItem value={'1991'}>1991</MenuItem>
                    <MenuItem value={'1992'}>1992</MenuItem>
                    <MenuItem value={'1993'}>1993</MenuItem>
                    <MenuItem value={'1994'}>1994</MenuItem>
                    <MenuItem value={'1995'}>1995</MenuItem>
                    <MenuItem value={'1996'}>1996</MenuItem>
                    <MenuItem value={'1997'}>1997</MenuItem>
                    <MenuItem value={'1998'}>1998</MenuItem>
                    <MenuItem value={'1999'}>1999</MenuItem>
                    <MenuItem value={'2000'}>2000</MenuItem>
                    <MenuItem value={'2001'}>2001</MenuItem>
                    <MenuItem value={'2002'}>2002</MenuItem>
                    <MenuItem value={'2003'}>2003</MenuItem>
                    <MenuItem value={'2004'}>2004</MenuItem>
                    <MenuItem value={'2005'}>2005</MenuItem>
                    <MenuItem value={'2006'}>2006</MenuItem>
                    <MenuItem value={'2007'}>2007</MenuItem>
                    <MenuItem value={'2008'}>2008</MenuItem>
                    <MenuItem value={'2009'}>2009</MenuItem>
                    <MenuItem value={'2010'}>2010</MenuItem>
                    <MenuItem value={'2011'}>2011</MenuItem>
                    <MenuItem value={'2012'}>2012</MenuItem>
                    <MenuItem value={'2013'}>2013</MenuItem>
                    <MenuItem value={'2014'}>2014</MenuItem>
                    <MenuItem value={'2015'}>2015</MenuItem>
                    <MenuItem value={'2016'}>2016</MenuItem>
                    <MenuItem value={'2017'}>2017</MenuItem>
                    <MenuItem value={'2018'}>2018</MenuItem>
                    <MenuItem value={'2019'}>2019</MenuItem>
                    <MenuItem value={'2020'}>2020</MenuItem>
                    <MenuItem value={'2021'}>2021</MenuItem>
                    <MenuItem value={'2022'}>2022</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}


