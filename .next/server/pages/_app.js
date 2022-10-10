"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8344:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const envVars = {
    API_URL: String(process.env.NEXT_PUBLIC_APIURL),
    NEXT_PUBLIC_CONTRACT_ADDRESS: String(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS),
    NEXT_PUBLIC_ALCHEMY_ID: "ku_puX-vIFhnbZnC3xmpdT3jUico70LY",
    NEXT_PUBLIC_INFURA_ID: String(process.env.NEXT_PUBLIC_INFURA_ID),
    NEXT_PUBLIC_ETHERSCAN_API_KEY: String(process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (envVars);


/***/ }),

/***/ 5656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6921);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9770);
/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5538);
/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config_env_vars__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8344);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__]);
_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const { NEXT_PUBLIC_ALCHEMY_ID , NEXT_PUBLIC_INFURA_ID , NEXT_PUBLIC_ETHERSCAN_API_KEY  } = _config_env_vars__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z;
const alchemyId = NEXT_PUBLIC_ALCHEMY_ID;
const etherscanApiKey = (/* unused pure expression or super */ null && (NEXT_PUBLIC_ETHERSCAN_API_KEY));
const { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.configureChains)([
    wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.polygon
], [
    (0,wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_5__.alchemyProvider)({
        apiKey: alchemyId
    }),
    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__.publicProvider)()
]);
const { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.getDefaultWallets)({
    appName: "the Wall",
    chains
});
const wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createClient)({
    autoConnect: true,
    connectors,
    provider
});
// MetaMask requires requesting permission to connect users accounts
// The MetaMask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
const signerw = wagmiClient.provider;
const provider3 = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.providers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/Z-ifXLmZ9T3-nfXiA0B8wp5ZUPXTkWlg");
// The MetaMask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
const contractaddrs = "0x91fc82f5c588c00985aa264fc7b45ee680110703";
// The ERC-20 Contract ABI, which is a common contract interface
// for tokens (this is the Human-Readable ABI format)
const Abi = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function price() view returns (uint256)",
    "function getTag(uint256 id) view returns (string)",
    "function latest(uint256) view returns (string[] tags,address[] addrs,uint256[] times)",
    "function mint2(address to, string _tag) payable",
    "function mint(address to, string _tag)",
    "function latest(uint256 last) view returns (string[] memory,address[] memory,uint256[] memory)", 
];
//format addresses in ui
function format_address(address) {
    const new_address = address.substring(0, 5) + "..." + address.slice(-3);
    return new_address;
}
function useTtag0() {
    const { 0: tag , 1: setTag  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("LOL");
    const { 0: artist , 1: setArtist  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("LOL");
    const { 0: time , 1: setTime  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: sup , 1: setSup  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(2);
    // effect hook for updating data
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // update the ui elements
        async function updateUIStates() {
            const [tagS, artistS, timeS] = await Contract.latest(await Contract.totalSupply());
            // set balance
            setTag(tagS);
            setArtist(artistS);
            setTime(timeS);
            let s = await Contract.totalSupply();
            s = ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.utils.formatUnits(s, 0);
            setSup(s);
        }
        // fix for updatix1ng after wallet login
        updateUIStates();
        // schedule every 15 sec refresh
        const timer = setInterval(()=>{
            updateUIStates();
        }, 3000);
        // clearing interval
        return ()=>clearInterval(timer);
    });
    function tag1() {
        let tags = [];
        let artists = [];
        let times = [];
        let t0 = [];
        let ts = [];
        let i = "";
        for(let n = 0; n < sup; n++){
            tags[n] = tag[n];
            artists[n] = artist[n];
            times[n] = time[n];
            //ts[n] = ethers.utils.formatUnits(time[0]);
            // times[n] = ethers.utils.formatUnits(ts[n],0);<p style={{color: 'blue'}}>
            if (tags[n] != "") {
                t0[n] = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                            className: "text-1xl text-center font-bold justify-center light:text-gray-800 ",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    style: {
                                        color: "#4f86f7"
                                    },
                                    children: [
                                        " # ",
                                        sup - n
                                    ]
                                }),
                                "  From   ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "rotating-hue",
                                    style: {
                                        color: "#4f86f7"
                                    },
                                    children: artists[n]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-center light:text-white-600",
                            children: tags[n]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-center light:text-white-600",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                style: {
                                    color: "#32353B"
                                },
                                children: "_____________________________________________________________________________________________"
                            })
                        })
                    ]
                });
            }
        }
        let t1 = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "text-1xl font-bold light:text-gray-800",
            children: [
                "Messages: ",
                sup
            ]
        });
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                t0,
                t1
            ]
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: tag1()
    });
}
const Contract = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.Contract(contractaddrs, Abi, signerw);
const App = ({ Component , pageProps  })=>{
    function handleChangeMessage(event) {
        const values = event.target.value;
        setSendMessage(values);
    }
    //notify
    const { 0: sendMessage , 1: setSendMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("TT");
    const { 0: unlocktext , 1: set_unlocktext  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Please Unlock Wallet");
    // notify function call
    // await // MetaMask requires requesting permission to connect users accounts
    const callTag = async ()=>{
        // A Web3Provider wraps a standard Web3 provider, which is
        // what MetaMask injects as window.ethereum into each page
        const provider2 = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.providers.Web3Provider(window.ethereum);
        await provider2.send("eth_requestAccounts", []);
        try {
            // await // MetaMask requires requesting permission to connect users accounts
            // await provider2.send("eth_requestAccounts", []);
            //  let ttt = await provider3.lookupAddress('0x9D31e30003f253563Ff108BC60B16Fdf2c93abb5')
            const signer = provider2.getSigner();
            await Contract.connect(signer).mint(signer._address, sendMessage);
        } catch (e) {
            console.log("LOL");
        // addToast({body: e.message, type: "error"});
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_themes__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
        attribute: "class",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "m-auto bg-white dark:bg-gray-900 dark:text-white",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig, {
                client: wagmiClient,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.RainbowKitProvider, {
                    chains: chains,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                            ...pageProps
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col space-y-2 justify-center mt-6 md:mt-2 px-4 xs:px-0 m-auto max-w-4xl min-w-80 shadow-md rounded-md border border-solid light:border-gray-200 dark:border-gray-500 overflow-hidden",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "m-auto text-center md:mt-8 text-2xl md:text-4xl font-extrabold rotating-hue",
                                    children: "Tag the Wall!"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "text-1xl text-center font-bold justify-center light:text-gray-800",
                                    children: "Send your message here"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                    className: "m-auto text-center w-3/4 justify-center rounded-md border border-solid light:border-gray-200 dark:border-gray-500 ",
                                    onChange: (e)=>handleChangeMessage(e)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    style: {
                                        background: "#00ffff"
                                    },
                                    className: "btn w-6/12 m-auto rounded-md border border-solid light:border-black dark:border-black",
                                    type: "button",
                                    onClick: callTag,
                                    children: " Send"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col space-y-6 justify-center mt-6 md:mt-12 px-4 xs:px-0 m-auto max-w-4xl min-w-80 shadow-md rounded-md border border-solid light:border-gray-200 dark:border-gray-500 overflow-hidden",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "m-auto text-center md:mt-8 text-4xl md:text-4xl font-extrabold rotating-hue",
                                    children: "Chat"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: useTtag0()
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1982:
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8906:
/***/ ((module) => {

module.exports = require("wagmi");

/***/ }),

/***/ 9770:
/***/ ((module) => {

module.exports = require("wagmi/providers/alchemy");

/***/ }),

/***/ 5538:
/***/ ((module) => {

module.exports = require("wagmi/providers/public");

/***/ }),

/***/ 6921:
/***/ ((module) => {

module.exports = import("@rainbow-me/rainbowkit");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5656));
module.exports = __webpack_exports__;

})();