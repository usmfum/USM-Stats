import { Component } from 'react';
import { connect } from 'react-redux';
import { coingeckoPriceSelector, metamaskSelector, usmInputAmountSelector, metamaskSignerSelector, metamaskUSMSelector, usmBurnsSelector, usmBuyPriceSelector, usmMintsSelector, usmSellPriceSelector, usmSupplySelector } from './redux/selectors';
import { Button, Card, Table } from 'react-bootstrap';
import { decimalPlaces, stringMul, usmPriceHighlight } from './utils';
import { buyUSM, loadMetamask, sellUSM } from './redux/interactions';
import { setInputAmount } from './redux/actions';
import { usm } from './tokens';

function printButtons(metamaskConnected, buy, sell, connect, inputChange) {
  if (metamaskConnected) {
    return (
      <>
        <Button onClick={sell} variant="warning" size="sm" className="float-right ml-1">Burn (USM)</Button>
        <Button onClick={buy} variant="success" size="sm" className="float-right ml-1">Mint (ETH)</Button>
        <input onChange={inputChange} placeholder="Amount" type="number" size="sm" className="float-right ml-1"></input>
      </>
    )
  }
  else {
    return (<Button onClick={connect} variant="success" size="sm" className="float-right ml-1">Connect</Button>)
  }
}

class USMCard extends Component {
  render () {
    const {dispatch, usmSupply, usmMints, usmBurns, usmMarketCap, usmMarketCapUSD,
      usmBuyPrice, usmBuyPriceUSD, usmSellPrice, usmSellPriceUSD,
      metamaskSigner, metamaskConnected, metamaskUSM, inputAmount
    } = this.props

    const connectMetamask = (e) => {
      loadMetamask(dispatch)
    }

    const buyUsm = (e) => {
      buyUSM(dispatch, metamaskUSM, metamaskSigner, inputAmount)
    }

    const setAmount = (e) => {
      dispatch(setInputAmount(usm.name, e.target.value))
    }

    const sellUsm = (e) => {
      sellUSM(dispatch, metamaskUSM, metamaskSigner, inputAmount)
    }

    return (
      <Card>
        <Card.Header as="h5">
          <span>USM</span>
          {printButtons(metamaskConnected, buyUsm, sellUsm, connectMetamask, setAmount)}
        </Card.Header>
        <Card.Body>
          
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

  const metamask = metamaskSelector(state)
  const metamaskConnected = (metamask != null);
  return {
    inputAmount: usmInputAmountSelector(state),
    usmMarketCap,
    usmMarketCapUSD,
    usmSupply,
    usmMints: usmMintsSelector(state),
    usmBurns: usmBurnsSelector(state),
    usmBuyPrice,
    usmBuyPriceUSD,
    usmSellPrice,
    usmSellPriceUSD,
    metamaskConnected,
    metamaskSigner: metamaskSignerSelector(state),
    metamaskUSM: metamaskUSMSelector(state)
  }
}

export default connect(mapStateToProps)(USMCard);

