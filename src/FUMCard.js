import { Component } from 'react';
import { connect } from 'react-redux';
import { coingeckoPriceSelector, fumBurnsSelector, fumBuyPriceSelector, fumInputAmountSelector, fumMintsSelector, fumSellPriceSelector, fumSupplySelector, metamaskSelector, metamaskSignerSelector, metamaskUSMSelector } from './redux/selectors';
import { Card, Table } from 'react-bootstrap';
import { decimalPlaces, stringMul } from './utils';
import { buyFUM, loadMetamask, sellFUM } from './redux/interactions';
import { setInputAmount } from './redux/actions';
import { fum } from './tokens';

function printButtons(metamaskConnected, buy, sell, connect, inputChange) {
  // Removed until fixed

  // if (metamaskConnected) {
  //   return (
  //     <>
  //       <Button onClick={sell} variant="warning" size="sm" className="float-right ml-1">Burn (FUM)</Button>
  //       <Button onClick={buy} variant="success" size="sm" className="float-right ml-1">Mint (ETH)</Button>
  //       <input className="form-control" style={{width: 100}} onChange={inputChange} placeholder="Amount" type="number" size="sm" className="float-right ml-1"></input>
  //     </>
  //   )
  // }
  // else {
  //   return (<Button onClick={connect} variant="success" size="sm" className="float-right ml-1">Connect</Button>)
  // }
}

class FUMCard extends Component {
  render() {
    const {
      dispatch, fumMarketCap, fumMarketCapUSD, fumSupply, fumMints, fumBurns,
      fumBuyPrice, fumBuyPriceUSD, fumSellPrice, fumSellPriceUSD,
      metamaskSigner, metamaskConnected, metamaskUSM, inputAmount
    } = this.props

    const connectMetamask = (e) => {
      loadMetamask(dispatch)
    }

    const buyFum = (e) => {
      buyFUM(dispatch, metamaskUSM, metamaskSigner, inputAmount)
    }

    const setAmount = (e) => {
      dispatch(setInputAmount(fum.name, e.target.value))
    }

    const sellFum = (e) => {
      sellFUM(dispatch, metamaskUSM, metamaskSigner, inputAmount)
    }

    return (
      <Card>
        <Card.Header as="h5">
          FUM
          {printButtons(metamaskConnected, buyFum, sellFum, connectMetamask, setAmount)}
        </Card.Header>
        <Card.Body>
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

  const metamask = metamaskSelector(state)
  const metamaskConnected = (metamask != null);
  return {
    inputAmount: fumInputAmountSelector(state),
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
    metamaskConnected,
    metamaskSigner: metamaskSignerSelector(state),
    metamaskUSM: metamaskUSMSelector(state)
  }
}

export default connect(mapStateToProps)(FUMCard);
