import React from "react";
import CurrencyFormat from "react-currency-format";

const ValueTableCell = ({ value, type }) => {
  if (type === "results" && value > 0) {
    return (
      <td
        style={{
          textAlign: "center",
          color: "#0f5132",
          backgroundColor: "#d1e7dd",
        }}
      >
        <CurrencyFormat
          value={value}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"€"}
          decimalSeparator="."
          decimalScale={2}
        />
      </td>
    );
  } else if (type === "results" && value < 0) {
    return (
      <td
        style={{
          textAlign: "center",
          color: "#842029",
          backgroundColor: "#f8d7da",
        }}
      >
        <CurrencyFormat
          value={value}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"€"}
          decimalSeparator="."
          decimalScale={2}
        />
      </td>
    );
  } else {
    return (
      <td>
        <CurrencyFormat
          value={value || 0}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"€"}
          decimalSeparator="."
          decimalScale={2}
        />
      </td>
    );
  }
};

export default ValueTableCell;
