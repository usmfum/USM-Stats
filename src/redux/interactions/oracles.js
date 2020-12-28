import { ethers } from "ethers"
import { chainlink, coingecko, compound, uniswap } from "../../oracles"
import { setLatestOraclePrice } from "../actions"
import axios from 'axios'

export const loadOracleData = async (dispatch, contract) => {
  getChainlinkPrice(dispatch, contract)
  getCompoundPrice(dispatch, contract)
  getUniswapPrice(dispatch, contract)
  getCoingeckoPrice(dispatch)
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

export const getCompoundPrice = async (dispatch, contract) => {
  const price = await contract.latestCompoundPrice()
  const formattedPrice = ethers.utils.formatEther(price)
  dispatch(setLatestOraclePrice(compound, formattedPrice))
}

export const getUniswapPrice = async (dispatch, contract) => {
  const price = await contract.latestUniswapTWAPPrice()
  const formattedPrice = ethers.utils.formatEther(price)
  dispatch(setLatestOraclePrice(uniswap, formattedPrice))
}
