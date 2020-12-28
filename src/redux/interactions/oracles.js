import { ethers } from "ethers"
import { chainlink, compound, uniswap } from "../../oracles"
import { setLatestOraclePrice } from "../actions"

export const loadOracleData = async (dispatch, contract) => {
    getChainlinkPrice(dispatch, contract)
    getCompoundPrice(dispatch, contract)
    getUniswapPrice(dispatch, contract)
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
