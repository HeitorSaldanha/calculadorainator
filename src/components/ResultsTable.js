import React from "react";
import { Table } from "react-bootstrap";
import ValueTableCell from "./ValueTableCell";

const ResultsTable = ({ resultsMap, baseValue, betsMap }) => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <td
          colSpan={4}
          style={{
            textAlign: "center",
            color: "#0f5132",
            backgroundColor: "#d1e7dd",
          }}
        >
          Acertos
        </td>
      </tr>
      <tr>
        <th>#</th>
        <th>Primeira Aposta</th>
        <th>Segunda Aposta</th>
        <th>Terceira Aposta</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Colorido</td>
        <ValueTableCell type="results" value={resultsMap.firstBet.colored} />
        <ValueTableCell type="results" value={resultsMap.secondBet.colored} />
        <ValueTableCell type="results" value={resultsMap.thirdBet.colored} />
      </tr>
      <tr>
        <td>Branco</td>
        <ValueTableCell type="results" value={resultsMap.firstBet.white} />
        <ValueTableCell type="results" value={resultsMap.secondBet.white} />
        <ValueTableCell type="results" value={resultsMap.thirdBet.white} />
      </tr>
    </tbody>
    <thead>
      <tr>
        <td
          colSpan={4}
          style={{
            textAlign: "center",
            color: "#842029",
            backgroundColor: "#f8d7da",
          }}
        >
          Erros
        </td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>#</td>
        <ValueTableCell
          type="misses"
          value={0 - betsMap.firstBet.colored - betsMap.firstBet.white}
        />
        <ValueTableCell
          type="misses"
          value={
            0 -
            betsMap.firstBet.colored -
            betsMap.firstBet.white -
            betsMap.secondBet.colored -
            betsMap.secondBet.white
          }
        />
        <ValueTableCell type="misses" value={0 - baseValue} />
      </tr>
    </tbody>
  </Table>
);

export default ResultsTable;
