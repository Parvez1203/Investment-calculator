import React from "react";
import { formatter } from "../util/investment";
import { calculateInvestmentResults } from "../util/investment";

export default function Result({ input }) {
  let initialInvestment = 0;
  const dataToBeDisplayed = calculateInvestmentResults(input);
  if (dataToBeDisplayed.length > 0) {
    initialInvestment =
      dataToBeDisplayed[0].valueEndOfYear -
      dataToBeDisplayed[0].interest -
      dataToBeDisplayed[0].annualInvestment;
  }
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {dataToBeDisplayed.map((item, index) => {
          const totalInvestment =
            item.valueEndOfYear -
            item.annualInvestment * item.year -
            initialInvestment;
          return (
            <tr key={index}>
              <td>{item.year}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(totalInvestment)}</td>
              <td>{formatter.format(item.valueEndOfYear - item.interest)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
