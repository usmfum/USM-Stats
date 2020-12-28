import { ethers } from "ethers"
import { usm } from "../addresses"
import { networkLoaded, usmLoaded } from "./actions"

export const loadNetwork = async (dispatch) => {
  const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/1be1f8b7b85a47e4949bc1057660a81d")
  dispatch(networkLoaded(provider))
  loadUSM(dispatch, provider)
}

export const loadUSM = async (dispatch, provider) => {
  const network = await provider.getNetwork()
  const abi = usm.abi
  const address = usm.address[network.chainId]
  const usmContract = new ethers.Contract(address, abi, provider)
  dispatch(usmLoaded(usmContract))
}
