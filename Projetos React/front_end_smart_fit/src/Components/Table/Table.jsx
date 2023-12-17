import React from "react";
import "./Table.css";

const Table = ({ th = [], td = [], tr = [] }) => {
  return (
    <table>
      <thead>
        <tr>
          {th.map((elementoHead) => {
            return <th>{elementoHead.titulo}</th>;
          })}
        </tr>
      </thead>

      <tbody>
        {tr.map((elementoTr) => {
          return (
            <tr>
              {th.map((elementoBody) => {
                return <td>{elementoBody.titulo}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
