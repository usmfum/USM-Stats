import { Component } from 'react';
import { connect } from 'react-redux';
import { coingeckoPriceSelector, fumBurnsSelector, fumBuyPriceSelector, fumMintsSelector, fumSellPriceSelector, fumSupplySelector } from './redux/selectors';
import { Card, Table } from 'react-bootstrap';
import { decimalPlaces, stringMul } from './utils';

class FUMCard extends Component {
  render() {
    const {
      fumMarketCap, fumMarketCapUSD, fumSupply, fumMints, fumBurns,
      fumBuyPrice, fumBuyPriceUSD, fumSellPrice, fumSellPriceUSD
    } = this.props

    return (
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
                <td>Mint Price</td>
                <td>Ξ {decimalPlaces(fumBuyPrice, 5)}</td>
                <td>$ {decimalPlaces(fumBuyPriceUSD)}</td>
              </tr>
              <tr>
                <td>Burn Price</td>
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
    )
  }
}

function mapStateToProps(state) {
  const coingeckoPrice = coingeckoPriceSelector(state)

  const fumSupply = fumSupplySelector(state)
  const fumBuyPrice = fumBuyPriceSelector(state)
  const fumSellPrice = fumSellPriceSelector(state)
  const fumMarketCap = fumSupply * fumBuyPrice

  const fumBuyPriceUSD = stringMul(fumBuyPrice, coingeckoPrice)
  const fumSellPriceUSD = stringMul(fumSellPrice, coingeckoPrice)
  const fumMarketCapUSD = stringMul(fumMarketCap, coingeckoPrice)

  return {
    fumMarketCap,
    fumMarketCapUSD,
    fumSupply,
    fumMints: fumMintsSelector(state),
    fumBurns: fumBurnsSelector(state),
    fumBuyPrice,
    fumBuyPriceUSD,
    fumSellPrice,
    fumSellPriceUSD,
    coingeckoPrice,
  }
}

export default connect(mapStateToProps)(FUMCard);
