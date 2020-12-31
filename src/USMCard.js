import { Component } from 'react';
import { connect } from 'react-redux';
import { coingeckoPriceSelector, usmBurnsSelector, usmBuyPriceSelector, usmMintsSelector, usmSellPriceSelector, usmSupplySelector } from './redux/selectors';
import { Card, Table } from 'react-bootstrap';
import { decimalPlaces, stringMul, usmPriceHighlight } from './utils';

class USMCard extends Component {
  render () {
    const {usmSupply, usmMints, usmBurns, usmMarketCap, usmMarketCapUSD,
      usmBuyPrice, usmBuyPriceUSD, usmSellPrice, usmSellPriceUSD} = this.props

    return (
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
              <tr className="text-dark" style={{backgroundColor: usmPriceHighlight(usmBuyPriceUSD)}}>
                <td>Mint Price</td>
                <td>Ξ {decimalPlaces(usmBuyPrice, 5)}</td>
                <td>$ {decimalPlaces(usmBuyPriceUSD)}</td>
              </tr>
              <tr className="text-dark" style={{backgroundColor: usmPriceHighlight(usmSellPriceUSD)}}>
                <td>Burn Price</td>
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
    )
  }
}

function mapStateToProps(state) {
  const coingeckoPrice = coingeckoPriceSelector(state)

  const usmSupply = usmSupplySelector(state)
  const usmBuyPrice = usmBuyPriceSelector(state)
  const usmSellPrice = usmSellPriceSelector(state)
  const usmMarketCap = usmSupply * usmBuyPrice
  const usmBuyPriceUSD = stringMul(usmBuyPrice, coingeckoPrice)
  const usmSellPriceUSD = stringMul(usmSellPrice, coingeckoPrice)
  const usmMarketCapUSD = stringMul(usmMarketCap, coingeckoPrice)
  return {
    usmMarketCap,
    usmMarketCapUSD,
    usmSupply,
    usmMints: usmMintsSelector(state),
    usmBurns: usmBurnsSelector(state),
    usmBuyPrice,
    usmBuyPriceUSD,
    usmSellPrice,
    usmSellPriceUSD,
  }
}

export default connect(mapStateToProps)(USMCard);

