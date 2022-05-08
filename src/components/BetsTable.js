import React from "react";
import { Table } from "react-bootstrap";
import ValueTableCell from "./ValueTableCell";

const BetsTable = ({ betsMap }) => (
  <Table striped bordered hover>
    <thead>
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
        <ValueTableCell type="bets" value={betsMap.firstBet.colored} />
        <ValueTableCell type="bets" value={betsMap.secondBet.colored} />
        <ValueTableCell type="bets" value={betsMap.thirdBet.colored} />
      </tr>
      <tr>
        <td>Branco</td>
        <ValueTableCell type="bets" value={betsMap.firstBet.white} />
        <ValueTableCell type="bets" value={betsMap.secondBet.white} />
        <ValueTableCell type="bets" value={betsMap.thirdBet.white} />
      </tr>
    </tbody>
  </Table>
);

export default BetsTable;
