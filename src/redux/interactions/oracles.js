import { ethers } from "ethers"
import { chainlink, coingecko, median, uniswapEthUsdc, uniswapEthUsdt } from "../../oracles"
import { setLatestOraclePrice } from "../actions"
import axios from 'axios'
import { oracle } from "../../tokens"

export const loadOracleData = async (dispatch, provider) => {
  getCoingeckoPrice(dispatch)
  const network = await provider.getNetwork()
  const oracleAbi = oracle.abi
  const oracleAddress = oracle.address[network.chainId]
  const oracleContract = new ethers.Contract(oracleAddress, oracleAbi, provider)
  getChainlinkPrice(dispatch, oracleContract)
  getUniswapEthUsdcPrice(dispatch, oracleContract)
  getUniswapEthUsdtPrice(dispatch, oracleContract)
  getMedianPrice(dispatch, oracleContract)
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
