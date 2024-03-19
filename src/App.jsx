import { useState } from "react";
import Result from "./components/Result";
import UserInputContainer from "./components/UserInputContainer";
import logo from "/investment-calculator-logo.png";

function App() {
  const [inputValues, setInputValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const validInput = inputValues.duration > 0;

  function handleChange(value, label) {
    setInputValues((previousValues) => ({
      ...previousValues,
      [label]: +value,
    }));
  }

  return (
    <>
      <header id="header">
        <img src={logo} alt="investment-calculator-logo" />
        <h1>React Investment App</h1>
      </header>
      <UserInputContainer
        handleChange={handleChange}
        inputValues={inputValues}
      />
      {!validInput && (
        <p className="center">Please add duration greater than zero.</p>
      )}
      {validInput && <Result input={inputValues} />}
    </>
  );
}

export default App;
