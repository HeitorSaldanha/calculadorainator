import React, { useState } from "react";
import {
  InputGroup,
  FormControl,
  Container,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import CurrencyFormat from "react-currency-format";

import BetsTable from "./components/BetsTable";
import ResultsTable from "./components/ResultsTable";

const App = () => {
  const initialBaseValue = {
    formattedValue: "$0.00",
    value: "0.00",
    floatValue: 0,
  };

  const initialBetsValue = {
    firstBet: {
      colored: 0,
      white: 0,
    },
    secondBet: {
      colored: 0,
      white: 0,
    },
    thirdBet: {
      colored: 0,
      white: 0,
    },
  };

  const initialResultsValue = {
    firstBet: {
      colored: 0,
      white: 0,
    },
    secondBet: {
      colored: 0,
      white: 0,
    },
    thirdBet: {
      colored: 0,
      white: 0,
    },
  };

  const [baseValue, setBaseValue] = useState(initialBaseValue);
  const [betsMap, setBetsMap] = useState(initialBetsValue);
  const [resultsMap, setResultsMap] = useState(initialResultsValue);

  const reduceValue = (val) => Math.round((val + Number.EPSILON) * 100) / 100;

  const getBaseWhiteVal = (baseBet) => {
    return reduceValue(baseBet / 14 > 0.41 ? baseBet / 14 : 0.41);
  };

  const setBets = (totalBetsAmmount) => {
    const baseBet = reduceValue(totalBetsAmmount.floatValue / 7);
    const baseWhite = getBaseWhiteVal(baseBet);
    const bets = betsMap;
    bets.firstBet.colored = reduceValue(baseBet - baseWhite);
    bets.firstBet.white = reduceValue(getBaseWhiteVal(baseBet));
    bets.secondBet.colored = reduceValue(
      2 * baseBet -
        getBaseWhiteVal(
          2 * baseBet + bets.firstBet.colored + bets.firstBet.white
        )
    );
    bets.secondBet.white = reduceValue(
      getBaseWhiteVal(2 * baseBet + bets.firstBet.colored + bets.firstBet.white)
    );
    bets.thirdBet.colored = reduceValue(
      4 * baseBet -
        getBaseWhiteVal(
          4 * baseBet +
            bets.firstBet.colored +
            bets.firstBet.white +
            bets.secondBet.colored +
            bets.secondBet.white
        )
    );
    bets.thirdBet.white = reduceValue(
      getBaseWhiteVal(
        4 * baseBet +
          bets.firstBet.colored +
          bets.firstBet.white +
          bets.secondBet.colored +
          bets.secondBet.white
      )
    );
    setBetsMap(bets);
    setResults();
  };

  const setResults = () => {
    const results = resultsMap;
    results.firstBet.colored =
      betsMap.firstBet.colored - betsMap.firstBet.white;
    results.firstBet.white =
      betsMap.firstBet.white * 14 - betsMap.firstBet.colored;
    results.secondBet.colored =
      betsMap.secondBet.colored -
      betsMap.secondBet.white -
      betsMap.firstBet.colored -
      betsMap.firstBet.white;
    results.secondBet.white =
      betsMap.secondBet.white * 14 -
      betsMap.secondBet.colored -
      betsMap.firstBet.colored -
      betsMap.firstBet.white;
    results.thirdBet.colored =
      betsMap.thirdBet.colored -
      betsMap.thirdBet.white -
      betsMap.secondBet.colored -
      betsMap.secondBet.white -
      betsMap.firstBet.colored -
      betsMap.firstBet.white;
    results.thirdBet.white =
      betsMap.thirdBet.white * 14 -
      betsMap.thirdBet.colored -
      betsMap.secondBet.colored -
      betsMap.secondBet.white -
      betsMap.firstBet.colored -
      betsMap.firstBet.white;
    setResultsMap(results);
  };

  const handleChangeBaseBet = (value) => {
    if (value.floatValue > 0) {
      setBaseValue(value);
    } else {
      setBaseValue(initialBaseValue);
    }
    setBets(value);
  };

  return (
    <Container style={{ marginTop: "50px" }}>
      <Card>
        <Card.Header>
          <h1 className="display-4">Calculadora-Inator</h1>
        </Card.Header>
        <Card.Body>
          <Row>
            <InputGroup>
              <InputGroup.Text id="valor-base">$</InputGroup.Text>
              <CurrencyFormat
                value={baseValue.floatValue || 0}
                thousandSeparator={true}
                prefix={"€"}
                customInput={FormControl}
                decimalSeparator="."
                decimalScale={2}
                fixedDecimalScale={true}
                onValueChange={(value) => handleChangeBaseBet(value)}
              />
            </InputGroup>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col style={{ borderRight: "solid 2px #adb5bd" }}>
              <h3 style={{ padding: "10px" }}>Valores Para Apostar:</h3>
              <BetsTable betsMap={betsMap} />
            </Col>
            <Col>
              <h3 style={{ padding: "10px" }}>Previsão de Resultados:</h3>
              <ResultsTable
                baseValue={baseValue.floatValue}
                betsMap={betsMap}
                resultsMap={resultsMap}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default App;
