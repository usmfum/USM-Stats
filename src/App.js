import './App.scss';
import { Component } from 'react';
import { connect } from 'react-redux';
import { loadNetwork } from './redux/interactions';
import { chainlinkPriceSelector, coingeckoPriceSelector, compoundPriceSelector, fumBurnsSelector, fumBuyPriceSelector, fumMintsSelector, fumSellPriceSelector, fumSupplySelector, networkProviderSelector, uniswapPriceSelector, usmBurnsSelector, usmBuyPriceSelector, usmCollateralSelector, usmDebtRatioSelector, usmEthBufferSelector, usmMintsSelector, usmSellPriceSelector, usmSupplySelector } from './redux/selectors';
import { Card, Col, Container, Row, Table, Alert } from 'react-bootstrap';

class App extends Component {
  
  render() {

    const decimalPlaces = (numberString, decimals = 2) => {
      return Number.parseFloat(numberString).toFixed(decimals)
    }

    const toPercentage = (decimalString) => {
      const num = Number.parseFloat(decimalString) * 100
      return decimalPlaces(num.toString())
    }

    const oracleHighlight = (referencePrice, actualPrice) => {
      const colours = [
        '#00ff44',
        '#d4ff00',
        '#fbff00',
        '#ffe100',
        '#ffc400',
        '#ff9d00',
        '#ff8400',
        '#ff5900',
        '#ff0000'
      ]

      const difference = Math.abs(Number.parseFloat(referencePrice) - Number.parseFloat(actualPrice))
      if (difference <= 2) {
        return colours[0]
      }
      else if (difference > 2 && difference <= 4) {
        return colours[1]
      }
      else if (difference > 4 && difference <= 6) {
        return colours[2]
      }
      else if (difference > 6 && difference <= 8) {
        return colours[3]
      }
      else if (difference > 8 && difference <= 10) {
        return colours[4]
      }
      else if (difference > 10 && difference <= 12) {
        return colours[5]
      }
      else if (difference > 12 && difference <= 14) {
        return colours[6]
      }
      else if (difference > 14 && difference <= 20) {
        return colours[7]
      }
      else if (difference > 20) {
        return colours[8]
      }
    }

    const {dispatch, networkProvider, usmSupply, usmMints, usmBurns, usmMarketCap,
      usmCollateral, usmDebtRatio, usmEthBuffer, usmBuyPrice, usmSellPrice,
      fumMarketCap, fumSupply, fumMints, fumBurns, fumBuyPrice, fumSellPrice,
      chainlinkPrice, compoundPrice, uniswapPrice, coingeckoPrice} = this.props;
    
    if (!networkProvider) {
      loadNetwork(dispatch);
    }

    return (
      <div className="App">
        <Container>
          <Row className="justify-content-md-center">
            <Alert variant="warning">
              <b>Displaying stats for <a href="https://twitter.com/usmfum/status/1339323408618835969" target="_blank" rel="noreferrer">Baby-USM.</a></b> This does not represent the fully live protocol.
            </Alert>
            <Col sm={6}>
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
                        <td>Market Cap (ETH)</td>
                        <td>{decimalPlaces(usmMarketCap)}</td>
                      </tr>
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
                        <td>Market Cap (ETH)</td>
                        <td>{decimalPlaces(fumMarketCap)}</td>
                      </tr>
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
                    Oracle Prices (ETH)
                  </Card.Title>
                  <Table size="sm">
                    <tbody>
                      <tr>
                        <th colSpan={2}>Off Chain Reference (not used)</th>
                      </tr>
                      <tr>
                        <td>Coingecko</td>
                        <td>{decimalPlaces(coingeckoPrice)}</td>
                      </tr>
                      <tr>
                        <th colSpan={2}>Reported On-Chain Prices</th>
                      </tr>
                      <tr style={{backgroundColor: oracleHighlight(coingeckoPrice, chainlinkPrice)}}>
                        <td>Chainlink</td>
                        <td>{decimalPlaces(chainlinkPrice)}</td>
                      </tr>
                      <tr style={{backgroundColor: oracleHighlight(coingeckoPrice, compoundPrice)}}>
                        <td>Compound</td>
                        <td>{decimalPlaces(compoundPrice)}</td>
                      </tr>
                      <tr style={{backgroundColor: oracleHighlight(coingeckoPrice, uniswapPrice)}}>
                        <td>Uniswap TWAP</td>
                        <td>{decimalPlaces(uniswapPrice)}</td>
                      </tr>
                    </tbody>
                  </Table>
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
  const usmSupply = usmSupplySelector(state)
  const usmBuyPrice = usmBuyPriceSelector(state)
  const usmMarketCap = usmSupply * usmBuyPrice

  const fumSupply = fumSupplySelector(state)
  const fumBuyPrice = fumBuyPriceSelector(state)
  const fumMarketCap = fumSupply * fumBuyPrice
  return {
    networkProvider: networkProviderSelector(state),
    usmMarketCap,
    usmSupply,
    usmMints: usmMintsSelector(state),
    usmBurns: usmBurnsSelector(state),
    usmCollateral: usmCollateralSelector(state),
    usmDebtRatio: usmDebtRatioSelector(state),
    usmEthBuffer: usmEthBufferSelector(state),
    usmBuyPrice,
    usmSellPrice: usmSellPriceSelector(state),
    fumMarketCap,
    fumSupply,
    fumMints: fumMintsSelector(state),
    fumBurns: fumBurnsSelector(state),
    fumBuyPrice,
    fumSellPrice: fumSellPriceSelector(state),
    chainlinkPrice: chainlinkPriceSelector(state),
    compoundPrice: compoundPriceSelector(state),
    uniswapPrice: uniswapPriceSelector(state),
    coingeckoPrice: coingeckoPriceSelector(state)
  }
}

export default connect(mapStateToProps)(App);
