import { Component } from 'react';
import { connect } from 'react-redux';
import { chainlinkPriceSelector, medianPriceSelector, coingeckoPriceSelector, compoundPriceSelector, uniswapPriceSelector } from './redux/selectors';
import { Card, Table } from 'react-bootstrap';
import { decimalPlaces, oracleHighlight } from './utils';

class OracleCard extends Component {
  render() {

    const {chainlinkPrice, compoundPrice, uniswapPrice, coingeckoPrice, medianPrice} = this.props;

    return (
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
    )
  }
}

function mapStateToProps(state) {
  return {
    coingeckoPrice: coingeckoPriceSelector(state),
    chainlinkPrice: chainlinkPriceSelector(state),
    compoundPrice: compoundPriceSelector(state),
    uniswapPrice: uniswapPriceSelector(state),
    medianPrice: medianPriceSelector(state)
  }
}

export default connect(mapStateToProps)(OracleCard)
