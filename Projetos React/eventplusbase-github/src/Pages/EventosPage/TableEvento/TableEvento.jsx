import React from "react";
import "./TableEvento.css";
import editPen from "../../../assets/images/edit-pen.svg";
import trashDelete from "../../../assets/images/trash-delete.svg";
import { Tooltip } from "react-tooltip";

const TableEvento = ({ dados, fnUpdate, fnDelete }) => {
  return (
    <table className="table-data" key={dados.IdEvento}>
      <thead className="table-data__head">
        <tr className="table-data__head-row">
          <th className="table-data__head-title table-data__head-title--big">
            Evento
          </th>
          <th className="table-data__head-title table-data__head-title--big">
            Descrição
          </th>
          <th className="table-data__head-title table-data__head-title--big">
            Tipo Evento
          </th>
          <th className="table-data__head-title table-data__head-title--big">
            Data
          </th>
          <th className="table-data__head-title table-data__head-title--little">
            Editar
          </th>
          <th className="table-data__head-title table-data__head-title--little">
            Deletar
          </th>
        </tr>
      </thead>

      {dados.map((ev) => {
        return (
          <tbody>
            <tr className="table-data__head-row">
              <td
                className="table-data__data table-data__data--big"
                data-tooltip-id={ev.idEvento}
                data-tooltip-content={ev.nomeEvento}
                data-tooltip-place="bottom"
              >
                
                {ev.nomeEvento.length >= 10 ? <Tooltip id={ev.idEvento} className="tooltip tooltip--white" /> : null}
                {ev.nomeEvento}
              </td>

              <td
                className="table-data__data table-data__data--big"
                data-tooltip-id={ev.idEvento}
                data-tooltip-content={ev.descricao}
                data-tooltip-place="bottom"
              >
                {/* <Tooltip id={ev.idEvento} className="tooltip tooltip--white" /> */} 
                {/* tentar implementar a seguinte lógica: se o número de caracteres for menor que 20, não executar o tooltip */}
                {ev.descricao.substr(0, 20)}...
              </td>

              <td className="table-data__data table-data__data--big">
                {ev.tiposEvento.titulo}
              </td>

              <td className="table-data__data table-data__data--big">
                {new Date(ev.dataEvento).toLocaleDateString()}
              </td>

              <td className="table-data__data table-data__data--little">
                <img
                  src={editPen}
                  className="table-data__icon"
                  alt="Imagem de lápis para editar o evento."
                  onClick={() => fnUpdate(ev.idEvento)}
                />
              </td>

              <td className="table-data__data table-data__data--little">
                <img
                  src={trashDelete}
                  className="table-data__icon"
                  alt="Imagem de lixeira para deletar o evento."
                  onClick={() => fnDelete(ev.idEvento)}
                />
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default TableEvento;
