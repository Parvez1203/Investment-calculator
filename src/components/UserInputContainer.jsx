import React from "react";
import UserInput from "./UserInput";

export default function UserInputContainer({ handleChange, inputValues }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <UserInput
          name="Initial Investement"
          token="initialInvestment"
          handleChange={handleChange}
          inputValues={inputValues}
        />
        <UserInput
          name="Annual Investement"
          token="annualInvestment"
          handleChange={handleChange}
          inputValues={inputValues}
        />
      </div>

      <div className="input-group">
        <UserInput
          name="Expected Retrun"
          token="expectedReturn"
          handleChange={handleChange}
          inputValues={inputValues}
        />
        <UserInput
          name="Duration"
          token="duration"
          handleChange={handleChange}
          inputValues={inputValues}
        />
      </div>
    </div>
  );
}
