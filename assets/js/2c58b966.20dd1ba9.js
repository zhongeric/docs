(self.webpackChunkuniswap=self.webpackChunkuniswap||[]).push([[4520],{9772:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var i=r(2122),o=r(9756),n=(r(7294),r(3905)),a={id:"fees",title:"Fees"},s=void 0,l={unversionedId:"concepts/V3-overview/fees",id:"version-V3/concepts/V3-overview/fees",isDocsHomePage:!1,title:"Fees",description:"Swap Fees",source:"@site/versioned_docs/version-V3/concepts/V3-overview/fees.md",sourceDirName:"concepts/V3-overview",slug:"/concepts/V3-overview/fees",permalink:"/protocol/concepts/V3-overview/fees",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/versioned_docs/version-V3/concepts/V3-overview/fees.md",version:"V3",frontMatter:{id:"fees",title:"Fees"},sidebar:"version-V3/mySidebar",previous:{title:"Concentrated Liquidity",permalink:"/protocol/concepts/V3-overview/concentrated-liquidity"},next:{title:"Glossary",permalink:"/protocol/concepts/V3-overview/glossary"}},p=[{value:"Swap Fees",id:"swap-fees",children:[]},{value:"Pool Fees Tiers",id:"pool-fees-tiers",children:[]},{value:"Finding The Right Pool Fee",id:"finding-the-right-pool-fee",children:[]},{value:"Protocol Fees",id:"protocol-fees",children:[]}],c={toc:p};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"swap-fees"},"Swap Fees"),(0,n.kt)("p",null,"Swap fees are distributed pro-rata to all in-range","[1]"," liquidity at the time of the swap. If the spot price moves out of a position\u2019s range, the given liquidity is no longer active and does not generate any fees. If the spot price reverses and reenters the position\u2019s range, the position\u2019s liquidity becomes active again and will generate fees."),(0,n.kt)("p",null,"Swap fees are not automatically reinvested as they were in previous versions of Uniswap. Instead, they are collected separately from the pool and must be manually redeemed when the owner wishes to collect their fees."),(0,n.kt)("h2",{id:"pool-fees-tiers"},"Pool Fees Tiers"),(0,n.kt)("p",null,"Uniswap v3 introduces multiple pools for each token pair, each with a different swapping fee. Liquidity providers may initially create pools at three fee levels: 0.05%, 0.30%, and 1%. More fee levels may be added by UNI governance."),(0,n.kt)("p",null,"Breaking pairs into separate pools was previously untenable due to the issue of liquidity fragmentation. Any incentive alignments achieved by more fee optionality invariably resulted in a net loss to traders, due to lower pairwise liquidity and the resulting increase in price impact upon swapping."),(0,n.kt)("p",null,"The introduction of concentrated liquidity decouples total liquidity from price impact. With price impact concerns out of the way, breaking pairs into multiple pools becomes a feasible approach to improving a pools functionality for assets previously underserved by the 0.30% swap fee."),(0,n.kt)("h2",{id:"finding-the-right-pool-fee"},"Finding The Right Pool Fee"),(0,n.kt)("p",null,"We anticipate that certain types of assets will gravitate towards specific fee tiers, based on where the incentives for both swappers and liquidity providers come nearest to alignment."),(0,n.kt)("p",null,"We expect low volatility assets (stable coins) will likely congregate in the lowest fee tier, as the price risk for liquidity providers holding these assets is very low, and those swapping will be motivated to bear the lowest swappers will be motivated to pursue a execution price closest to 1:1 as they can get."),(0,n.kt)("p",null,"Similarly, we anticipate more exotic assets, or those traded rarely, will naturally gravitate towards a higher fee - as liquidity providers will be motivated to offset the cost risk of holding these assets for the duration of their position."),(0,n.kt)("h2",{id:"protocol-fees"},"Protocol Fees"),(0,n.kt)("p",null,"Uniswap v3 has a protocol fee that can be turned on by UNI governance. Compared to v2, UNI governance has more flexibility in choosing the fraction of swap fees that go to the protocol. For details regarding the protocol fee, see the ",(0,n.kt)("a",{parentName:"p",href:"https://uniswap.org/whitepaper-v3.pdf"},(0,n.kt)("strong",{parentName:"a"},"whitepaper")),"."),(0,n.kt)("p",null,"[1]"," In-range liquidity refers to the liquidity contained in any positions which span both sides of the spot price."))}u.isMDXComponent=!0},3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return f}});var i=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=i.createContext({}),p=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,h=d["".concat(l,".").concat(f)]||d[f]||u[f]||n;return r?i.createElement(h,a(a({ref:t},c),{},{components:r})):i.createElement(h,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,a=new Array(n);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<n;p++)a[p]=r[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);