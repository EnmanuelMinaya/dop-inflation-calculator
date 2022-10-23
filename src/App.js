import * as React from 'react';
import Header from "./components/Header";
import InputAmount from "./components/InputAmount";
import Result from "./components/Result";
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import IpcData from './assets/ipc.json';


function App() {

  const [initialDate, setInitialDate] = React.useState(new Date('2021-12-01'));
  const [endingDate, setEndingDate] = React.useState(new Date('2022-01-01'));
  const [amount, setAmount] = React.useState(0);
  const [resultAmount, setResultAmount] = React.useState(0);
  const [inflationRate, setInflationRate] = React.useState(0);


  console.log(IpcData)
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
    const [ipcObj] = IpcData.filter(item => item.year === date.getFullYear() && item.month === date.getMonth())
    return ipcObj.ipc;
  }


  const calculateInflationRate = (InitialCpi, endingCpi) => {
    return ((endingCpi - InitialCpi) / InitialCpi) * 100;
  };

  const calculateInflatedAmount = (amount, initialDate, endingDate) => {

    const initialCpi = getCpiFromDate(initialDate)
    const endingCpi = getCpiFromDate(endingDate)
    const inflationRate = calculateInflationRate(initialCpi, endingCpi);
    setInflationRate(inflationRate)
    setResultAmount(amount * endingCpi / initialCpi)
  }

  const handleClick = () => { calculateInflatedAmount(amount, initialDate, endingDate) }

  return (
    <>
      <Header />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          views={['year', 'month']}
          label="Desde"
          minDate={new Date('1984-02-01')}
          maxDate={new Date('2022-06-01')}
          value={initialDate}
          onChange={updateInitialDate}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
        <DatePicker
          views={['year', 'month']}
          label="Hasta"
          minDate={initialDate}
          maxDate={new Date('2022-06-01')}
          value={endingDate}
          onChange={updateEndingDate}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
      </LocalizationProvider>

      <InputAmount amount={amount} onChange={updateAmount} />

      <button onClick={handleClick}>Calcular</button>
      <Result resultAmount={resultAmount} inflationRate={inflationRate} />
    </>
  );
}

export default App; 
