import { ethers } from "ethers"
import { fum, usm, usmView } from "../tokens"
import { fumLoaded, metamaskError, metamaskLoaded, networkLoaded, usmLoaded } from "./actions"
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
  const usmAbi = usm.abi
  const usmAddress = usm.address[network.chainId]
  const usmContract = new ethers.Contract(usmAddress, usmAbi, provider)
  const usmViewAbi = usmView.abi
  const usmViewAddress = usmView.address[network.chainId]
  const usmViewContract = new ethers.Contract(usmViewAddress, usmViewAbi, provider)
  dispatch(usmLoaded(usmContract))
  loadERC20Data(dispatch, usm, usmContract)
  loadCollateralData(dispatch, usmContract, usmViewContract)
  loadOracleData(dispatch, usmContract)
}

export const loadFUM = async (dispatch, provider) => {
  const network = await provider.getNetwork()
  const abi = fum.abi
  const address = fum.address[network.chainId]
  const fumContract = new ethers.Contract(address, abi, provider)
  dispatch(fumLoaded(fumContract))
  loadERC20Data(dispatch, fum, fumContract)
}

export const loadMetamask = async (dispatch) => {
  try {
    await window.ethereum.enable()
    const provider = await new ethers.providers.Web3Provider(window.ethereum)
    const signer = await provider.getSigner()
    const network = await provider.getNetwork()

    if (network.chainId != 1) {
      throw new Error("Must be on mainnet. Please alter Metamask network and refresh the page.")
    }

    //load USM with Metamask
    const usmAbi = usm.abi
    const usmAddress = usm.address[network.chainId]
    const usmContract = new ethers.Contract(usmAddress, usmAbi, signer)
    //load FUM with Metamask
    const fumAbi = fum.abi
    const fumAddress = fum.address[network.chainId]
    const fumContract = new ethers.Contract(fumAddress, fumAbi, signer)
    dispatch(metamaskLoaded(provider, signer, usmContract, fumContract))
  }
  catch (e) {
    dispatch(metamaskError(e))
    return (false, false)
  }
}

export const buyUSM = async (dispatch, usm, signer, amount) => {
  const weiAmount = ethers.utils.parseEther(amount)
  const address = await signer.getAddress()
  usm.mint(address, 0, {value: weiAmount})
    .then(() => console.log("minting USM"))
    .catch((error) => dispatch(metamaskError(error)))
}

export const sellUSM = async (dispatch, usm, signer, amount) => {
  const weiAmount = ethers.utils.parseEther(amount)
  const address = await signer.getAddress()
  usm.burn(address, address, weiAmount, 0)
    .then(() => console.log("burning USM"))
    .catch((error) => dispatch(metamaskError(error)))
}

export const buyFUM = async (dispatch, usm, signer, amount) => {
  console.log(usm, signer, amount)
  const weiAmount = ethers.utils.parseEther(amount)
  const address = await signer.getAddress()
  usm.fund(address, 0, {value: weiAmount})
    .then(() => console.log("minting FUM"))
    .catch((error) => dispatch(metamaskError(error)))
}

export const sellFUM = async (dispatch, usm, signer, amount) => {
  const weiAmount = ethers.utils.parseEther(amount)
  const address = await signer.getAddress()
  usm.defund(address, address, weiAmount, 0)
    .then(() => console.log("burning FUM"))
    .catch((error) => dispatch(metamaskError(error)))
}
