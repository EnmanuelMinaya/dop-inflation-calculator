import * as React from 'react';
import Header from "./components/Header";
import AmountInput from "./components/InputAmount";
import Result from "./components/Result";
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import IpcData from './assets/ipc.json';
import Button from '@mui/material/Button';


function App() {

  const [initialDate, setInitialDate] = React.useState(new Date());
  const [endingDate, setEndingDate] = React.useState(new Date());
  const [amount, setAmount] = React.useState(0);

  const updateInitialDate = (newDate) => {
    setInitialDate(newDate);
  };
  const updateEndingDate = (newDate) => {
    setEndingDate(newDate);
  };
  const updateAmount = (newAmount) => {
    setAmount(newAmount);
  };

  const getCpiFromDate = (date) => {
    const ipcObj = IpcData.filter(item => item.year === date.getFullYear() && item.month === date.getMonth());
    return ipcObj.ipc;
  }

  const getInflationRate = (endCpi, InitialCpi) => {
    return (endCpi - InitialCpi) / InitialCpi;
  };


  return (
    <>
      <Header />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          views={['year', 'month']}
          label="Year and Month"
          minDate={new Date('2012-03-01')}
          maxDate={new Date('2023-06-01')}
          value={initialDate}
          onChange={updateInitialDate}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
        <DatePicker
          views={['year', 'month']}
          label="Year and Month"
          minDate={new Date('2012-03-01')}
          maxDate={new Date('2023-06-01')}
          value={endingDate}
          onChange={updateEndingDate}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
      </LocalizationProvider>

      <InputAmount amount={amount} onChange={updateAmount} />

      <Button variant="contained">Contained</Button>

      <Result result={resultAmount} />
    </>
  );
}

export default App; 
