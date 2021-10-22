import { ethers } from "ethers"
import { setCollateral, setDebtRatio, setEthBuffer, setFUMPrice, setUSMPrice } from "../actions"

export const loadCollateralData = async (dispatch, usmContract, usmViewContract) => {
  getCollateral(dispatch, usmContract)
  getDebtRatio(dispatch, usmViewContract)
  getEthBuffer(dispatch, usmViewContract)
  getUSMPrice(dispatch, usmViewContract)
  getFUMPrice(dispatch, usmViewContract)
}

export const getCollateral = async (dispatch, contract) => {
  const collateral = await contract.ethPool()
  const formattedCollateral = ethers.utils.formatEther(collateral)
  dispatch(setCollateral(formattedCollateral))
}

export const getDebtRatio = async (dispatch, contract) => {
  const ratio = await contract.debtRatio()
  const formattedRatio = ethers.utils.formatEther(ratio)
  dispatch(setDebtRatio(formattedRatio))
}

export const getEthBuffer = async (dispatch, contract) => {
  const ethBuffer = await contract.ethBuffer(0)
  const formattedBuffer = ethers.utils.formatEther(ethBuffer)
  dispatch(setEthBuffer(formattedBuffer))
}

export const getUSMPrice = async (dispatch, contract) => {
  const buyPrice = await contract.usmPrice(0)
  const formattedBuyPrice = ethers.utils.formatEther(buyPrice)
  const sellPrice = await contract.usmPrice(1)
  const formattedSellPrice = ethers.utils.formatEther(sellPrice)
  dispatch(setUSMPrice(formattedBuyPrice, formattedSellPrice))
}

export const getFUMPrice = async (dispatch, contract) => {
  const buyPrice = await contract.fumPrice(0)
  const formattedBuyPrice = ethers.utils.formatEther(buyPrice)
  const sellPrice = await contract.fumPrice(1)
  const formattedSellPrice = ethers.utils.formatEther(sellPrice)
  dispatch(setFUMPrice(formattedBuyPrice, formattedSellPrice))
}
