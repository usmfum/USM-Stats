import { Component } from 'react';
import { connect } from 'react-redux';
import { chainlinkPriceSelector, medianPriceSelector, coingeckoPriceSelector, uniswapEthUsdcPriceSelector, uniswapEthUsdtPriceSelector } from './redux/selectors';
import { Card, Table } from 'react-bootstrap';
import { decimalPlaces, oracleHighlight } from './utils';

class OracleCard extends Component {
  render() {

    const {chainlinkPrice, uniswapEthUsdcPrice, uniswapEthUsdtPrice, coingeckoPrice, medianPrice} = this.props;

    return (
      <Card>
        <Card.Header as="h5">
          Oracle Performance
        </Card.Header>
        <Card.Body>
          
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
              <tr className="text-dark" style={{backgroundColor: oracleHighlight(coingeckoPrice, medianPrice)}}>
                <td>Medianized Oracle</td>
                <td>$ {decimalPlaces(medianPrice)}</td>
              </tr>
              <tr>
                <th colSpan={2}>Median Sources</th>
              </tr>
              <tr className="text-dark" style={{backgroundColor: oracleHighlight(coingeckoPrice, chainlinkPrice)}}>
                <td>Chainlink</td>
                <td>$ {decimalPlaces(chainlinkPrice)}</td>
              </tr>
              <tr className="text-dark" style={{backgroundColor: oracleHighlight(coingeckoPrice, uniswapEthUsdcPrice)}}>
                <td>Uniswap ETH/USDC TWAP</td>
                <td>$ {decimalPlaces(uniswapEthUsdcPrice)}</td>
              </tr>
              <tr className="text-dark" style={{backgroundColor: oracleHighlight(coingeckoPrice, uniswapEthUsdtPrice)}}>
                <td>Uniswap ETH/USDT TWAP</td>
                <td>$ {decimalPlaces(uniswapEthUsdtPrice)}</td>
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
    uniswapEthUsdcPrice: uniswapEthUsdcPriceSelector(state),
    uniswapEthUsdtPrice: uniswapEthUsdtPriceSelector(state),
    medianPrice: medianPriceSelector(state)
  }
}

export default connect(mapStateToProps)(OracleCard)
