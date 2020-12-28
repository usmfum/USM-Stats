import { ethers } from "ethers"
import { fum, usm } from "../tokens"
import { fumLoaded, networkLoaded, usmLoaded } from "./actions"
import { loadCollateralData } from "./interactions/cdp"
import { loadERC20Data } from "./interactions/erc20"
import { loadOracleData } from "./interactions/oracles"

export const loadNetwork = async (dispatch) => {
  const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/1be1f8b7b85a47e4949bc1057660a81d")
  dispatch(networkLoaded(provider))
  loadUSM(dispatch, provider)
  loadFUM(dispatch, provider)
}

export const loadUSM = async (dispatch, provider) => {
  const network = await provider.getNetwork()
  const abi = usm.abi
  const address = usm.address[network.chainId]
  const usmContract = new ethers.Contract(address, abi, provider)
  dispatch(usmLoaded(usmContract))
  loadERC20Data(dispatch, usm, usmContract)
  loadCollateralData(dispatch, usmContract)
  loadOracleData(dispatch, usmContract)
}

export const loadFUM = async (dispatch, provider) => {
  const network = await provider.getNetwork()
  const abi = fum.abi
  const address = fum.address[network.chainId]
  const fumContract = new ethers.Contract(address, abi, provider)
  dispatch(fumLoaded(fumContract))
  console.log(abi, address, fumContract)
  loadERC20Data(dispatch, fum, fumContract)
}
