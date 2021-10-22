import { chainlink, coingecko, median, uniswapEthUsdc, uniswapEthUsdt } from "../oracles";
import { fum, usm, usmView } from "../tokens";

export function setInputAmount(token, amount) {
  switch (token) {
    case usm.name:
      return {
        type: 'SET_USM_INPUT_AMOUNT',
        amount
      }
    case fum.name:
      return {
        type: 'SET_FUM_INPUT_AMOUNT',
        amount
      }
    default:
      break;
  }
  
}

export function metamaskLoaded(metamask, signer, usm, fum) {
  return {
    type: 'METAMASK_LOADED',
    metamask,
    signer,
    usm,
    fum
  }
}

export function metamaskError(error) {
  return {
    type: 'METAMASK_ERROR',
    error
  }
}

export function clearMetamaskError() {
  return {
    type: 'CLEAR_METAMASK_ERROR'
  }
}

export function networkLoaded(provider){
  return {
    type: 'NETWORK_LOADED',
    provider
  }
}

export function usmLoaded(usm) {
  return {
    type: 'USM_LOADED',
    usm
  }
}

export function fumLoaded(fum) {
  return {
    type: 'FUM_LOADED',
    fum
  }
}

export function setLatestOraclePrice(source, price) {
  switch (source) {
    case chainlink:
      return {
        type: 'ORACLE_PRICE_CHAINLINK',
        price
      }
    case uniswapEthUsdc:
      return {
        type: 'ORACLE_PRICE_UNISWAP_ETH_USDC',
        price
      }
    case uniswapEthUsdt:
      return {
        type: 'ORACLE_PRICE_UNISWAP_ETH_USDT',
        price
      }
    case coingecko:
      return {
        type: 'ORACLE_PRICE_COINGECKO',
        price
      }
    case median:
      return {
        type: 'ORACLE_PRICE_MEDIAN',
        price
      }
    default:
      break;
  }
}

export function setCollateral(collateral) {
  return {
    type: 'USM_COLLATERAL',
    collateral
  }
}

export function setDebtRatio(debtRatio) {
  return {
    type: 'USM_DEBT_RATIO',
    debtRatio
  }
}

export function setEthBuffer(ethBuffer) {
  return {
    type: 'USM_ETH_BUFFER',
    ethBuffer
  }
}

export function setUSMPrice(buyPrice, sellPrice) {
  return {
    type: 'USM_PRICE',
    buyPrice,
    sellPrice
  }
}

export function setFUMPrice(buyPrice, sellPrice) {
  return {
    type: 'FUM_PRICE',
    buyPrice,
    sellPrice
  }
}

export function setTotalSupply(tokenName, supply) {
  switch (tokenName) {
    case usm.name:
      return {
        type: 'USM_TOTAL_SUPPLY',
        supply
      }
    case fum.name:
      return {
        type: 'FUM_TOTAL_SUPPLY',
        supply
      }
    default:
      break;
  }
}

export function setMints(tokenName, mints) {
  switch (tokenName) {
    case usm.name:
      return {
        type: 'USM_MINTS',
        mints
      }
    case fum.name:
      return {
        type: 'FUM_MINTS',
        mints
      }
    default:
      break;
  }
}

export function setBurns(tokenName, burns) {
  switch (tokenName) {
    case usm.name:
      return {
        type: 'USM_BURNS',
        burns
      }
    case fum.name:
      return {
        type: 'FUM_BURNS',
        burns
      }
    default:
      break;
  }
}
