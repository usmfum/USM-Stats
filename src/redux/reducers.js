import {combineReducers} from 'redux';

function app(state = {}, action) {
  switch (action.type) {
    case 'NETWORK_LOADED':
      return { ...state, provider: action.provider }
    case 'USM_LOADED':
      return { ...state, usm: action.usm }
    case 'FUM_LOADED':
      return { ...state, fum: action.fum }
    case 'METAMASK_LOADED':
      return { 
        ...state,
        metamask: action.metamask,
        metamaskSigner: action.signer,
        metamaskUSM: action.usm,
        metamaskFUM: action.fum
      }
    case 'METAMASK_ERROR':
      return { ...state, metamaskError: action.error }
    case 'CLEAR_METAMASK_ERROR':
      return { ...state, metamaskError: null }
    case 'SET_USM_INPUT_AMOUNT':
      return { ...state, usmInputAmount: action.amount }
    case 'SET_FUM_INPUT_AMOUNT':
      return { ...state, fumInputAmount: action.amount }
    default:
      return state;
  }
}

function usm(state = {}, action) {
  switch (action.type) {
    case 'USM_TOTAL_SUPPLY':
      return { ...state, supply: action.supply }
    case 'USM_MINTS':
      return { ...state, mints: action.mints }
    case 'USM_BURNS':
      return { ...state, burns: action.burns }
    case 'USM_COLLATERAL':
      return { ...state, collateral: action.collateral }
    case 'USM_DEBT_RATIO':
      return { ...state, debtRatio: action.debtRatio }
    case 'USM_ETH_BUFFER':
      return { ...state, ethBuffer: action.ethBuffer }
    case 'USM_PRICE':
      return { ...state, buyPrice: action.buyPrice, sellPrice: action.sellPrice }
    default:
      return state;
  }
}

function fum(state = {}, action) {
  switch (action.type) {
    case 'FUM_TOTAL_SUPPLY':
      return { ...state, supply: action.supply }
    case 'FUM_MINTS':
      return { ...state, mints: action.mints }
    case 'FUM_BURNS':
      return { ...state, burns: action.burns }
    case 'FUM_PRICE':
      return { ...state, buyPrice: action.buyPrice, sellPrice: action.sellPrice }
    default:
      return state;
  }
}

function oracle(state = {}, action) {
  switch (action.type) {
    case 'ORACLE_PRICE_CHAINLINK':
      return { ...state, chainlinkPrice: action.price }
    case 'ORACLE_PRICE_COMPOUND':
      return { ...state, compoundPrice: action.price }
    case 'ORACLE_PRICE_UNISWAP':
      return { ...state, uniswapPrice: action.price }
    case 'ORACLE_PRICE_COINGECKO':
      return { ...state, coingeckoPrice: action.price }
    case 'ORACLE_PRICE_MEDIAN':
      return { ...state, medianPrice: action.price }
    default:
      return state;
  }
}

const rootReducer = new combineReducers({
  app, usm, fum, oracle
});

export default rootReducer;
