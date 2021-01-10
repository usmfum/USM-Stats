import {get} from 'lodash';
import {createSelector} from 'reselect';

//APP
const networkProvider = state => get(state, 'app.provider', null);
export const networkProviderSelector = createSelector(networkProvider, w => w);

const usmContract = state => get(state, 'app.usm', null);
export const usmContractSelector = createSelector(usmContract, w => w);

const metamask = state => get(state, 'app.metamask', null);
export const metamaskSelector = createSelector(metamask, w => w);

const metamaskSigner = state => get(state, 'app.metamaskSigner', null);
export const metamaskSignerSelector = createSelector(metamaskSigner, w => w);

const metamaskError = state => get(state, 'app.metamaskError', null);
export const metamaskErrorSelector = createSelector(metamaskError, w => w);

const metamaskUSM = state => get(state, 'app.metamaskUSM', null);
export const metamaskUSMSelector = createSelector(metamaskUSM, w => w);

const metamaskFUM = state => get(state, 'app.metamaskFUM', null);
export const metamaskFUMSelector = createSelector(metamaskFUM, w => w);

const usmInputAmount = state => get(state, 'app.usmInputAmount', null);
export const usmInputAmountSelector = createSelector(usmInputAmount, w => w);

//USM
const usmSupply = state => get(state, 'usm.supply', 0);
export const usmSupplySelector = createSelector(usmSupply, w => w);

const usmMints = state => get(state, 'usm.mints', 0);
export const usmMintsSelector = createSelector(usmMints, w => w);

const usmBurns = state => get(state, 'usm.burns', 0);
export const usmBurnsSelector = createSelector(usmBurns, w => w);

const usmCollateral = state => get(state, 'usm.collateral', 0);
export const usmCollateralSelector = createSelector(usmCollateral, w => w);

const usmDebtRatio = state => get(state, 'usm.debtRatio', 0);
export const usmDebtRatioSelector = createSelector(usmDebtRatio, w => w);

const usmEthBuffer = state => get(state, 'usm.ethBuffer', 0);
export const usmEthBufferSelector = createSelector(usmEthBuffer, w => w);

const usmBuyPrice = state => get(state, 'usm.buyPrice', 0);
export const usmBuyPriceSelector = createSelector(usmBuyPrice, w => w);

const usmSellPrice = state => get(state, 'usm.sellPrice', 0);
export const usmSellPriceSelector = createSelector(usmSellPrice, w => w);

//FUM
const fumSupply = state => get(state, 'fum.supply', 0);
export const fumSupplySelector = createSelector(fumSupply, w => w);

const fumMints = state => get(state, 'fum.mints', 0);
export const fumMintsSelector = createSelector(fumMints, w => w);

const fumBurns = state => get(state, 'fum.burns', 0);
export const fumBurnsSelector = createSelector(fumBurns, w => w);

const fumBuyPrice = state => get(state, 'fum.buyPrice', 0);
export const fumBuyPriceSelector = createSelector(fumBuyPrice, w => w);

const fumSellPrice = state => get(state, 'fum.sellPrice', 0);
export const fumSellPriceSelector = createSelector(fumSellPrice, w => w);

//ORACLE
const chainlinkPrice = state => get(state, 'oracle.chainlinkPrice', 0);
export const chainlinkPriceSelector = createSelector(chainlinkPrice, w => w);

const compoundPrice = state => get(state, 'oracle.compoundPrice', 0);
export const compoundPriceSelector = createSelector(compoundPrice, w => w);

const uniswapPrice = state => get(state, 'oracle.uniswapPrice', 0);
export const uniswapPriceSelector = createSelector(uniswapPrice, w => w);

const coingeckoPrice = state => get(state, 'oracle.coingeckoPrice', 0);
export const coingeckoPriceSelector = createSelector(coingeckoPrice, w => w);

const medianPrice = state => get(state, 'oracle.medianPrice', 0);
export const medianPriceSelector = createSelector(medianPrice, w => w);
