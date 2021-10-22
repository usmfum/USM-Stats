import { ethers } from "ethers"
import { chainlink, coingecko, median, uniswapEthUsdc, uniswapEthUsdt } from "../../oracles"
import { setLatestOraclePrice } from "../actions"
import axios from 'axios'

export const loadOracleData = async (dispatch, contract) => {
  getCoingeckoPrice(dispatch)
  getChainlinkPrice(dispatch, contract)
  getUniswapEthUsdcPrice(dispatch, contract)
  getUniswapEthUsdtPrice(dispatch, contract)
  getMedianPrice(dispatch, contract)
}

export const getCoingeckoPrice = async (dispatch) => {
  axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
    .then(function (response) {
      dispatch(setLatestOraclePrice(coingecko, response.data.ethereum.usd))
    })
    .catch(function (error) {
      console.log(error);
    })
}

export const getChainlinkPrice = async (dispatch, contract) => {
  const price = await contract.latestChainlinkPrice()
  const formattedPrice = ethers.utils.formatEther(price)
  dispatch(setLatestOraclePrice(chainlink, formattedPrice))
}

export const getUniswapEthUsdcPrice = async (dispatch, contract) => {
  const price = await contract.latestUniswapV3TWAPPrice1()
  const formattedPrice = ethers.utils.formatEther(price)
  dispatch(setLatestOraclePrice(uniswapEthUsdc, formattedPrice))
}

export const getUniswapEthUsdtPrice = async (dispatch, contract) => {
  const price = await contract.latestUniswapV3TWAPPrice2()
  const formattedPrice = ethers.utils.formatEther(price)
  dispatch(setLatestOraclePrice(uniswapEthUsdt, formattedPrice))
}

export const getMedianPrice = async (dispatch, contract) => {
  const price = await contract.latestPrice()
  const formattedPrice = ethers.utils.formatEther(price)
  dispatch(setLatestOraclePrice(median, formattedPrice))
}
