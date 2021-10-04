import React from "react";
import { productRow } from "pages/Landing";

type Props = {
  tableName: string;
  columnTitles: Array<string>;
  rows: Array<productRow>;
};

function TableList(props: Props) {
  const { columnTitles, rows, tableName } = props;
  return (
    <>
      <h3>{tableName}</h3>
      <table>
        {columnTitles.map((title) => {
          return <th>{title}</th>;
        })}
        {rows.map((row) => {
          return (
            <tr>
              <td>{row.brand}</td>
              <td>{row.lab}</td>
              <td>{row.price}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default TableList;
