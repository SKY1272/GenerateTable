import React, { useState } from "react";
import styled from "./Generate.module.css";
function Generate() {
  const [number, setNumber] = useState(6);
  function GenerateTable() {
    const table = [];
    for (let i = 1; i <= number; i++) {
      table.push(
        <tr>
          <td>{i}</td>
          <td>{i * 2}</td>
          <td>{i * 3}</td>
          <td>{i * 4}</td>
        </tr>
      );
    }
    return table;
  }
  function ChangeNumber() {
    let newNum = Math.floor(Math.random() * 10) + 1;
    setNumber(newNum);
  }
  return (
    <div className={styled.container}>
      <h1>Generate Dynamic Table</h1>
      <table className={styled.table}>
        <thead>
          <tr>
            <th>Number</th>
            <th>Double</th>
            <th>Triple</th>
            <th>Fourth</th>
          </tr>
        </thead>
        <tbody style={{ border: "2px solid grey" }}>{GenerateTable()}</tbody>
      </table>
      <p>{number}</p>
      <button onClick={ChangeNumber}>GenerateNumber</button>
    </div>
  );
}
export default Generate;
