import React from "react";
import "./Table.css";
import { Input } from "../FormComponents/FormComponents";

//[0]: representa o th da Thead; [1]: array representa o TR e o objeto representa o TD; [2]: representa os dados do tfoot
const Table = ({ dados = [[], [{}], []] }) => {
  return (
    <table className="table">
      <thead className="thead">
        <tr className="linha-thead">
          {dados[0].map((elementoHead, indice) => {
            return <th key={indice}>{elementoHead}</th>;
          })}
        </tr>
      </thead>

      <tbody className="tbody">
        {dados[1].map((elementoTr, indice) => {
          return (
            <tr key={indice} className="linha-tbody">
              <td >
                <Input
                  type={"checkbox"}
                  name={"unidades-fechadas"}
                  // manipulationFunction={""}
                  additionalClass="unidades-fechadas"
                />
              </td>
              {/* <div className="horarios-dia"> */}
                {Object.keys(elementoTr).map((chave, indice) => {
                  return (
                    <td className="dado-tbody" key={indice}>
                      {elementoTr[chave]}
                    </td>
                  );
                })}
              {/* </div> */}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
