export const usm = {
  name: 'usm',
  abi: [
    "function mint(address to, uint minUsmOut) external payable returns (uint usmOut)",
    "function burn(address payable to, uint usmToBurn, uint minEthOut) external returns (uint ethOut)",
    "function fund(address to, uint minFumOut) external payable returns (uint fumOut)",
    "function defund(address payable to, uint fumToBurn, uint minEthOut) external onlyAfterPrefund returns (uint ethOut)",
    "function defundFrom(address from, address payable to, uint fumToBurn, uint minEthOut) external onlyAfterPrefund returns (uint ethOut)",
    "function latestPrice() public virtual view returns (uint price)",
    "function ethPool() public view returns (uint pool)",
    // "function fumTotalSupply() public view returns (uint supply)",
    "function bidAskAdjustment() public view returns (uint adjustment)",
    "function timeSystemWentUnderwater() public view returns (uint timestamp)",
    "function isDuringPrefund() public view returns (bool duringPrefund)",

    "function receive() external payable",

    "event UnderwaterStatusChanged(bool underwater)",
    "event BidAskAdjustmentChanged(uint adjustment)",
    "event PriceChanged(uint price, uint oraclePrice)",
  
    "function totalSupply() external view returns (uint256)",
    "function balanceOf(address account) external view returns (uint256)",
    "function transfer(address recipient, uint256 amount) external returns (bool)",
    "function allowance(address owner, address spender) external view returns (uint256)",
    "function approve(address spender, uint256 amount) external returns (bool)",
    "function transferFrom(address sender, address recipient, uint256 amount) external returns (bool)",
    "event Transfer(address indexed from, address indexed to, uint256 value)",
  ],
  address: {
    1: '0x2a7FFf44C19f39468064ab5e5c304De01D591675',
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
    1: '0x86729873e3b88DE2Ab85CA292D6d6D69D548eDF3',
    42: '0x96F8F5323Aa6CB0e6F311bdE6DEEFb1c81Cb1898'
  }
}

export const usmView = {
  name: 'usmView',
  abi: [
    "function ethBuffer(bool roundUp) external view returns (int buffer)",
    "function ethToUsm(uint ethAmount, bool roundUp) external view returns (uint usmOut)",
    "function usmToEth(uint usmAmount, bool roundUp) external view returns (uint ethOut)",
    "function debtRatio() external view returns (uint ratio)",
    "function usmPrice(uint8 side) external view returns (uint price)",
    "function fumPrice(uint8 side) external view returns (uint price)",
  ],
  address: {
    1: '0x0aEbFe42154dEaE7e35AFA9727469e7F4a192b9d',
    42: ''
  }
}

export const oracle = {
  name: 'oracle',
  abi: [
    "function latestChainlinkPrice() public view returns (uint price)",
    "function latestUniswapV3TWAPPrice1() public view returns (uint price)",
    "function latestUniswapV3TWAPPrice2() public view returns (uint price)",
    "function latestPrice() public virtual view returns (uint price)"
  ],
  address: {
    1: "0x7F360C88CABdcC2F2874Ec4Eb05c3D47bD0726C5",
  }
}
