import { ethers } from "ethers"
import { networkLoaded } from "./actions"

export const loadNetwork = async (dispatch) => {
  const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/1be1f8b7b85a47e4949bc1057660a81d")
  dispatch(networkLoaded(provider))
}
