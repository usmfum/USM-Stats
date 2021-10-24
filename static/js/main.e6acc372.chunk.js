(this["webpackJsonpusmfum-stats"]=this["webpackJsonpusmfum-stats"]||[]).push([[0],{121:function(e,t,n){"use strict";n.r(t);var r=n(6),c=n(4),a=n(32),u=n.n(a),s=n(24),i=n(3),o=n(5),l=n(8),d=n(7),j=(n(87),n(1)),b=n.n(j),f=n(15),O=n(14),p={name:"usm",abi:["function mint(address to, uint minUsmOut) external payable returns (uint usmOut)","function burn(address payable to, uint usmToBurn, uint minEthOut) external returns (uint ethOut)","function fund(address to, uint minFumOut) external payable returns (uint fumOut)","function defund(address payable to, uint fumToBurn, uint minEthOut) external onlyAfterPrefund returns (uint ethOut)","function defundFrom(address from, address payable to, uint fumToBurn, uint minEthOut) external onlyAfterPrefund returns (uint ethOut)","function latestPrice() public virtual view returns (uint price)","function ethPool() public view returns (uint pool)","function bidAskAdjustment() public view returns (uint adjustment)","function timeSystemWentUnderwater() public view returns (uint timestamp)","function isDuringPrefund() public view returns (bool duringPrefund)","function receive() external payable","event UnderwaterStatusChanged(bool underwater)","event BidAskAdjustmentChanged(uint adjustment)","event PriceChanged(uint price, uint oraclePrice)","function totalSupply() external view returns (uint256)","function balanceOf(address account) external view returns (uint256)","function transfer(address recipient, uint256 amount) external returns (bool)","function allowance(address owner, address spender) external view returns (uint256)","function approve(address spender, uint256 amount) external returns (bool)","function transferFrom(address sender, address recipient, uint256 amount) external returns (bool)","event Transfer(address indexed from, address indexed to, uint256 value)"],address:{1:"0x2a7FFf44C19f39468064ab5e5c304De01D591675",42:"0x21453979384f21D09534f8801467BDd5d90eCD6C"}},m={name:"fum",abi:["function totalSupply() external view returns (uint256)","event Transfer(address indexed from, address indexed to, uint256 value)"],address:{1:"0x86729873e3b88DE2Ab85CA292D6d6D69D548eDF3",42:"0x96F8F5323Aa6CB0e6F311bdE6DEEFb1c81Cb1898"}},h={name:"usmView",abi:["function ethBuffer(bool roundUp) external view returns (int buffer)","function ethToUsm(uint ethAmount, bool roundUp) external view returns (uint usmOut)","function usmToEth(uint usmAmount, bool roundUp) external view returns (uint ethOut)","function debtRatio() external view returns (uint ratio)","function usmPrice(uint8 side) external view returns (uint price)","function fumPrice(uint8 side) external view returns (uint price)"],address:{1:"0x0aEbFe42154dEaE7e35AFA9727469e7F4a192b9d",42:""}},x={name:"oracle",abi:["function latestChainlinkPrice() public view returns (uint price)","function latestUniswapV3TWAPPrice1() public view returns (uint price)","function latestUniswapV3TWAPPrice2() public view returns (uint price)","function latestPrice() public virtual view returns (uint price)"],address:{1:"0x7F360C88CABdcC2F2874Ec4Eb05c3D47bD0726C5"}},v="chainlink",P="uniswapEthUsdc",y="uniswapEthUsdt",E="coingecko",w="median";function S(e){return{type:"NETWORK_LOADED",provider:e}}function U(e){return{type:"FUM_LOADED",fum:e}}function k(e,t){switch(e){case v:return{type:"ORACLE_PRICE_CHAINLINK",price:t};case P:return{type:"ORACLE_PRICE_UNISWAP_ETH_USDC",price:t};case y:return{type:"ORACLE_PRICE_UNISWAP_ETH_USDT",price:t};case E:return{type:"ORACLE_PRICE_COINGECKO",price:t};case w:return{type:"ORACLE_PRICE_MEDIAN",price:t}}}function C(e){return{type:"USM_COLLATERAL",collateral:e}}function _(e){return{type:"USM_ETH_BUFFER",ethBuffer:e}}function g(e,t){return{type:"USM_PRICE",buyPrice:e,sellPrice:t}}function M(e,t){return{type:"FUM_PRICE",buyPrice:e,sellPrice:t}}function A(e,t){switch(e){case p.name:return{type:"USM_TOTAL_SUPPLY",supply:t};case m.name:return{type:"FUM_TOTAL_SUPPLY",supply:t}}}function T(e,t){switch(e){case p.name:return{type:"USM_MINTS",mints:t};case m.name:return{type:"FUM_MINTS",mints:t}}}function D(e,t){switch(e){case p.name:return{type:"USM_BURNS",burns:t};case m.name:return{type:"FUM_BURNS",burns:t}}}var R=function(){var e=Object(f.a)(b.a.mark((function e(t,n,r){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N(t,n),B(t,r),F(t,r),I(t,r),L(t,r);case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),N=function(){var e=Object(f.a)(b.a.mark((function e(t,n){var r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.ethPool();case 2:r=e.sent,c=O.a.utils.formatEther(r),t(C(c));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),B=function(){var e=Object(f.a)(b.a.mark((function e(t,n){var r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.debtRatio();case 2:r=e.sent,c=O.a.utils.formatEther(r),t({type:"USM_DEBT_RATIO",debtRatio:c});case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),F=function(){var e=Object(f.a)(b.a.mark((function e(t,n){var r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.ethBuffer(0);case 2:r=e.sent,c=O.a.utils.formatEther(r),t(_(c));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),I=function(){var e=Object(f.a)(b.a.mark((function e(t,n){var r,c,a,u;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.usmPrice(0);case 2:return r=e.sent,c=O.a.utils.formatEther(r),e.next=6,n.usmPrice(1);case 6:a=e.sent,u=O.a.utils.formatEther(a),t(g(c,u));case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),L=function(){var e=Object(f.a)(b.a.mark((function e(t,n){var r,c,a,u;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.fumPrice(0);case 2:return r=e.sent,c=O.a.utils.formatEther(r),e.next=6,n.fumPrice(1);case 6:a=e.sent,u=O.a.utils.formatEther(a),t(M(c,u));case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),H=function(){var e=Object(f.a)(b.a.mark((function e(t,n,r){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:W(t,n,r),$(t,n,r),K(t,n,r);case 3:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),W=function(){var e=Object(f.a)(b.a.mark((function e(t,n,r){var c,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.totalSupply();case 2:c=e.sent,a=O.a.utils.formatEther(c),t(A(n.name,a));case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),$=function(){var e=Object(f.a)(b.a.mark((function e(t,n,r){var c,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r.filters.Transfer(O.a.constants.AddressZero,null),e.next=3,r.queryFilter(c,0);case 3:a=e.sent,t(T(n.name,a.length));case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),K=function(){var e=Object(f.a)(b.a.mark((function e(t,n,r){var c,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r.filters.Transfer(null,O.a.constants.AddressZero),e.next=3,r.queryFilter(c,0);case 3:a=e.sent,t(D(n.name,a.length));case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),V=n(72),z=n.n(V),Y=function(){var e=Object(f.a)(b.a.mark((function e(t,n){var r,c,a,u;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return J(t),e.next=3,n.getNetwork();case 3:r=e.sent,c=x.abi,a=x.address[r.chainId],u=new O.a.Contract(a,c,n),q(t,u),G(t,u),X(t,u),Z(t,u);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),J=function(){var e=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:z.a.get("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd").then((function(e){t(k(E,e.data.ethereum.usd))})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(f.a)(b.a.mark((function e(t,n){var r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.latestChainlinkPrice();case 2:r=e.sent,c=O.a.utils.formatEther(r),t(k(v,c));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),G=function(){var e=Object(f.a)(b.a.mark((function e(t,n){var r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.latestUniswapV3TWAPPrice1();case 2:r=e.sent,c=O.a.utils.formatEther(r),t(k(P,c));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),X=function(){var e=Object(f.a)(b.a.mark((function e(t,n){var r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.latestUniswapV3TWAPPrice2();case 2:r=e.sent,c=O.a.utils.formatEther(r),t(k(y,c));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Z=function(){var e=Object(f.a)(b.a.mark((function e(t,n){var r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.latestPrice();case 2:r=e.sent,c=O.a.utils.formatEther(r),t(k(w,c));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Q=function(){var e=Object(f.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=new O.a.providers.JsonRpcProvider("https://mainnet.infura.io/v3/1be1f8b7b85a47e4949bc1057660a81d"),t(S(n)),ee(t,n),te(t,n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=function(){var e=Object(f.a)(b.a.mark((function e(t,n){var r,c,a,u,s,i,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getNetwork();case 2:r=e.sent,c=p.abi,a=p.address[r.chainId],u=new O.a.Contract(a,c,n),s=h.abi,i=h.address[r.chainId],o=new O.a.Contract(i,s,n),t({type:"USM_LOADED",usm:u}),H(t,p,u),R(t,u,o),Y(t,n);case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),te=function(){var e=Object(f.a)(b.a.mark((function e(t,n){var r,c,a,u;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getNetwork();case 2:r=e.sent,c=m.abi,a=m.address[r.chainId],u=new O.a.Contract(a,c,n),t(U(u)),H(t,m,u);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ne=n(16),re=n(17),ce=Object(re.a)((function(e){return Object(ne.get)(e,"app.provider",null)}),(function(e){return e})),ae=(Object(re.a)((function(e){return Object(ne.get)(e,"app.usm",null)}),(function(e){return e})),Object(re.a)((function(e){return Object(ne.get)(e,"app.metamask",null)}),(function(e){return e}))),ue=Object(re.a)((function(e){return Object(ne.get)(e,"app.metamaskSigner",null)}),(function(e){return e})),se=Object(re.a)((function(e){return Object(ne.get)(e,"app.metamaskError",null)}),(function(e){return e})),ie=Object(re.a)((function(e){return Object(ne.get)(e,"app.metamaskUSM",null)}),(function(e){return e})),oe=(Object(re.a)((function(e){return Object(ne.get)(e,"app.metamaskFUM",null)}),(function(e){return e})),Object(re.a)((function(e){return Object(ne.get)(e,"app.usmInputAmount",null)}),(function(e){return e}))),le=Object(re.a)((function(e){return Object(ne.get)(e,"app.fumInputAmount",null)}),(function(e){return e})),de=Object(re.a)((function(e){return Object(ne.get)(e,"usm.supply",0)}),(function(e){return e})),je=Object(re.a)((function(e){return Object(ne.get)(e,"usm.mints",0)}),(function(e){return e})),be=Object(re.a)((function(e){return Object(ne.get)(e,"usm.burns",0)}),(function(e){return e})),fe=Object(re.a)((function(e){return Object(ne.get)(e,"usm.collateral",0)}),(function(e){return e})),Oe=Object(re.a)((function(e){return Object(ne.get)(e,"usm.debtRatio",0)}),(function(e){return e})),pe=Object(re.a)((function(e){return Object(ne.get)(e,"usm.ethBuffer",0)}),(function(e){return e})),me=Object(re.a)((function(e){return Object(ne.get)(e,"usm.buyPrice",0)}),(function(e){return e})),he=Object(re.a)((function(e){return Object(ne.get)(e,"usm.sellPrice",0)}),(function(e){return e})),xe=Object(re.a)((function(e){return Object(ne.get)(e,"fum.supply",0)}),(function(e){return e})),ve=Object(re.a)((function(e){return Object(ne.get)(e,"fum.mints",0)}),(function(e){return e})),Pe=Object(re.a)((function(e){return Object(ne.get)(e,"fum.burns",0)}),(function(e){return e})),ye=Object(re.a)((function(e){return Object(ne.get)(e,"fum.buyPrice",0)}),(function(e){return e})),Ee=Object(re.a)((function(e){return Object(ne.get)(e,"fum.sellPrice",0)}),(function(e){return e})),we=Object(re.a)((function(e){return Object(ne.get)(e,"oracle.chainlinkPrice",0)}),(function(e){return e})),Se=Object(re.a)((function(e){return Object(ne.get)(e,"oracle.uniswapEthUsdcPrice",0)}),(function(e){return e})),Ue=Object(re.a)((function(e){return Object(ne.get)(e,"oracle.uniswapEthUsdtPrice",0)}),(function(e){return e})),ke=Object(re.a)((function(e){return Object(ne.get)(e,"oracle.coingeckoPrice",0)}),(function(e){return e})),Ce=Object(re.a)((function(e){return Object(ne.get)(e,"oracle.medianPrice",0)}),(function(e){return e})),_e=n(125),ge=n(128),Me=n(126),Ae=n(127),Te=n(129),De=n(124),Re=["#00ff44","#aaff00","#fbff00","#ffe100","#ffc400","#ff9d00","#ff8400","#ff5900","#ff0000"],Ne=function(e,t){return e<=t[0]?Re[0]:e>t[0]&&e<=t[1]?Re[1]:e>t[1]&&e<=t[2]?Re[2]:e>t[2]&&e<=t[3]?Re[3]:e>t[3]&&e<=t[4]?Re[4]:e>t[4]&&e<=t[5]?Re[5]:e>t[5]&&e<=t[6]?Re[6]:e>t[6]&&e<=t[7]?Re[7]:e>t[7]?Re[8]:void 0},Be=function(e){var t=Math.abs(1-Number.parseFloat(e));return Ne(t,[.01,.02,.03,.04,.05,.06,.07,.08])},Fe=function(e,t){var n=Math.abs(Number.parseFloat(e)-Number.parseFloat(t));return Ne(n,[2,4,6,8,10,12,14,20])},Ie=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Number(Number.parseFloat(e).toFixed(t)).toLocaleString(void 0,{minimumFractionDigits:t,maximumFractionDigits:t})},Le=function(e){var t=100*Number.parseFloat(e);return Ie(t.toString())},He=function(e,t){return Number.parseFloat(e)*Number.parseFloat(t)},We=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e,t=this.props,n=t.usmCollateral,c=t.usmCollateralUSD,a=t.usmDebtRatio,u=t.usmEthBuffer,s=t.usmEthBufferUSD;return Object(r.jsxs)(Te.a,{children:[Object(r.jsx)(Te.a.Header,{as:"h5",children:"Protocol Health"}),Object(r.jsx)(Te.a.Body,{children:Object(r.jsx)(De.a,{striped:!0,hover:!0,size:"sm",children:Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Total Collateral"}),Object(r.jsxs)("td",{children:["\u039e ",Ie(n)]}),Object(r.jsxs)("td",{children:["$ ",Ie(c)]})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Buffer"}),Object(r.jsxs)("td",{children:["\u039e ",Ie(u)]}),Object(r.jsxs)("td",{children:["$ ",Ie(s)]})]}),Object(r.jsxs)("tr",{className:"text-dark",style:{backgroundColor:(e=a,Ne(e,[.5,.6,.65,.7,.725,.75,.775,.8]))},children:[Object(r.jsx)("td",{children:"Debt Ratio"}),Object(r.jsx)("td",{}),Object(r.jsxs)("td",{children:[Le(a)," %"]})]})]})})})]})}}]),n}(c.Component);var $e=Object(s.b)((function(e){var t=ke(e),n=fe(e),r=n*t,c=pe(e);return{coingeckoPrice:t,usmCollateral:n,usmCollateralUSD:r,usmEthBuffer:c,usmEthBufferUSD:c*t,usmDebtRatio:Oe(e)}}))(We),Ke=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.chainlinkPrice,n=e.uniswapEthUsdcPrice,c=e.uniswapEthUsdtPrice,a=e.coingeckoPrice,u=e.medianPrice;return Object(r.jsxs)(Te.a,{children:[Object(r.jsx)(Te.a.Header,{as:"h5",children:"Oracle Performance"}),Object(r.jsx)(Te.a.Body,{children:Object(r.jsx)(De.a,{striped:!0,hover:!0,size:"sm",children:Object(r.jsxs)("tbody",{children:[Object(r.jsx)("tr",{children:Object(r.jsx)("th",{colSpan:2,children:"Off Chain Reference (not used)"})}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Coingecko - ETH"}),Object(r.jsxs)("td",{children:["$ ",Ie(a)]})]}),Object(r.jsx)("tr",{children:Object(r.jsx)("th",{colSpan:2,children:"USMFUM ETH Price"})}),Object(r.jsxs)("tr",{className:"text-dark",style:{backgroundColor:Fe(a,u)},children:[Object(r.jsx)("td",{children:"Medianized Oracle"}),Object(r.jsxs)("td",{children:["$ ",Ie(u)]})]}),Object(r.jsx)("tr",{children:Object(r.jsx)("th",{colSpan:2,children:"Median Sources"})}),Object(r.jsxs)("tr",{className:"text-dark",style:{backgroundColor:Fe(a,t)},children:[Object(r.jsx)("td",{children:"Chainlink"}),Object(r.jsxs)("td",{children:["$ ",Ie(t)]})]}),Object(r.jsxs)("tr",{className:"text-dark",style:{backgroundColor:Fe(a,n)},children:[Object(r.jsx)("td",{children:"Uniswap ETH/USDC TWAP"}),Object(r.jsxs)("td",{children:["$ ",Ie(n)]})]}),Object(r.jsxs)("tr",{className:"text-dark",style:{backgroundColor:Fe(a,c)},children:[Object(r.jsx)("td",{children:"Uniswap ETH/USDT TWAP"}),Object(r.jsxs)("td",{children:["$ ",Ie(c)]})]})]})})})]})}}]),n}(c.Component);var Ve=Object(s.b)((function(e){return{coingeckoPrice:ke(e),chainlinkPrice:we(e),uniswapEthUsdcPrice:Se(e),uniswapEthUsdtPrice:Ue(e),medianPrice:Ce(e)}}))(Ke);var ze=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=(e.dispatch,e.usmSupply),n=e.usmMints,c=e.usmBurns,a=e.usmMarketCap,u=e.usmMarketCapUSD,s=e.usmBuyPrice,i=e.usmBuyPriceUSD,o=e.usmSellPrice,l=e.usmSellPriceUSD;e.metamaskSigner,e.metamaskConnected,e.metamaskUSM,e.inputAmount;return Object(r.jsxs)(Te.a,{children:[Object(r.jsxs)(Te.a.Header,{as:"h5",children:[Object(r.jsx)("span",{children:"USM"}),void 0]}),Object(r.jsx)(Te.a.Body,{children:Object(r.jsx)(De.a,{striped:!0,hover:!0,size:"sm",children:Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Market Cap"}),Object(r.jsxs)("td",{children:["\u039e ",Ie(a)]}),Object(r.jsxs)("td",{children:["$ ",Ie(u)]})]}),Object(r.jsxs)("tr",{className:"text-dark",style:{backgroundColor:Be(i)},children:[Object(r.jsx)("td",{children:"Mint Price"}),Object(r.jsxs)("td",{children:["\u039e ",Ie(s,5)]}),Object(r.jsxs)("td",{children:["$ ",Ie(i)]})]}),Object(r.jsxs)("tr",{className:"text-dark",style:{backgroundColor:Be(l)},children:[Object(r.jsx)("td",{children:"Burn Price"}),Object(r.jsxs)("td",{children:["\u039e ",Ie(o,5)]}),Object(r.jsxs)("td",{children:["$ ",Ie(l)]})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Total Supply"}),Object(r.jsx)("td",{children:"-"}),Object(r.jsx)("td",{children:Ie(t)})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"No. of Mints"}),Object(r.jsx)("td",{children:"-"}),Object(r.jsx)("td",{children:n})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"No. of Burns"}),Object(r.jsx)("td",{children:"-"}),Object(r.jsx)("td",{children:c})]})]})})})]})}}]),n}(c.Component);var Ye=Object(s.b)((function(e){var t=ke(e),n=de(e),r=me(e),c=he(e),a=n*r,u=He(r,t),s=He(c,t),i=He(a,t),o=null!=ae(e);return{inputAmount:oe(e),usmMarketCap:a,usmMarketCapUSD:i,usmSupply:n,usmMints:je(e),usmBurns:be(e),usmBuyPrice:r,usmBuyPriceUSD:u,usmSellPrice:c,usmSellPriceUSD:s,metamaskConnected:o,metamaskSigner:ue(e),metamaskUSM:ie(e)}}))(ze);var Je=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=(e.dispatch,e.fumMarketCap),n=e.fumMarketCapUSD,c=e.fumSupply,a=e.fumMints,u=e.fumBurns,s=e.fumBuyPrice,i=e.fumBuyPriceUSD,o=e.fumSellPrice,l=e.fumSellPriceUSD;e.metamaskSigner,e.metamaskConnected,e.metamaskUSM,e.inputAmount;return Object(r.jsxs)(Te.a,{children:[Object(r.jsxs)(Te.a.Header,{as:"h5",children:["FUM",void 0]}),Object(r.jsx)(Te.a.Body,{children:Object(r.jsx)(De.a,{striped:!0,hover:!0,size:"sm",children:Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Market Cap"}),Object(r.jsxs)("td",{children:["\u039e ",Ie(t)]}),Object(r.jsxs)("td",{children:["$ ",Ie(n)]})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Mint Price"}),Object(r.jsxs)("td",{children:["\u039e ",Ie(s,5)]}),Object(r.jsxs)("td",{children:["$ ",Ie(i)]})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Burn Price"}),Object(r.jsxs)("td",{children:["\u039e ",Ie(o,5)]}),Object(r.jsxs)("td",{children:["$ ",Ie(l)]})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Total Supply"}),Object(r.jsx)("td",{children:"-"}),Object(r.jsx)("td",{children:Ie(c)})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"No. of Mints"}),Object(r.jsx)("td",{children:"-"}),Object(r.jsx)("td",{children:a})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"No. of Burns"}),Object(r.jsx)("td",{children:"-"}),Object(r.jsx)("td",{children:u})]})]})})})]})}}]),n}(c.Component);var qe=Object(s.b)((function(e){var t=ke(e),n=xe(e),r=ye(e),c=Ee(e),a=n*r,u=He(r,t),s=He(c,t),i=He(a,t),o=null!=ae(e);return{inputAmount:le(e),fumMarketCap:a,fumMarketCapUSD:i,fumSupply:n,fumMints:ve(e),fumBurns:Pe(e),fumBuyPrice:r,fumBuyPriceUSD:u,fumSellPrice:c,fumSellPriceUSD:s,coingeckoPrice:t,metamaskConnected:o,metamaskSigner:ue(e),metamaskUSM:ie(e)}}))(Je),Ge=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.dispatch,n=e.networkProvider,c=e.metamaskError;return n||Q(t),c&&(alert(c.toString()),t({type:"CLEAR_METAMASK_ERROR"})),Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)(_e.a,{children:[Object(r.jsxs)(ge.a,{variant:"success",children:[Object(r.jsxs)("b",{children:[Object(r.jsx)("a",{href:"https://twitter.com/usmfum/status/1447437647727763456",target:"_blank",rel:"noreferrer",children:"USM v1-rc1"})," is now live on mainnet!"]}),"But please exercise caution, this is still a fresh release, not yet battle-tested."]}),Object(r.jsxs)(Me.a,{children:[Object(r.jsx)(Ae.a,{sm:"12",md:"6",children:Object(r.jsx)($e,{})}),Object(r.jsx)(Ae.a,{sm:"12",md:"6",children:Object(r.jsx)(Ve,{})})]}),Object(r.jsxs)(Me.a,{children:[Object(r.jsx)(Ae.a,{sm:"12",md:"6",children:Object(r.jsx)(Ye,{})}),Object(r.jsx)(Ae.a,{sm:"12",md:"6",children:Object(r.jsx)(qe,{})})]})]})})}}]),n}(c.Component);var Xe=Object(s.b)((function(e){return{networkProvider:ce(e),metamaskError:se(e)}}))(Ge),Ze=n(33),Qe=n(75),et=n(10);var tt=new Ze.c({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NETWORK_LOADED":return Object(et.a)(Object(et.a)({},e),{},{provider:t.provider});case"USM_LOADED":return Object(et.a)(Object(et.a)({},e),{},{usm:t.usm});case"FUM_LOADED":return Object(et.a)(Object(et.a)({},e),{},{fum:t.fum});case"METAMASK_LOADED":return Object(et.a)(Object(et.a)({},e),{},{metamask:t.metamask,metamaskSigner:t.signer,metamaskUSM:t.usm,metamaskFUM:t.fum});case"METAMASK_ERROR":return Object(et.a)(Object(et.a)({},e),{},{metamaskError:t.error});case"CLEAR_METAMASK_ERROR":return Object(et.a)(Object(et.a)({},e),{},{metamaskError:null});case"SET_USM_INPUT_AMOUNT":return Object(et.a)(Object(et.a)({},e),{},{usmInputAmount:t.amount});case"SET_FUM_INPUT_AMOUNT":return Object(et.a)(Object(et.a)({},e),{},{fumInputAmount:t.amount});default:return e}},usm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USM_TOTAL_SUPPLY":return Object(et.a)(Object(et.a)({},e),{},{supply:t.supply});case"USM_MINTS":return Object(et.a)(Object(et.a)({},e),{},{mints:t.mints});case"USM_BURNS":return Object(et.a)(Object(et.a)({},e),{},{burns:t.burns});case"USM_COLLATERAL":return Object(et.a)(Object(et.a)({},e),{},{collateral:t.collateral});case"USM_DEBT_RATIO":return Object(et.a)(Object(et.a)({},e),{},{debtRatio:t.debtRatio});case"USM_ETH_BUFFER":return Object(et.a)(Object(et.a)({},e),{},{ethBuffer:t.ethBuffer});case"USM_PRICE":return Object(et.a)(Object(et.a)({},e),{},{buyPrice:t.buyPrice,sellPrice:t.sellPrice});default:return e}},fum:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FUM_TOTAL_SUPPLY":return Object(et.a)(Object(et.a)({},e),{},{supply:t.supply});case"FUM_MINTS":return Object(et.a)(Object(et.a)({},e),{},{mints:t.mints});case"FUM_BURNS":return Object(et.a)(Object(et.a)({},e),{},{burns:t.burns});case"FUM_PRICE":return Object(et.a)(Object(et.a)({},e),{},{buyPrice:t.buyPrice,sellPrice:t.sellPrice});default:return e}},oracle:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ORACLE_PRICE_CHAINLINK":return Object(et.a)(Object(et.a)({},e),{},{chainlinkPrice:t.price});case"ORACLE_PRICE_UNISWAP_ETH_USDC":return Object(et.a)(Object(et.a)({},e),{},{uniswapEthUsdcPrice:t.price});case"ORACLE_PRICE_UNISWAP_ETH_USDT":return Object(et.a)(Object(et.a)({},e),{},{uniswapEthUsdtPrice:t.price});case"ORACLE_PRICE_COINGECKO":return Object(et.a)(Object(et.a)({},e),{},{coingeckoPrice:t.price});case"ORACLE_PRICE_MEDIAN":return Object(et.a)(Object(et.a)({},e),{},{medianPrice:t.price});default:return e}}}),nt=Object(Qe.createLogger)(),rt=[],ct=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ze.d;var at;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(Object(r.jsx)(s.a,{store:Object(Ze.e)(tt,at,ct(Ze.a.apply(void 0,rt.concat([nt])))),children:Object(r.jsx)(Xe,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},87:function(e,t,n){},89:function(e,t){}},[[121,1,2]]]);
//# sourceMappingURL=main.e6acc372.chunk.js.map