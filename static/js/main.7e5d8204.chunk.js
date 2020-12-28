(this["webpackJsonpusmfum-stats"]=this["webpackJsonpusmfum-stats"]||[]).push([[0],{115:function(e,t,n){"use strict";n.r(t);var r=n(5),c=n(8),u=n(36),i=n.n(u),a=n(37),s=n(3),o=n(4),l=n(7),f=n(6),d=(n(81),n(1)),j=n.n(d),b=n(14),p=n(16),O={name:"usm",abi:["function mint(address to, uint minUsmOut) external payable returns (uint)","function burn(address from, address payable to, uint usmToBurn, uint minEthOut) external returns (uint)","function fund(address to, uint minFumOut) external payable returns (uint)","function defund(address from, address payable to, uint fumToBurn, uint minEthOut) external returns (uint)","function defundFromFUM(address from, address payable to, uint fumToBurn, uint minEthOut) external returns (uint)","function ethPool() public view returns (uint pool)","function minFumBuyPrice() public view returns (uint mfbp)","function buySellAdjustment() public view returns (uint adjustment)","function ethBuffer(uint8 upOrDown) external view returns (int buffer)","function ethToUsm(uint ethAmount, uint8 upOrDown) external view returns (uint usmOut)","function usmToEth(uint usmAmount, uint8 upOrDown) external view returns (uint ethOut)","function debtRatio() external view returns (uint ratio)","function usmPrice(uint8 side) external view returns (uint price)","function fumPrice(uint8 side) external view returns (uint price)","function latestChainlinkPrice() public view returns (uint price)","function latestCompoundPrice() public view returns (uint price)","function latestUniswapTWAPPrice() public view returns (uint price)","function latestPrice() public virtual view returns (uint price)","event MinFumBuyPriceChanged(uint previous, uint latest)","event BuySellAdjustmentChanged(uint previous, uint latest)","function totalSupply() external view returns (uint256)","function balanceOf(address account) external view returns (uint256)","function transfer(address recipient, uint256 amount) external returns (bool)","function allowance(address owner, address spender) external view returns (uint256)","function approve(address spender, uint256 amount) external returns (bool)","function transferFrom(address sender, address recipient, uint256 amount) external returns (bool)","event Transfer(address indexed from, address indexed to, uint256 value)"],address:{1:"0x03eb7Ce2907e202bB70BAE3D7B0C588573d3cECC"}},h={name:"fum",abi:["function totalSupply() external view returns (uint256)","event Transfer(address indexed from, address indexed to, uint256 value)"],address:{1:"0xf04a5D82ff8a801f7d45e9C14CDcf73defF1a394"}},m="chainlink",x="compound",v="uniswap",y="coingecko";function P(e){return{type:"NETWORK_LOADED",provider:e}}function w(e){return{type:"USM_LOADED",usm:e}}function E(e){return{type:"FUM_LOADED",fum:e}}function C(e,t){switch(e){case m:return{type:"ORACLE_PRICE_CHAINLINK",price:t};case x:return{type:"ORACLE_PRICE_COMPOUND",price:t};case v:return{type:"ORACLE_PRICE_UNISWAP",price:t};case y:return{type:"ORACLE_PRICE_COINGECKO",price:t}}}function _(e){return{type:"USM_COLLATERAL",collateral:e}}function S(e){return{type:"USM_ETH_BUFFER",ethBuffer:e}}function g(e,t){return{type:"USM_PRICE",buyPrice:e,sellPrice:t}}function T(e,t){return{type:"FUM_PRICE",buyPrice:e,sellPrice:t}}function k(e,t){switch(e){case O.name:return{type:"USM_TOTAL_SUPPLY",supply:t};case h.name:return{type:"FUM_TOTAL_SUPPLY",supply:t}}}function M(e,t){switch(e){case O.name:return{type:"USM_MINTS",mints:t};case h.name:return{type:"FUM_MINTS",mints:t}}}function U(e,t){switch(e){case O.name:return{type:"USM_BURNS",burns:t};case h.name:return{type:"FUM_BURNS",burns:t}}}var R=function(){var e=Object(b.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:B(t,n),A(t,n),N(t,n),L(t,n),I(t,n);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),B=function(){var e=Object(b.a)(j.a.mark((function e(t,n){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.ethPool();case 2:r=e.sent,c=p.a.utils.formatEther(r),t(_(c));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),A=function(){var e=Object(b.a)(j.a.mark((function e(t,n){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.debtRatio();case 2:r=e.sent,c=p.a.utils.formatEther(r),t({type:"USM_DEBT_RATIO",debtRatio:c});case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),N=function(){var e=Object(b.a)(j.a.mark((function e(t,n){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.ethBuffer(0);case 2:r=e.sent,c=p.a.utils.formatEther(r),t(S(c));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),L=function(){var e=Object(b.a)(j.a.mark((function e(t,n){var r,c,u,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.usmPrice(0);case 2:return r=e.sent,c=p.a.utils.formatEther(r),e.next=6,n.usmPrice(1);case 6:u=e.sent,i=p.a.utils.formatEther(u),t(g(c,i));case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),I=function(){var e=Object(b.a)(j.a.mark((function e(t,n){var r,c,u,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.fumPrice(0);case 2:return r=e.sent,c=p.a.utils.formatEther(r),e.next=6,n.fumPrice(1);case 6:u=e.sent,i=p.a.utils.formatEther(u),t(T(c,i));case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),F=function(){var e=Object(b.a)(j.a.mark((function e(t,n,r){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:D(t,n,r),H(t,n,r),W(t,n,r);case 3:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),D=function(){var e=Object(b.a)(j.a.mark((function e(t,n,r){var c,u;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.totalSupply();case 2:c=e.sent,u=p.a.utils.formatEther(c),t(k(n.name,u));case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),H=function(){var e=Object(b.a)(j.a.mark((function e(t,n,r){var c,u;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r.filters.Transfer(p.a.constants.AddressZero,null),e.next=3,r.queryFilter(c,0);case 3:u=e.sent,t(M(n.name,u.length));case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),W=function(){var e=Object(b.a)(j.a.mark((function e(t,n,r){var c,u;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r.filters.Transfer(null,p.a.constants.AddressZero),e.next=3,r.queryFilter(c,0);case 3:u=e.sent,t(U(n.name,u.length));case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),K=n(67),Y=n.n(K),z=function(){var e=Object(b.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:q(t,n),G(t,n),X(t,n),J(t);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),J=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Y.a.get("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd").then((function(e){t(C(y,e.data.ethereum.usd))})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(b.a)(j.a.mark((function e(t,n){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.latestChainlinkPrice();case 2:r=e.sent,c=p.a.utils.formatEther(r),t(C(m,c));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),G=function(){var e=Object(b.a)(j.a.mark((function e(t,n){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.latestCompoundPrice();case 2:r=e.sent,c=p.a.utils.formatEther(r),t(C(x,c));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),X=function(){var e=Object(b.a)(j.a.mark((function e(t,n){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.latestUniswapTWAPPrice();case 2:r=e.sent,c=p.a.utils.formatEther(r),t(C(v,c));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Z=function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=new p.a.providers.JsonRpcProvider("https://mainnet.infura.io/v3/1be1f8b7b85a47e4949bc1057660a81d"),t(P(n)),V(t,n),$(t,n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(b.a)(j.a.mark((function e(t,n){var r,c,u,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getNetwork();case 2:r=e.sent,c=O.abi,u=O.address[r.chainId],i=new p.a.Contract(u,c,n),t(w(i)),F(t,O,i),R(t,i),z(t,i);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),$=function(){var e=Object(b.a)(j.a.mark((function e(t,n){var r,c,u,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getNetwork();case 2:r=e.sent,c=h.abi,u=h.address[r.chainId],i=new p.a.Contract(u,c,n),t(E(i)),F(t,h,i);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Q=n(17),ee=n(18),te=Object(ee.a)((function(e){return Object(Q.get)(e,"app.provider",null)}),(function(e){return e})),ne=(Object(ee.a)((function(e){return Object(Q.get)(e,"app.usm",null)}),(function(e){return e})),Object(ee.a)((function(e){return Object(Q.get)(e,"usm.supply",0)}),(function(e){return e}))),re=Object(ee.a)((function(e){return Object(Q.get)(e,"usm.mints",0)}),(function(e){return e})),ce=Object(ee.a)((function(e){return Object(Q.get)(e,"usm.burns",0)}),(function(e){return e})),ue=Object(ee.a)((function(e){return Object(Q.get)(e,"usm.collateral",0)}),(function(e){return e})),ie=Object(ee.a)((function(e){return Object(Q.get)(e,"usm.debtRatio",0)}),(function(e){return e})),ae=Object(ee.a)((function(e){return Object(Q.get)(e,"usm.ethBuffer",0)}),(function(e){return e})),se=Object(ee.a)((function(e){return Object(Q.get)(e,"usm.buyPrice",0)}),(function(e){return e})),oe=Object(ee.a)((function(e){return Object(Q.get)(e,"usm.sellPrice",0)}),(function(e){return e})),le=Object(ee.a)((function(e){return Object(Q.get)(e,"fum.supply",0)}),(function(e){return e})),fe=Object(ee.a)((function(e){return Object(Q.get)(e,"fum.mints",0)}),(function(e){return e})),de=Object(ee.a)((function(e){return Object(Q.get)(e,"fum.burns",0)}),(function(e){return e})),je=Object(ee.a)((function(e){return Object(Q.get)(e,"fum.buyPrice",0)}),(function(e){return e})),be=Object(ee.a)((function(e){return Object(Q.get)(e,"fum.sellPrice",0)}),(function(e){return e})),pe=Object(ee.a)((function(e){return Object(Q.get)(e,"oracle.chainlinkPrice",0)}),(function(e){return e})),Oe=Object(ee.a)((function(e){return Object(Q.get)(e,"oracle.compoundPrice",0)}),(function(e){return e})),he=Object(ee.a)((function(e){return Object(Q.get)(e,"oracle.uniswapPrice",0)}),(function(e){return e})),me=Object(ee.a)((function(e){return Object(Q.get)(e,"oracle.coingeckoPrice",0)}),(function(e){return e})),xe=n(118),ve=n(119),ye=n(120),Pe=n(122),we=n(121),Ee=function(e){Object(l.a)(n,e);var t=Object(f.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Number.parseFloat(e).toFixed(t)},t=function(e,t){var n=["#00ff44","#d4ff00","#fbff00","#ffe100","#ffc400","#ff9d00","#ff8400","#ff5900","#ff0000"],r=Math.abs(Number.parseFloat(e)-Number.parseFloat(t));return r<=2?n[0]:r>2&&r<=4?n[1]:r>4&&r<=6?n[2]:r>6&&r<=8?n[3]:r>8&&r<=10?n[4]:r>10&&r<=12?n[5]:r>12&&r<=14?n[6]:r>14&&r<=20?n[7]:r>20?n[8]:void 0},n=this.props,c=n.dispatch,u=n.networkProvider,i=n.usmSupply,a=n.usmMints,s=n.usmBurns,o=n.usmMarketCap,l=n.usmCollateral,f=n.usmDebtRatio,d=n.usmEthBuffer,j=n.usmBuyPrice,b=n.usmSellPrice,p=n.fumMarketCap,O=n.fumSupply,h=n.fumMints,m=n.fumBurns,x=n.fumBuyPrice,v=n.fumSellPrice,y=n.chainlinkPrice,P=n.compoundPrice,w=n.uniswapPrice,E=n.coingeckoPrice;return u||Z(c),Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)(xe.a,{children:[Object(r.jsx)(ve.a,{className:"justify-content-md-center",children:Object(r.jsx)(ye.a,{sm:6,children:Object(r.jsx)(Pe.a,{children:Object(r.jsxs)(Pe.a.Body,{children:[Object(r.jsx)(Pe.a.Title,{children:"Protocol Health"}),Object(r.jsx)(we.a,{children:Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Total Collateral"}),Object(r.jsxs)("td",{children:[e(l)," ETH"]})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Buffer"}),Object(r.jsxs)("td",{children:[e(d)," ETH"]})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Debt Ratio"}),Object(r.jsxs)("td",{children:[function(t){var n=100*Number.parseFloat(t);return e(n.toString())}(f)," %"]})]})]})})]})})})}),Object(r.jsxs)(ve.a,{children:[Object(r.jsx)(ye.a,{children:Object(r.jsx)(Pe.a,{children:Object(r.jsxs)(Pe.a.Body,{children:[Object(r.jsx)(Pe.a.Title,{children:"USM Stats"}),Object(r.jsx)(we.a,{size:"sm",children:Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Market Cap (ETH)"}),Object(r.jsx)("td",{children:e(o)})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Total Supply"}),Object(r.jsx)("td",{children:e(i)})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Buy Price (ETH)"}),Object(r.jsx)("td",{children:e(j,5)})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Sell Price (ETH)"}),Object(r.jsx)("td",{children:e(b,5)})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"No. of Mints"}),Object(r.jsx)("td",{children:a})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"No. of Burns"}),Object(r.jsx)("td",{children:s})]})]})})]})})}),Object(r.jsx)(ye.a,{children:Object(r.jsx)(Pe.a,{children:Object(r.jsxs)(Pe.a.Body,{children:[Object(r.jsx)(Pe.a.Title,{children:"FUM Stats"}),Object(r.jsx)(we.a,{size:"sm",children:Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Market Cap (ETH)"}),Object(r.jsx)("td",{children:e(p)})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Total Supply"}),Object(r.jsx)("td",{children:e(O)})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Buy Price (ETH)"}),Object(r.jsx)("td",{children:e(x,5)})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Sell Price (ETH)"}),Object(r.jsx)("td",{children:e(v,5)})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"No. of Mints"}),Object(r.jsx)("td",{children:h})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"No. of Burns"}),Object(r.jsx)("td",{children:m})]})]})})]})})}),Object(r.jsx)(ye.a,{children:Object(r.jsx)(Pe.a,{children:Object(r.jsxs)(Pe.a.Body,{children:[Object(r.jsx)(Pe.a.Title,{children:"Oracle Prices (ETH)"}),Object(r.jsx)(we.a,{size:"sm",children:Object(r.jsxs)("tbody",{children:[Object(r.jsx)("tr",{children:Object(r.jsx)("th",{colSpan:2,children:"Off Chain Reference (not used)"})}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Coingecko"}),Object(r.jsx)("td",{children:e(E)})]}),Object(r.jsx)("tr",{children:Object(r.jsx)("th",{colSpan:2,children:"Reported On-Chain Prices"})}),Object(r.jsxs)("tr",{style:{backgroundColor:t(E,y)},children:[Object(r.jsx)("td",{children:"Chainlink"}),Object(r.jsx)("td",{children:e(y)})]}),Object(r.jsxs)("tr",{style:{backgroundColor:t(E,P)},children:[Object(r.jsx)("td",{children:"Compound"}),Object(r.jsx)("td",{children:e(P)})]}),Object(r.jsxs)("tr",{style:{backgroundColor:t(E,w)},children:[Object(r.jsx)("td",{children:"Uniswap TWAP"}),Object(r.jsx)("td",{children:e(w)})]})]})})]})})})]})]})})}}]),n}(c.Component);var Ce=Object(a.b)((function(e){var t=ne(e),n=se(e),r=t*n,c=le(e),u=je(e),i=c*u;return{networkProvider:te(e),usmMarketCap:r,usmSupply:t,usmMints:re(e),usmBurns:ce(e),usmCollateral:ue(e),usmDebtRatio:ie(e),usmEthBuffer:ae(e),usmBuyPrice:n,usmSellPrice:oe(e),fumMarketCap:i,fumSupply:c,fumMints:fe(e),fumBurns:de(e),fumBuyPrice:u,fumSellPrice:be(e),chainlinkPrice:pe(e),compoundPrice:Oe(e),uniswapPrice:he(e),coingeckoPrice:me(e)}}))(Ee),_e=n(30),Se=n(68),ge=n(11);var Te=new _e.c({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NETWORK_LOADED":return Object(ge.a)(Object(ge.a)({},e),{},{provider:t.provider});case"USM_LOADED":return Object(ge.a)(Object(ge.a)({},e),{},{usm:t.usm});case"FUM_LOADED":return Object(ge.a)(Object(ge.a)({},e),{},{fum:t.fum});default:return e}},usm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USM_TOTAL_SUPPLY":return Object(ge.a)(Object(ge.a)({},e),{},{supply:t.supply});case"USM_MINTS":return Object(ge.a)(Object(ge.a)({},e),{},{mints:t.mints});case"USM_BURNS":return Object(ge.a)(Object(ge.a)({},e),{},{burns:t.burns});case"USM_COLLATERAL":return Object(ge.a)(Object(ge.a)({},e),{},{collateral:t.collateral});case"USM_DEBT_RATIO":return Object(ge.a)(Object(ge.a)({},e),{},{debtRatio:t.debtRatio});case"USM_ETH_BUFFER":return Object(ge.a)(Object(ge.a)({},e),{},{ethBuffer:t.ethBuffer});case"USM_PRICE":return Object(ge.a)(Object(ge.a)({},e),{},{buyPrice:t.buyPrice,sellPrice:t.sellPrice});default:return e}},fum:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FUM_TOTAL_SUPPLY":return Object(ge.a)(Object(ge.a)({},e),{},{supply:t.supply});case"FUM_MINTS":return Object(ge.a)(Object(ge.a)({},e),{},{mints:t.mints});case"FUM_BURNS":return Object(ge.a)(Object(ge.a)({},e),{},{burns:t.burns});case"FUM_PRICE":return Object(ge.a)(Object(ge.a)({},e),{},{buyPrice:t.buyPrice,sellPrice:t.sellPrice});default:return e}},oracle:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ORACLE_PRICE_CHAINLINK":return Object(ge.a)(Object(ge.a)({},e),{},{chainlinkPrice:t.price});case"ORACLE_PRICE_COMPOUND":return Object(ge.a)(Object(ge.a)({},e),{},{compoundPrice:t.price});case"ORACLE_PRICE_UNISWAP":return Object(ge.a)(Object(ge.a)({},e),{},{uniswapPrice:t.price});case"ORACLE_PRICE_COINGECKO":return Object(ge.a)(Object(ge.a)({},e),{},{coingeckoPrice:t.price});default:return e}}}),ke=Object(Se.createLogger)(),Me=[],Ue=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||_e.d;var Re;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(r.jsx)(a.a,{store:Object(_e.e)(Te,Re,Ue(_e.a.apply(void 0,Me.concat([ke])))),children:Object(r.jsx)(Ce,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},81:function(e,t,n){},83:function(e,t){}},[[115,1,2]]]);
//# sourceMappingURL=main.7e5d8204.chunk.js.map