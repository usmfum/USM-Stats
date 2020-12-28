import { ethers } from "ethers"
import { setBurns, setMints, setTotalSupply } from "../actions"

export const loadERC20Data = async (dispatch, token, tokenContract) => {
  getTotalSupply(dispatch, token, tokenContract)
  getTotalMints(dispatch, token, tokenContract)
  getTotalBurns(dispatch, token, tokenContract)
}

export const getTotalSupply = async (dispatch, token, erc20Contract) => {
  const supply = await erc20Contract.totalSupply()
  const formattedSupply = ethers.utils.formatEther(supply)
  dispatch(setTotalSupply(token.name, formattedSupply))
}

export const getTotalMints = async (dispatch, token, erc20Contract) => {
  const mintFilter = erc20Contract.filters.Transfer(ethers.constants.AddressZero, null)
  const mints = await erc20Contract.queryFilter(mintFilter, 0)
  dispatch(setMints(token.name, mints.length))
}

export const getTotalBurns = async (dispatch, token, erc20Contract) => {
  const burnFilter = erc20Contract.filters.Transfer(null, ethers.constants.AddressZero)
  const burns = await erc20Contract.queryFilter(burnFilter, 0)
  dispatch(setBurns(token.name, burns.length))
}
