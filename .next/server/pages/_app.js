"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4556:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6921);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__]);
_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const ConnectWallet = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__.ConnectButton, {});
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectWallet);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2155:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9035);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_switch__WEBPACK_IMPORTED_MODULE_2__]);
_switch__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



/**
 * Button to toggle dark/light mode.
 */ const DarkModeToggle = ()=>{
    const { theme , systemTheme , setTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_1__.useTheme)() // next-themes hook to enable dark mode
    ;
    /**
   * Fetches the next theme that would be toggled to
   * @returns 'dark' or 'light'
   */ const getNextTheme = ()=>{
        if (theme === "system") {
            return systemTheme === "light" ? "dark" : "light";
        } else {
            return theme === "light" ? "dark" : "light";
        }
    };
    /**
   * Performs the actual toggle
   */ const handleThemeChange = ()=>{
        setTheme(getNextTheme());
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_switch__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        onClick: handleThemeChange
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DarkModeToggle);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 201:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _darkModeToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2155);
/* harmony import */ var _connectWallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4556);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_darkModeToggle__WEBPACK_IMPORTED_MODULE_1__, _connectWallet__WEBPACK_IMPORTED_MODULE_2__]);
([_darkModeToggle__WEBPACK_IMPORTED_MODULE_1__, _connectWallet__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




/**
 * Navigation bar that enables connect/disconnect from Web3.
 */ const Navbar = ({ isDarkModeToggleVisible =false , displayConnectButton =true  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
        className: "flex justify-between w-full py-8",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "ml-1 transition duration-200 transform hover:rotate-20",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    href: "/",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {})
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center space-x-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_darkModeToggle__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
                    isDarkModeToggleVisible && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_darkModeToggle__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
                    displayConnectButton && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_connectWallet__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9035:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* This example requires Tailwind CSS v2.0+ */ 


function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
const Toggle = ({ onClick  })=>{
    const { 0: enabled , 1: setEnabled  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleChange = (e)=>{
        setEnabled(e);
        onClick();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Switch, {
        checked: enabled,
        onChange: handleChange,
        className: classNames(enabled ? "bg-indigo-600" : "bg-gray-200", "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200"),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "sr-only",
                children: "Use setting"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: classNames(enabled ? "translate-x-5" : "translate-x-0", "pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: classNames(enabled ? "opacity-0 ease-out duration-100" : "opacity-100 ease-in duration-200", "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"),
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                fontSize: "8px"
                            },
                            className: "text-xs text-blue-700 uppercase",
                            children: "GN"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: classNames(enabled ? "opacity-100 ease-in duration-200" : "opacity-0 ease-out duration-100", "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"),
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                fontSize: "8px"
                            },
                            className: "text-xs text-blue-700 uppercase",
                            children: "GM"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Toggle);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

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
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(201);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(911);
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9271);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8891);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2651);
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Select__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8611);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8185);
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_Switch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3191);
/* harmony import */ var _mui_material_Switch__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Switch__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4904);
/* harmony import */ var _mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1176);
/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6921);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _config_env_vars__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(8344);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_21__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_navbar__WEBPACK_IMPORTED_MODULE_2__, _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_18__]);
([_components_navbar__WEBPACK_IMPORTED_MODULE_2__, _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

























const { NEXT_PUBLIC_ALCHEMY_ID , NEXT_PUBLIC_INFURA_ID , NEXT_PUBLIC_ETHERSCAN_API_KEY  } = _config_env_vars__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z;
const alchemyId = (/* unused pure expression or super */ null && (NEXT_PUBLIC_ALCHEMY_ID));
const etherscanApiKey = (/* unused pure expression or super */ null && (NEXT_PUBLIC_ETHERSCAN_API_KEY));
const FTMChain = {
    id: 250,
    name: "Fantom",
    network: "fantom",
    iconUrl: "https://cryptologos.cc/logos/fantom-ftm-logo.svg?v=023",
    iconBackground: "#fff",
    nativeCurrency: {
        decimals: 18,
        name: "Fantom",
        symbol: "FTM"
    },
    rpcUrls: {
        default: "https://api.avax.network/ext/bc/C/rpc"
    },
    blockExplorers: {
        default: {
            name: "SnowTrace",
            url: "https://snowtrace.io"
        },
        etherscan: {
            name: "SnowTrace",
            url: "https://snowtrace.io"
        }
    },
    testnet: false
};
const { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_19__.configureChains)([
    FTMChain
], [
    (0,wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_17__.jsonRpcProvider)({
        rpc: (FTMChain)=>({
                http: `https://rpc.ftm.tools/`
            })
    })
]);
const { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_18__.getDefaultWallets)({
    appName: "the Wall",
    chains
});
const wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_19__.createClient)({
    autoConnect: true,
    connectors,
    provider
});
// MetaMask requires requesting permission to connect users accounts
// The MetaMask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
const signerw = wagmiClient.provider;
const signer = wagmiClient.provider;
// The MetaMask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
let contractaddrs = "0x0947ef8Bf078b8201013c77C39b5f0A5Bb8f58EC";
let createaddrs = "0xBE153Eb48062ba3892C10389844643d37cedA639";
let tokenaddrs = "0x42b54830bcbb0a240aa54cd3f8d1a4db00851fe3";
//const contractaddrs = "0x91fc82f5c588c00985aa264fc7b45ee680110703";
//if (signerw._network.chainId == 137){
//  contractaddrs = "0x91fc82f5c588c00985aa264fc7b45ee680110703";}//
//  else if (signerw._network.chainId == 42161){
//    contractaddrs = "0x4766d8244d68874ed6499F085e194be3dC4152AA";
//}
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
    "event newWall(address,string)",
    "function balanceOf(address) view returns (uint256)",
    "function createWall(string _name,string _symbol,uint256 _price,uint8 _canMod,uint8 _canChange) returns (address)", 
];
//format addresses in ui
function format_address(address) {
    const new_address = address.substring(0, 5) + "..." + address.slice(-3);
    return new_address;
}
let addrs = [];
//if (first_router === 0) {
//  console.log(router.pathname);
//  console.log(router.query); 
//  console.log(router) 
//  if (router.query && router.query.new_nft_address) {
//     console.log('in router')
let ut = 0;
let contracturl = "";
// @ts-ignore
let balances = [] // @ts-ignore
;
let balancestoken = [] // @ts-ignore
;
function useT1() {
    const { 0: wallT , 1: setwallT  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // update the ui elements
        update();
        async function update() {
            if (ut == 0 && contractaddrs != "0x4989314F8cb5b382FEdB339bdF9604fF1fbfdC79") {
                contracturl = "https://tagthewall.org/" + contractaddrs;
                setwallT("Welcome to " + await Contract.name());
                ut = 1;
            }
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "m-auto text-center md:mt-8 text-2xl md:text-4xl font-extrabold rotating-hue",
                children: wallT
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "m-auto text-center",
                style: {
                    color: "#4f86f7"
                },
                children: contracturl
            })
        ]
    });
} //      contractaddrs = (router.query.new_nft_address);
function useTtag0() {
    const { 0: tag , 1: setTag  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("LOL");
    const { 0: artist , 1: setArtist  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("LOL");
    const { 0: time , 1: setTime  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: sup , 1: setSup  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(2);
    // let addrs = []
    const { 0: wallT , 1: setwallT  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: symbol , 1: setSymbol  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("LOL");
    let addrst = 0;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_16__.useRouter)();
    const { walladdrs  } = router.query;
    if (walladdrs != null && addrst == 0) {
        // @ts-ignore
        contractaddrs = walladdrs;
        Contract = new ethers__WEBPACK_IMPORTED_MODULE_21__.ethers.Contract(contractaddrs, Abi, signerw);
        Contract = new ethers__WEBPACK_IMPORTED_MODULE_21__.ethers.Contract(contractaddrs, Abi, signer);
        addrst = 1;
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // update the ui elements
        async function updateUIStates() {
            const provider2 = new ethers__WEBPACK_IMPORTED_MODULE_21__.ethers.providers.JsonRpcProvider("https://rpc.ftm.tools/");
            // await provider2.send("eth_requestAccounts", []);
            //const signer = provider2.getSigner()connect(signer).
            Contract = new ethers__WEBPACK_IMPORTED_MODULE_21__.ethers.Contract(contractaddrs, Abi, signer);
            const [tagS, artistS, timeS] = await Contract.latest(await Contract.totalSupply());
            if (wallT == "LOL") {
                setwallT(await Contract.name() + "LOLOL");
            }
            setTag(tagS);
            setArtist(artistS);
            setTime(timeS);
            const provider3 = new ethers__WEBPACK_IMPORTED_MODULE_21__.ethers.providers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/Z-ifXLmZ9T3-nfXiA0B8wp5ZUPXTkWlg");
            for(let n = 0; n < sup; n++){
                if (addrs[artistS[n]] == null) {
                    let tn = await provider3.lookupAddress(artistS[n]);
                    // @ts-ignore
                    if (balances[artistS[n]] == null) {
                        try {
                            balances[artistS[n]] = Number(await Contract.balanceOf(artistS[n]));
                            balancestoken[artistS[n]] = Number(await Token.balanceOf(artistS[n]) / 10 ** 18 //}
                            );
                        } catch  {}
                    }
                    if (tn != null) {
                        addrs[artistS[n]] = tn;
                    } else {
                        addrs[artistS[n]] = artistS[n];
                    }
                }
            }
            let s = await Contract.totalSupply();
            s = ethers__WEBPACK_IMPORTED_MODULE_21__.ethers.utils.formatUnits(s, 0);
            setSup(s);
        }
        // fix for updatix1ng after wallet login
        //updateUIStates();
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
            if (addrs[artists[n]] == null) {
                artists[n] = artist[n];
            } else {
                // @ts-ignore
                artists[n] = addrs[artists[n]];
            } //artist[n]
            //  artists = nm
            times[n] = time[n];
            //ts[n] = ethers.utils.formatUnits(time[0]);
            // times[n] = ethers.utils.formatUnits(ts[n],0);
            if (tags[n] != "") {
                let t2 = "https://etherscan.io/address/" + artist[n];
                // @ts-ignore
                t0[n] = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                            className: "text-1xl text-center font-bold justify-center light:text-gray-800 ",
                            children: [
                                " ",
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
                                    href: t2,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "rotating-hue",
                                    style: {
                                        color: "#4f86f7"
                                    },
                                    children: artists[n]
                                }),
                                " ★",
                                balances[artist[n]],
                                " \uD83E\uDDF1",
                                balancestoken[artist[n]]
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
//let Contract = new ethers.Contract(contractaddrs, Abi, signerw);
let Contract = new ethers__WEBPACK_IMPORTED_MODULE_21__.ethers.Contract(contractaddrs, Abi, signer);
let Token = new ethers__WEBPACK_IMPORTED_MODULE_21__.ethers.Contract(tokenaddrs, Abi, signerw);
//const Contract = new ethers.Contract(contractaddrs, Abi, signerw);
const CreateWall = new ethers__WEBPACK_IMPORTED_MODULE_21__.ethers.Contract(createaddrs, Abi, signerw);
const App = ({ Component , pageProps  })=>{
    function handleChangeMessage(event) {
        const values = event.target.value;
        setSendMessage(values);
    }
    function handleChangeWall(event) {
        const values = event.target.value;
        setWall(values);
        window.location.replace("./" + "?walladdrs=" + values);
    }
    function handleChangeName(event) {
        const values = event.target.value;
        set_name(values);
    }
    function handleChangeSymbol(event) {
        const values = event.target.value;
        set_symbol(values);
    }
    function handleChangeedit(event) {
        if (_edit == 0) {
            set_edit(1);
        } else {
            set_edit(0);
        }
    }
    function handleChangeMod(event) {
        if (_mod == 0) {
            set_mod(1);
        } else {
            set_mod(0);
        }
    }
    //notify
    const { 0: sendMessage , 1: setSendMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: _name , 1: set_name  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("LOL");
    const { 0: _symbol , 1: set_symbol  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("LOL");
    const { 0: _edit , 1: set_edit  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: _mod , 1: set_mod  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: unlocktext , 1: set_unlocktext  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Please Unlock Wallet");
    // notify function call
    // await // MetaMask requires requesting permission to connect users accounts
    const handleOpen = ()=>{
        setOpen(true);
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: wallAddrs , 1: setWall  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("0x91fc82f5c588c00985aa264fc7b45ee680110703");
    const createWallT = async ()=>{
        // A Web3Provider wraps a standard Web3 provider, which is
        // what MetaMask injects as window.ethereum into each page
        const provider2 = new ethers__WEBPACK_IMPORTED_MODULE_21__.ethers.providers.Web3Provider(window.ethereum);
        // Setup
        await provider2.send("eth_requestAccounts", []);
        try {
            (next_router__WEBPACK_IMPORTED_MODULE_16___default().pathname);
            // await provider2.send("eth_requestAccounts", []);// await // MetaMask requires requesting permission to connect users accountsSS
            const signer = provider2.getSigner();
            let myAddress = await signer.getAddress();
            await CreateWall.connect(signer).createWall(_name, _symbol, 0, _mod, _edit) ////signer._address, sendMessage)
            ;
            CreateWall.on("newWall", (address, name)=>{
                setTimeout(()=>{
                    window.location.replace("./" + "?walladdrs=" + address);
                }, 3000);
            });
        } catch (e) {
            console.log("LOL");
        // addToast({body: e.message, type: "error"});
        }
    }; //}// @ts-ignore
    // const sendTip = async (toAddrs, amount) => {// @ts-ignore
    // A Web3Provider wraps a standard Web3 provider, which is
    // what MetaMask injects as window.ethereum into each page
    //   const provider2 = new ethers.providers.Web3Provider(window.ethereum)
    // Setup
    //   const Token = new ethers.Contract(tokenaddrs, Abi, signerw);
    //    await provider2.send("eth_requestAccounts", []);
    //    try {
    //      const signer = provider2.getSigner()
    //      let myAddress = await signer.getAddress()
    //      await Token.connect(signer).transfer(toAddrs, amount)////signer._address, sendMessage)
    //    } catch (e) {
    //      console.log("LOL")
    //      // addToast({body: e.message, type: "error"});
    //    }
    //  };
    //CreateWall.on("newWall", (address, name) => {
    //  window.location.replace('./' + '?walladdrs=' + address)
    //);
    const callTag = async ()=>{
        // A Web3Provider wraps a standard Web3 provider, which is
        // what MetaMask injects as window.ethereum into each page
        const provider2 = new ethers__WEBPACK_IMPORTED_MODULE_21__.ethers.providers.Web3Provider(window.ethereum);
        const provider3 = new ethers__WEBPACK_IMPORTED_MODULE_21__.ethers.providers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/Z-ifXLmZ9T3-nfXiA0B8wp5ZUPXTkWlg");
        // Setup
        //const settings = {
        //  apiKey: "ku_puX-vIFhnbZnC3xmpdT3jUico70LY",
        //  network: Network.MATIC_MAINNET,
        //};
        await provider2.send("eth_requestAccounts", []);
        try {
            // await provider2.send("eth_requestAccounts", []);// await // MetaMask requires requesting permission to connect users accountsSS
            const signer = provider2.getSigner();
            let myAddress = await signer.getAddress();
            Contract = new ethers__WEBPACK_IMPORTED_MODULE_21__.ethers.Contract(contractaddrs, Abi, signer);
            await Contract.connect(signer).mint(myAddress, sendMessage) ////signer._address, sendMessage)
            ;
        } catch (e) {
            console.log("LOL");
        // addToast({body: e.message, type: "error"});
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_themes__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {
        attribute: "class",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "m-auto bg-white dark:bg-gray-900 dark:text-white",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(wagmi__WEBPACK_IMPORTED_MODULE_19__.WagmiConfig, {
                client: wagmiClient,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_18__.RainbowKitProvider, {
                    chains: chains,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
                            sx: {
                                flexGrow: 1
                            },
                            className: "left-6 top-10 m-auto",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_15___default()), {
                                container: true,
                                spacing: 1,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_15___default()), {
                                        xs: 2,
                                        className: "left-6 top-10 m-auto",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                    id: "demo-simple-select-label",
                                                    children: "Choose wall"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Select__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                    labelId: "select-label",
                                                    id: "simple-select",
                                                    value: contractaddrs,
                                                    label: "Choose wall",
                                                    onChange: handleChangeWall,
                                                    className: "left-6 m-auto w-40 mt-6 md:mt-2 px-4 xs:px-0 items-center",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                        value: "0x0947ef8Bf078b8201013c77C39b5f0A5Bb8f58EC",
                                                        children: "Main"
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_15___default()), {
                                        xs: 2,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            onClick: handleOpen,
                                            variant: "outlined",
                                            className: "left-6 top-10",
                                            children: "Create wall"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_15___default()), {
                                        xs: 8,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                            ...pageProps
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_10___default()), {
                            open: open,
                            onClose: handleClose,
                            "aria-labelledby": "modal-modal-title",
                            "aria-describedby": "modal-modal-description",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col space-y-2 justify-center mt-6 md:mt-2 px-4 xs:px-0 m-auto",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                                        id: "modal-modal-title",
                                        variant: "h6",
                                        component: "h2",
                                        className: "m-auto text-center w-3/4 font-bold justify-center rounded-md dark:text-black ",
                                        children: "Create your own wall!"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                                        id: "modal-modal-description",
                                        sx: {
                                            mt: 2
                                        },
                                        className: "m-auto text-center w-3/4 justify-center rounded-mdlight:text-gray-800 dark:text-black",
                                        children: "You can create your own immutable community here."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "text-1xl text-center font-bold justify-center light:text-gray-800",
                                        children: "Wall name"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_11___default()), {
                                        className: "m-auto text-center w-3/4 justify-center rounded-mdlight:text-gray-800 dark:text-black",
                                        onChange: (e)=>handleChangeName(e)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "text-1xl text-center font-bold justify-center light:text-gray-800",
                                        children: "Wall symbol"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_11___default()), {
                                        className: "m-auto text-center w-3/4 justify-center light:text-gray-800 dark:text-black",
                                        onChange: (e)=>handleChangeSymbol(e)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_13___default()), {
                                        control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Switch__WEBPACK_IMPORTED_MODULE_14___default()), {
                                            onChange: handleChangeMod
                                        }),
                                        label: "Mods can delete messages"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_13___default()), {
                                        control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Switch__WEBPACK_IMPORTED_MODULE_14___default()), {
                                            onChange: handleChangeedit
                                        }),
                                        label: "Users can edit messages"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        style: {
                                            background: "#00ffff"
                                        },
                                        className: "btn w-6/12 m-auto rounded-md border border-solid light:border-black dark:border-black light:text-gray-800 dark:text-black",
                                        type: "button",
                                        onClick: createWallT,
                                        children: " Create Wall"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col space-y-2 justify-center mt-6 md:mt-2 px-4 xs:px-0 m-auto max-w-4xl min-w-80 shadow-md rounded-md border border-solid light:border-gray-200 dark:border-gray-500 overflow-hidden",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: useT1()
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "m-auto text-center md:mt-8 text-2xl md:text-4xl font-extrabold rotating-hue",
                                    children: "Tag the Wall!"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "text-1xl text-center font-bold justify-center light:text-gray-800",
                                    children: "Send your message here"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                    className: "m-auto text-center w-3/4 justify-center rounded-md border border-solid light:border-gray-200 dark:border-gray-500 light:text-gray-800 dark:text-black",
                                    onChange: (e)=>handleChangeMessage(e)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    style: {
                                        background: "#00ffff"
                                    },
                                    className: "btn w-6/12 m-auto rounded-md border border-solid light:border-black dark:border-black light:text-gray-800 dark:text-black",
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
                                    className: "m-auto text-center w-3/4",
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

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 8611:
/***/ ((module) => {

module.exports = require("@mui/material/Dialog");

/***/ }),

/***/ 8891:
/***/ ((module) => {

module.exports = require("@mui/material/FormControl");

/***/ }),

/***/ 8185:
/***/ ((module) => {

module.exports = require("@mui/material/FormControlLabel");

/***/ }),

/***/ 911:
/***/ ((module) => {

module.exports = require("@mui/material/InputLabel");

/***/ }),

/***/ 9271:
/***/ ((module) => {

module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ 2651:
/***/ ((module) => {

module.exports = require("@mui/material/Select");

/***/ }),

/***/ 3191:
/***/ ((module) => {

module.exports = require("@mui/material/Switch");

/***/ }),

/***/ 6042:
/***/ ((module) => {

module.exports = require("@mui/material/TextField");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 4904:
/***/ ((module) => {

module.exports = require("@mui/material/Unstable_Grid2");

/***/ }),

/***/ 1982:
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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

/***/ 1176:
/***/ ((module) => {

module.exports = require("wagmi/providers/jsonRpc");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

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
var __webpack_exports__ = __webpack_require__.X(0, [377,952,964,664], () => (__webpack_exec__(5656)));
module.exports = __webpack_exports__;

})();