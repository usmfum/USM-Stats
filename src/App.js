import './App.scss';
import { Component } from 'react';
import { connect } from 'react-redux';
import { loadNetwork } from './redux/interactions';
import { chainlinkPriceSelector, medianPriceSelector, coingeckoPriceSelector, compoundPriceSelector, fumBurnsSelector, fumBuyPriceSelector, fumMintsSelector, fumSellPriceSelector, fumSupplySelector, networkProviderSelector, uniswapPriceSelector, usmBurnsSelector, usmBuyPriceSelector, usmCollateralSelector, usmDebtRatioSelector, usmEthBufferSelector, usmMintsSelector, usmSellPriceSelector, usmSupplySelector } from './redux/selectors';
import { Card, Col, Container, Row, Table, Alert } from 'react-bootstrap';
import { debtRatioHighlight, decimalPlaces, oracleHighlight, toPercentage, usmPriceHighlight } from './utils';

class App extends Component {

  render() {

    const {dispatch, networkProvider, usmSupply, usmMints, usmBurns, usmMarketCap, usmMarketCapUSD,
      usmCollateral, usmCollateralUSD, usmDebtRatio, usmEthBuffer, usmEthBufferUSD, usmBuyPrice, usmBuyPriceUSD, usmSellPrice, usmSellPriceUSD,
      fumMarketCap, fumMarketCapUSD, fumSupply, fumMints, fumBurns, fumBuyPrice, fumBuyPriceUSD, fumSellPrice, fumSellPriceUSD,
      chainlinkPrice, compoundPrice, uniswapPrice, coingeckoPrice, medianPrice} = this.props;

    if (!networkProvider) {
      loadNetwork(dispatch);
    }

    return (
      <div className="App">
        <Container>
          <Alert variant="warning">
            <b>Displaying stats for <a href="https://twitter.com/usmfum/status/1339323408618835969" target="_blank" rel="noreferrer">Baby-USM.</a></b> This does not represent the fully live protocol.
          </Alert>
          <Row className="justify-content-md-center">
            <Col sm="12" md="6">
              <Card>
                <Card.Body>
                  <Card.Title>
                    Protocol Health
                  </Card.Title>
                  <Table striped hover size="sm">
                    <tbody>
                      <tr>
                        <td>Total Collateral</td>
                        <td>Ξ {decimalPlaces(usmCollateral)}</td>
                        <td>$ {decimalPlaces(usmCollateralUSD)}</td>
                      </tr>
                      <tr>
                        <td>Buffer</td>
                        <td>Ξ {decimalPlaces(usmEthBuffer)}</td>
                        <td>$ {decimalPlaces(usmEthBufferUSD)}</td>
                      </tr>
                      <tr style={{backgroundColor: debtRatioHighlight(usmDebtRatio)}}>
                        <td>Debt Ratio</td>
                        <td></td>
                        <td>{toPercentage(usmDebtRatio)} %</td>
                      </tr>                  
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="12" md="6">
              <Card>
                <Card.Body>
                  <Card.Title>
                    Oracle Performance
                  </Card.Title>
                  <Table striped hover size="sm">
                    <tbody>
                      <tr>
                        <th colSpan={2}>Off Chain Reference (not used)</th>
                      </tr>
                      <tr>
                        <td>Coingecko - ETH</td>
                        <td>$ {decimalPlaces(coingeckoPrice)}</td>
                      </tr>
                      <tr>
                        <th colSpan={2}>USMFUM ETH Price</th>
                      </tr>
                      <tr style={{backgroundColor: oracleHighlight(coingeckoPrice, medianPrice)}}>
                        <td>Medianized Oracle</td>
                        <td>$ {decimalPlaces(medianPrice)}</td>
                      </tr>
                      <tr>
                        <th colSpan={2}>Median Sources</th>
                      </tr>
                      <tr style={{backgroundColor: oracleHighlight(coingeckoPrice, chainlinkPrice)}}>
                        <td>Chainlink</td>
                        <td>$ {decimalPlaces(chainlinkPrice)}</td>
                      </tr>
                      <tr style={{backgroundColor: oracleHighlight(coingeckoPrice, compoundPrice)}}>
                        <td>Compound</td>
                        <td>$ {decimalPlaces(compoundPrice)}</td>
                      </tr>
                      <tr style={{backgroundColor: oracleHighlight(coingeckoPrice, uniswapPrice)}}>
                        <td>Uniswap TWAP</td>
                        <td>$ {decimalPlaces(uniswapPrice)}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="6">
              <Card>
                <Card.Body>
                  <Card.Title>
                    USM Stats
                  </Card.Title>
                  <Table striped hover size="sm">
                    <tbody>
                      <tr>
                        <td>Market Cap</td>
                        <td>Ξ {decimalPlaces(usmMarketCap)}</td>
                        <td>$ {decimalPlaces(usmMarketCapUSD)}</td>
                      </tr>
                      <tr style={{backgroundColor: usmPriceHighlight(usmBuyPriceUSD)}}>
                        <td>Buy Price</td>
                        <td>Ξ {decimalPlaces(usmBuyPrice, 5)}</td>
                        <td>$ {decimalPlaces(usmBuyPriceUSD)}</td>
                      </tr>
                      <tr style={{backgroundColor: usmPriceHighlight(usmSellPriceUSD)}}>
                        <td>Sell Price</td>
                        <td>Ξ {decimalPlaces(usmSellPrice, 5)}</td>
                        <td>$ {decimalPlaces(usmSellPriceUSD)}</td>
                      </tr>
                      <tr>
                        <td>Total Supply</td>
                        <td>-</td>
                        <td>{decimalPlaces(usmSupply)}</td>
                      </tr>
                      <tr>
                        <td>No. of Mints</td>
                        <td>-</td>
                        <td>{usmMints}</td>
                      </tr>
                      <tr>
                        <td>No. of Burns</td>
                        <td>-</td>
                        <td>{usmBurns}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="12" md="6">
              <Card>
                <Card.Body>
                  <Card.Title>
                    FUM Stats
                  </Card.Title>
                  <Table striped hover size="sm">
                    <tbody>
                      <tr>
                        <td>Market Cap</td>
                        <td>Ξ {decimalPlaces(fumMarketCap)}</td>
                        <td>$ {decimalPlaces(fumMarketCapUSD)}</td>
                      </tr>
                      <tr>
                        <td>Buy Price</td>
                        <td>Ξ {decimalPlaces(fumBuyPrice, 5)}</td>
                        <td>$ {decimalPlaces(fumBuyPriceUSD)}</td>
                      </tr>
                      <tr>
                        <td>Sell Price (ETH)</td>
                        <td>Ξ {decimalPlaces(fumSellPrice, 5)}</td>
                        <td>$ {decimalPlaces(fumSellPriceUSD)}</td>
                      </tr>
                      <tr>
                        <td>Total Supply</td>
                        <td>-</td>
                        <td>{decimalPlaces(fumSupply)}</td>
                      </tr>
                      <tr>
                        <td>No. of Mints</td>
                        <td>-</td>
                        <td>{fumMints}</td>
                      </tr>
                      <tr>
                        <td>No. of Burns</td>
                        <td>-</td>
                        <td>{fumBurns}</td>
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

function stringMul(a, b) {
  return (Number.parseFloat(a) * Number.parseFloat(b))
}

function mapStateToProps(state) {
  const coingeckoPrice = coingeckoPriceSelector(state)

  const usmCollateral = usmCollateralSelector(state)
  const usmCollateralUSD = usmCollateral * coingeckoPrice
  const usmEthBuffer = usmEthBufferSelector(state)
  const usmEthBufferUSD = usmEthBuffer * coingeckoPrice
  const usmSupply = usmSupplySelector(state)
  const usmBuyPrice = usmBuyPriceSelector(state)
  const usmSellPrice = usmSellPriceSelector(state)
  const usmMarketCap = usmSupply * usmBuyPrice

  const fumSupply = fumSupplySelector(state)
  const fumBuyPrice = fumBuyPriceSelector(state)
  const fumSellPrice = fumSellPriceSelector(state)
  const fumMarketCap = fumSupply * fumBuyPrice

  const usmBuyPriceUSD = stringMul(usmBuyPrice, coingeckoPrice)
  const usmSellPriceUSD = stringMul(usmSellPrice, coingeckoPrice)
  const usmMarketCapUSD = stringMul(usmMarketCap, coingeckoPrice)
  const fumBuyPriceUSD = stringMul(fumBuyPrice, coingeckoPrice)
  const fumSellPriceUSD = stringMul(fumSellPrice, coingeckoPrice)
  const fumMarketCapUSD = stringMul(fumMarketCap, coingeckoPrice)

  return {
    networkProvider: networkProviderSelector(state),
    usmMarketCap,
    usmMarketCapUSD,
    usmSupply,
    usmMints: usmMintsSelector(state),
    usmBurns: usmBurnsSelector(state),
    usmCollateral,
    usmCollateralUSD,
    usmDebtRatio: usmDebtRatioSelector(state),
    usmEthBuffer,
    usmEthBufferUSD,
    usmBuyPrice,
    usmBuyPriceUSD,
    usmSellPrice,
    usmSellPriceUSD,
    fumMarketCap,
    fumMarketCapUSD,
    fumSupply,
    fumMints: fumMintsSelector(state),
    fumBurns: fumBurnsSelector(state),
    fumBuyPrice,
    fumBuyPriceUSD,
    fumSellPrice,
    fumSellPriceUSD,
    chainlinkPrice: chainlinkPriceSelector(state),
    compoundPrice: compoundPriceSelector(state),
    uniswapPrice: uniswapPriceSelector(state),
    coingeckoPrice,
    medianPrice: medianPriceSelector(state)
  }
}

export default connect(mapStateToProps)(App);
