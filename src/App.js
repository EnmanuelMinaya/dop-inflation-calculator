import Header from "./components/Header";
import SelectMonth from "./components/SelectMonth";
import SelectYear from "./components/SelectYear";
import AmountInput from "./components/AmountInput";

function App() {
  return (
    <>
      <Header />
      <SelectYear />
      <SelectMonth />
      <SelectYear />
      <SelectMonth />
      <AmountInput />
    </>
  );
}

export default App; 
