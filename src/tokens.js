export const usm = {
  name: 'usm',
  abi: [
    "function mint(address to, uint minUsmOut) external payable returns (uint)",
    "function burn(address from, address payable to, uint usmToBurn, uint minEthOut) external returns (uint)",
    "function fund(address to, uint minFumOut) external payable returns (uint)",
    "function defund(address from, address payable to, uint fumToBurn, uint minEthOut) external returns (uint)",
    "function defundFromFUM(address from, address payable to, uint fumToBurn, uint minEthOut) external returns (uint)",
    "function ethPool() public view returns (uint pool)",
    "function minFumBuyPrice() public view returns (uint mfbp)",
    "function buySellAdjustment() public view returns (uint adjustment)",
    "function ethBuffer(uint8 upOrDown) external view returns (int buffer)",
    "function ethToUsm(uint ethAmount, uint8 upOrDown) external view returns (uint usmOut)",
    "function usmToEth(uint usmAmount, uint8 upOrDown) external view returns (uint ethOut)",
    "function debtRatio() external view returns (uint ratio)",
    "function usmPrice(uint8 side) external view returns (uint price)",
    "function fumPrice(uint8 side) external view returns (uint price)",
    "function latestChainlinkPrice() public view returns (uint price)",
    "function latestCompoundPrice() public view returns (uint price)",
    "function latestUniswapTWAPPrice() public view returns (uint price)",
    "function latestPrice() public virtual view returns (uint price)",

    "function receive() external payable",
    
    "event MinFumBuyPriceChanged(uint previous, uint latest)",
    "event BuySellAdjustmentChanged(uint previous, uint latest)",
  
    "function totalSupply() external view returns (uint256)",
    "function balanceOf(address account) external view returns (uint256)",
    "function transfer(address recipient, uint256 amount) external returns (bool)",
    "function allowance(address owner, address spender) external view returns (uint256)",
    "function approve(address spender, uint256 amount) external returns (bool)",
    "function transferFrom(address sender, address recipient, uint256 amount) external returns (bool)",
    "event Transfer(address indexed from, address indexed to, uint256 value)",
  ],
  address: {
    1: '0x2a7fff44c19f39468064ab5e5c304de01d591675',
    42: '0x21453979384f21D09534f8801467BDd5d90eCD6C'
  }
}

export const fum = {
  name: 'fum',
  abi: [
    "function totalSupply() external view returns (uint256)",
    "event Transfer(address indexed from, address indexed to, uint256 value)"
  ],
  address: {
    1: '0x86729873e3b88de2ab85ca292d6d6d69d548edf3',
    42: '0x96F8F5323Aa6CB0e6F311bdE6DEEFb1c81Cb1898'
  }
}
