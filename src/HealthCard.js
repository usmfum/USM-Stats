import { Component } from 'react';
import { connect } from 'react-redux';
import { coingeckoPriceSelector, usmCollateralSelector, usmDebtRatioSelector, usmEthBufferSelector } from './redux/selectors';
import { Card, Table } from 'react-bootstrap';
import { debtRatioHighlight, decimalPlaces, toPercentage } from './utils';

class HealthCard extends Component {
  render () {

    const {usmCollateral, usmCollateralUSD, usmDebtRatio, usmEthBuffer, usmEthBufferUSD} = this.props;

    return (
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
              <tr className="text-dark" style={{backgroundColor: debtRatioHighlight(usmDebtRatio)}}>
                <td>Debt Ratio</td>
                <td></td>
                <td>{toPercentage(usmDebtRatio)} %</td>
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
  const usmCollateral = usmCollateralSelector(state)
  const usmCollateralUSD = usmCollateral * coingeckoPrice
  const usmEthBuffer = usmEthBufferSelector(state)
  const usmEthBufferUSD = usmEthBuffer * coingeckoPrice
  return {
    coingeckoPrice,
    usmCollateral,
    usmCollateralUSD,
    usmEthBuffer,
    usmEthBufferUSD,
    usmDebtRatio: usmDebtRatioSelector(state),
  }
}

export default connect(mapStateToProps)(HealthCard);

