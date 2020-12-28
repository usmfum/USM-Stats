import './App.scss';
import { Component } from 'react';
import { connect } from 'react-redux';
import { loadNetwork } from './redux/interactions';
import { fumBurnsSelector, fumBuyPriceSelector, fumMintsSelector, fumSellPriceSelector, fumSupplySelector, networkProviderSelector, usmBurnsSelector, usmBuyPriceSelector, usmCollateralSelector, usmDebtRatioSelector, usmEthBufferSelector, usmMintsSelector, usmSellPriceSelector, usmSupplySelector } from './redux/selectors';
import { Card, Col, Container, Row, Table } from 'react-bootstrap';

class App extends Component {

  
  render() {

    const decimalPlaces = (numberString, decimals = 2) => {
      return Number.parseFloat(numberString).toFixed(decimals)
    }

    const toPercentage = (decimalString) => {
      const num = Number.parseFloat(decimalString) * 100
      return decimalPlaces(num.toString())
    }

    const {dispatch, networkProvider, usmSupply, usmMints, usmBurns,
      usmCollateral, usmDebtRatio, usmEthBuffer, usmBuyPrice, usmSellPrice,
      fumSupply, fumMints, fumBurns, fumBuyPrice, fumSellPrice} = this.props;
    if (!networkProvider) {
      loadNetwork(dispatch);
    }

    return (
      <div className="App">
        <Container>
          <Row className="justify-content-md-center">
            <Col xs={6}>
              <Card>
                <Card.Body>
                  <Card.Title>
                    Protocol Health
                  </Card.Title>
                  <Table>
                    <tbody>
                      <tr>
                        <td>Total Collateral</td>
                        <td>{decimalPlaces(usmCollateral)} ETH</td>
                      </tr>
                      <tr>
                        <td>Buffer</td>
                        <td>{decimalPlaces(usmEthBuffer)} ETH</td>
                      </tr>
                      <tr>
                        <td>Debt Ratio</td>
                        <td>{toPercentage(usmDebtRatio)} %</td>
                      </tr>                  
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                    USM Stats
                  </Card.Title>
                  <Table size="sm">
                    <tbody>
                      <tr>
                        <td>Total Supply</td>
                        <td>{decimalPlaces(usmSupply)}</td>
                      </tr>
                      <tr>
                        <td>Buy Price (ETH)</td>
                        <td>{decimalPlaces(usmBuyPrice, 5)}</td>
                      </tr>
                      <tr>
                        <td>Sell Price (ETH)</td>
                        <td>{decimalPlaces(usmSellPrice, 5)}</td>
                      </tr>
                      <tr>
                        <td>No. of Mints</td>
                        <td>{usmMints}</td>
                      </tr>
                      <tr>
                        <td>No. of Burns</td>
                        <td>{usmBurns}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
            <Col>
            <Card>
                <Card.Body>
                  <Card.Title>
                    FUM Stats
                  </Card.Title>
                  <Table size="sm">
                    <tbody>
                      <tr>
                        <td>Total Supply</td>
                        <td>{decimalPlaces(fumSupply)}</td>
                      </tr>
                      <tr>
                        <td>Buy Price (ETH)</td>
                        <td>{decimalPlaces(fumBuyPrice, 5)}</td>
                      </tr>
                      <tr>
                        <td>Sell Price (ETH)</td>
                        <td>{decimalPlaces(fumSellPrice, 5)}</td>
                      </tr>
                      <tr>
                        <td>No. of Mints</td>
                        <td>{fumMints}</td>
                      </tr>
                      <tr>
                        <td>No. of Burns</td>
                        <td>{fumBurns}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
            <Col>
            <Card>
                <Card.Body>
                  <Card.Title>
                    Oracle Stats
                  </Card.Title>
                  
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    networkProvider: networkProviderSelector(state),
    usmSupply: usmSupplySelector(state),
    usmMints: usmMintsSelector(state),
    usmBurns: usmBurnsSelector(state),
    usmCollateral: usmCollateralSelector(state),
    usmDebtRatio: usmDebtRatioSelector(state),
    usmEthBuffer: usmEthBufferSelector(state),
    usmBuyPrice: usmBuyPriceSelector(state),
    usmSellPrice: usmSellPriceSelector(state),
    fumSupply: fumSupplySelector(state),
    fumMints: fumMintsSelector(state),
    fumBurns: fumBurnsSelector(state),
    fumBuyPrice: fumBuyPriceSelector(state),
    fumSellPrice: fumSellPriceSelector(state)
  }
}

export default connect(mapStateToProps)(App);
