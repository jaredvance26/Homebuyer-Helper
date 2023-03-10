import React from "react";
import { amortizationData } from "../homebuyer-helper/homebuyer-helper-content/homebuyer-helper-content";

import "../css/components.css";

interface TableProps {
  columns: any;
  data: amortizationData;
}

export const Table = (props: TableProps): JSX.Element => {
  const { columns, data } = props;
  return (
    <>
      <table>
        <thead>
          <tr>
            {columns.map((column: any) => (
              <th key={column.key}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row: any) => (
            <tr>
              {columns.map((column: any) => (
                <td key={column.key}>{row[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
