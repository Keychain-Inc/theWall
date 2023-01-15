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

/***/ 9041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ network)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "wagmi"
var external_wagmi_ = __webpack_require__(8906);
;// CONCATENATED MODULE: external "@mui/material/MenuItem"
const MenuItem_namespaceObject = require("@mui/material/MenuItem");
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./config/network.tsx




const FTMC = {
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
        default: "https://rpc.ftm.tools" //'https://rpc.ftm.tools/',
    },
    blockExplorers: {
        default: {
            name: "FTM",
            url: "	https://ftmscan.com/"
        }
    },
    testnet: false
};
const FTMRPC = "https://rpc.ftm.tools/";
const FTMA = "0x0947ef8Bf078b8201013c77C39b5f0A5Bb8f58EC";
const FTMN = "0xBE153Eb48062ba3892C10389844643d37cedA639";
const FTMM = /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
    value: "0x0947ef8Bf078b8201013c77C39b5f0A5Bb8f58EC",
    children: "Main"
});
const BSCC = {
    id: 56,
    name: "Binance Chain",
    network: "BSC",
    iconUrl: "https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=023",
    iconBackground: "#fff",
    nativeCurrency: {
        decimals: 18,
        name: "BSC",
        symbol: "BNB"
    },
    rpcUrls: {
        default: "https://bsc-dataseed.binance.org/" //'https://rpc.ftm.tools/',
    },
    blockExplorers: {
        default: {
            name: "B",
            url: "	https://bscscan.com/"
        }
    },
    testnet: false
};
const BSCRPC = "https://bsc-dataseed.binance.org/";
const BSCA = "0x18C519E0dA619d017908aFf504e782E381552620";
const BSCN = "0xB8112446078378f0998FBf834D4683B6C8Ac08C7";
const BSCM = [
    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
        value: "0x18C519E0dA619d017908aFf504e782E381552620",
        children: "Main"
    })
];
const PolyM = [
    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
        value: "0xD70deA1a28CbaC32ab1B7531DB30d6a178671837",
        children: "Main"
    }),
    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
        value: "0x3783b8DAf1B14d8e556ec1C681CEB0056157e810",
        children: "Sub Wall"
    }), 
];
const PolyC = external_wagmi_.chain.polygon;
const PolyRPC = "https://polygon-rpc.com";
const PolyA = "0xD70deA1a28CbaC32ab1B7531DB30d6a178671837";
const PolyN = "0x99029716DEeE316894DC8ce4f55Ab066222AACe6";
const envVars = {
    chainn: PolyC,
    rpc: PolyRPC,
    createn: PolyN,
    contractn: PolyA,
    menun: PolyM
};
/* harmony default export */ const network = (envVars);


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
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8891);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2651);
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Select__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8167);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_9__);
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
/* harmony import */ var alchemy_sdk__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3796);
/* harmony import */ var alchemy_sdk__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(alchemy_sdk__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6921);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _config_env_vars__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(8344);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _config_network__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(9041);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(6201);
/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(1176);
/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_24__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_navbar__WEBPACK_IMPORTED_MODULE_2__, _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_18__, react_hot_toast__WEBPACK_IMPORTED_MODULE_23__]);
([_components_navbar__WEBPACK_IMPORTED_MODULE_2__, _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_18__, react_hot_toast__WEBPACK_IMPORTED_MODULE_23__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
//@ts-nocheck

























const { NEXT_PUBLIC_ALCHEMY_ID , NEXT_PUBLIC_INFURA_ID , NEXT_PUBLIC_ETHERSCAN_API_KEY  } = _config_env_vars__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z;




const { chainn , rpc , createn , contractn , menun  } = _config_network__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z;
const alchemyId = (/* unused pure expression or super */ null && (NEXT_PUBLIC_ALCHEMY_ID));
const etherscanApiKey = (/* unused pure expression or super */ null && (NEXT_PUBLIC_ETHERSCAN_API_KEY));
const { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_19__.configureChains)([
    chainn
], [
    (0,wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_24__.jsonRpcProvider)({
        rpc: (chainn)=>({
                http: rpc
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
// The MetaMask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
let contractaddrs = contractn;
let createaddrs = createn;
let tokenaddrs = "0x7b67595bbfc2c900e1a66a35ab35e762765e062d";
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
    "function subs() view returns (uint256)",
    "function subWall() view returns (uint8)",
    "function price() view returns (uint256)",
    "function getTag(uint256 id) view returns (string)",
    "function latest(uint256) view returns (string[] tags,address[] addrs,uint256[] times)",
    "function mint2(address to, string _tag) payable",
    "function mint(address to, string _tag)",
    "function latest(uint256 last) view returns (string[] memory,address[] memory,uint256[] memory)",
    "event newWall(address,string)",
    "function balanceOf(address) view returns (uint256)",
    "function createWall(string _name,string _symbol,uint256 _price,uint8 _canMod,uint8 _canChange, uint8 sub) returns (address)",
    "function mintandrenewSub(address to) payable"
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
let loaded = 0;
let subWall = 0;
let checkS = 0;
function useT1() {
    const { 0: wallT , 1: setwallT  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // update the ui elements/
        update();
        async function update() {
            if (ut == 0 && contractaddrs != contractn) {
                contracturl = window.location.origin.toString() + "/?walladdrs=" + contractaddrs;
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
    const { 0: tag , 1: setTag  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("L");
    const { 0: artist , 1: setArtist  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("L");
    const { 0: time , 1: setTime  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: sup , 1: setSup  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    // let addrs = []
    const { 0: wallT , 1: setwallT  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: symbol , 1: setSymbol  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("L");
    let addrst = 0;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_16__.useRouter)();
    const { walladdrs  } = router.query;
    // State to keep track of whether the dialog is open
    const { 0: isDialogOpen , 1: setIsDialogOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // State to keep track of which image is currently open in the dialog
    const { 0: currentImage , 1: setCurrentImage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    if (walladdrs != null && addrst == 0) {
        // @ts-ignore
        contractaddrs = walladdrs;
        Contract = new ethers__WEBPACK_IMPORTED_MODULE_21__.ethers.Contract(contractaddrs, Abi, signerw);
        addrst = 1;
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // update the ui elements
        async function updateUIStates() {
            try {
                if (checkS == 0) {
                    (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_23__["default"])("Loading wall. Please Connect Wallet.");
                    subWall = await Contract.subWall();
                    checkS = 1;
                }
                if (loaded == 0) {
                    if (subWall == 0) {
                        (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_23__["default"])("Loading wall");
                    } else {
                        (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_23__["default"])("Loading wall. Please Connect Wallet.");
                    }
                }
                const provider2 = new ethers__WEBPACK_IMPORTED_MODULE_21__.ethers.providers.Web3Provider(window.ethereum);
                let pro2 = await provider2.send("eth_requestAccounts", []);
                // Setup
                if ((await provider2.getNetwork()).chainId != chainn.id) {
                    react_hot_toast__WEBPACK_IMPORTED_MODULE_23__["default"].error("Wrong Network. Please switch networks");
                }
                Contract = new ethers__WEBPACK_IMPORTED_MODULE_21__.ethers.Contract(contractaddrs, Abi, provider2);
                if (subWall == 1) {
                    let s = await Contract.totalSupply() - await Contract.subs();
                    s = ethers__WEBPACK_IMPORTED_MODULE_21__.ethers.utils.formatUnits(s, 0);
                    setSup(s);
                } else {
                    let s1 = await Contract.totalSupply();
                    s1 = ethers__WEBPACK_IMPORTED_MODULE_21__.ethers.utils.formatUnits(s1, 0);
                    setSup(s1);
                }
                const [tagS, artistS, timeS] = await Contract.latest(sup, {
                    from: await provider2.getSigner().getAddress()
                });
                console.log(await Contract.latest(sup, {
                    from: await provider2.getSigner().getAddress()
                }));
                if (wallT == "LOL") {
                    setwallT(await Contract.name() + "LOLOL");
                }
                setTag(tagS);
                setArtist(artistS);
                setTime(timeS);
                const provider3 = new ethers__WEBPACK_IMPORTED_MODULE_21__.ethers.providers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/Z-ifXLmZ9T3-nfXiA0B8wp5ZUPXTkWlg");
                const provider4 = new ethers__WEBPACK_IMPORTED_MODULE_21__.ethers.providers.JsonRpcProvider("https://polygon-rpc.com");
                for(let T = 0; T < sup; n++){
                    let n1 = T;
                    if (subWall == 1) {
                        n1 = T + 1;
                    }
                    if (addrs[artistS[n1]] == null) {
                        let tn = await provider3.lookupAddress(artistS[n1]);
                        // @ts-ignore
                        if (balances[artistS[n1]] == null) {
                            try {
                                balances[artistS[n1]] = Number(await Contract.balanceOf(artistS[n1]));
                                balancestoken[artistS[n1]] = Number(await Token.connect(provider4).balanceOf(artistS[n1]) / 10 ** 18 //}
                                );
                            } catch  {}
                        }
                        if (tn != null) {
                            addrs[artistS[n1]] = tn;
                        } else {
                            addrs[artistS[n1]] = artistS[n1];
                        }
                    }
                    if (loaded == 0 && tag[1] != "") {
                        loaded = 1;
                        react_hot_toast__WEBPACK_IMPORTED_MODULE_23__["default"].success("Successfully loaded wall!");
                    }
                }
            } catch (error) {}
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
        for(let n1 = 0; n1 < sup; n1++){
            if (subWall == 1) {
                tags[n1] = tag[n1 + 1];
                console.log(tag[n1 + 1]);
                artists[n1] = artist[n1 + 1];
            } else {
                tags[n1] = tag[n1];
                console.log(tag[n1]);
                artists[n1] = artist[n1];
            }
            if (addrs[artists[n1]] == null) {
                artists[n1] = artist[n1];
            } else {
                // @ts-ignore
                artists[n1] = addrs[artists[n1]];
            } //artist[n]
            //  artists = nm
            times[n1] = Number(time[n1]);
            // @ts-ignore
            let TT = new Date(times[n1] * 1000).toLocaleString();
            times[n1] = String(TT);
            console.log(n1);
            console.log(tag[n1]);
            const MyComponent = ({ message  })=>{
                // Extract all of the URLs from the message
                let urls = [];
                try {
                    urls = message.match(/(https?:\/\/[^\s]+\.(?:png|jpg|jpeg|gif)|ipfs:\/\/[^\s]+|\/ipfs\/[^\s]+)/gi) || [];
                } catch (e) {
                    console.log("Error: ", e.message);
                // addToast({body: e.message, type: "error"});
                }
                // Function to open the dialog when an image is clicked
                const handleOpenDialog = (image)=>{
                    setIsDialogOpen(true);
                    setCurrentImage(image);
                };
                // Function to close the dialog
                const handleCloseDialog = ()=>{
                    setIsDialogOpen(false);
                    setCurrentImage(null);
                };
                console.log(urls);
                // Map over the array of URLs and return an img element for each
                // @ts-ignore
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                                gridGap: "10px",
                                alignItems: "center",
                                justifyContent: "center"
                            },
                            children: urls.map((url, index)=>{
                                let src = url;
                                // Check if the URL is an IPFS link
                                if (url.startsWith("/ipfs/") || url.startsWith("ipfs://")) {
                                    // Resolve the IPFS link using an IPFS gateway
                                    src = `https://cloudflare-ipfs.com/ipfs/${url.replace("ipfs://", "/").replace("/ipfs/", "/")}`;
                                }
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: src,
                                        alt: `Image ${index + 1}`,
                                        onClick: ()=>handleOpenDialog(src),
                                        style: {
                                            width: "400px",
                                            cursor: "pointer"
                                        }
                                    })
                                }, index);
                            })
                        }),
                        isDialogOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                position: "fixed",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: "rgba(0, 0, 0, 0.8)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    background: "white",
                                    maxWidth: "90%",
                                    maxHeight: "90%",
                                    overflow: "auto",
                                    padding: "10px"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: currentImage,
                                        alt: "Large image",
                                        onClick: handleCloseDialog,
                                        style: {
                                            maxWidth: "100%"
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: handleCloseDialog,
                                        style: {
                                            position: "absolute",
                                            top: "10px",
                                            right: "10px",
                                            color: "white"
                                        },
                                        children: "X"
                                    })
                                ]
                            })
                        })
                    ]
                });
            };
            //ts[n] = ethers.utils.formatUnits(time[0]);
            // times[n] = ethers.utils.formatUnits(ts[n],0);
            if (tags[n1] != "") {
                let t2 = "https://etherscan.io/address/" + artist[n1];
                // @ts-ignore
                t0[n1] = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
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
                                        sup - n1
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
                                    children: artists[n1]
                                }),
                                " ★",
                                balances[artist[n1]],
                                " \uD83E\uDDF1",
                                balancestoken[artist[n1]]
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-center light:text-white-600",
                            children: tags[n1]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MyComponent, {
                            message: tags[n1]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            style: {
                                color: "#cccccc"
                            },
                            className: "text-1xl text-centerjustify-center ",
                            children: times[n1]
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
let Contract = new ethers__WEBPACK_IMPORTED_MODULE_21__.ethers.Contract(contractaddrs, Abi, signerw);
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
    function handleChangeS(event) {
        const values = event.target.value;
        set_s(values);
    }
    function handleChangePrice(event) {
        const values = event.target.value;
        set_Price(values);
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
    function handleChangeSub(event) {
        if (_Sub == 0) {
            set_Sub(1);
        } else {
            set_Sub(0);
        }
    }
    function subt() {
        // if (subWall != 1) {
        //   return null;
        //}
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
            onClick: handleOpenSub,
            children: "Subscribe"
        });
    }
    //notify
    const { 0: sendMessage , 1: setSendMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: _name , 1: set_name  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("LOL");
    const { 0: _Sub , 1: set_Sub  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: _symbol , 1: set_symbol  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("LOL");
    const { 0: _s , 1: set_s  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("LOL");
    const { 0: _Price , 1: set_Price  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("0");
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
    const handleOpenA = ()=>{
        setOpenA(true);
    };
    const handleCloseA = ()=>{
        setOpenA(false);
    };
    const handleOpenSub = ()=>{
        setOpenSub(true);
    };
    const handleCloseSub = ()=>{
        setOpenSub(false);
    };
    const { 0: openBRK , 1: setOpenBRK  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleOpenBRK = ()=>{
        setOpenBRK(true);
    };
    const handleCloseBRK = ()=>{
        setOpenBRK(false);
    };
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: openA , 1: setOpenA  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: openSub , 1: setOpenSub  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: wallAddrs , 1: setWall  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("0x0947ef8Bf078b8201013c77C39b5f0A5Bb8f58EC");
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
            await CreateWall.connect(signer).createWall(_name, _symbol, _Price, _mod, _edit, _Sub) ////signer._address, sendMessage)
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
    const brkBuy = async ()=>{
        const provider2 = new ethers__WEBPACK_IMPORTED_MODULE_21__.ethers.providers.Web3Provider(window.ethereum);
        //d
        //signerw ethers.js .send("eth_requestAccounts", []);
        if ((await provider2.getNetwork()).chainId == 137) {
            window.location.replace("https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x7b67595bbfc2c900e1a66a35ab35e762765e062d");
        } else {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_23__["default"].error("Polygon Network");
            await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [
                    {
                        chainId: "0x89",
                        rpcUrls: [
                            "https://polygon-rpc.com"
                        ],
                        chainName: "Matic Mainnet",
                        nativeCurrency: {
                            name: "MATIC",
                            symbol: "MATIC",
                            decimals: 18
                        },
                        blockExplorerUrls: [
                            "https://polygonscan.com/"
                        ]
                    }
                ]
            });
            if ((await provider2.getNetwork()).chainId == 137) {
                window.location.replace("https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x7b67595bbfc2c900e1a66a35ab35e762765e062d");
            }
        }
    };
    // const sendTip = async (toAddrs, amount) => {// @ts-ignore
    const subWallT = async ()=>{
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
            await Contract.connect(signer).mintandrenewSub(myAddress, {
                value: "1000000000000000000"
            });
        // .then((transaction) => {
        //     console.log(`Transaction successful: ${transaction.hash}`);
        // })
        } catch (e) {
            console.log("LOL");
        // addToast({body: e.message, type: "error"});
        }
    }; //}// @ts-ignore
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
        const settings = {
            apiKey: "ku_puX-vIFhnbZnC3xmpdT3jUico70LY",
            network: alchemy_sdk__WEBPACK_IMPORTED_MODULE_17__.Network.MATIC_MAINNET
        };
        await provider2.send("eth_requestAccounts", []);
        try {
            // await provider2.send("eth_requestAccounts", []);// await // MetaMask requires requesting permission to connect users accountsSS
            const signer = provider2.getSigner();
            let myAddress = await signer.getAddress();
            if ((await provider2.getNetwork()).chainId != chainn.id) {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_23__["default"].error("Wrong Network. Please switch networks");
            } else {
                await Contract.connect(signer).mint(myAddress, sendMessage) ////signer._address, sendMessage)
                ;
            }
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
                                        className: "left-6 top-12 m-auto",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                    id: "demo-simple-select-label",
                                                    children: "Choose wall"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Select__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                    labelId: "select-label",
                                                    id: "simple-select",
                                                    value: contractaddrs,
                                                    label: "Choose wall",
                                                    onChange: handleChangeWall,
                                                    className: "left-6 m-auto w-40 mt-6 md:mt-2 px-4 xs:px-0 items-center",
                                                    children: menun
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_15___default()), {
                                        xs: 2,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                onClick: handleOpen,
                                                variant: "outlined",
                                                className: "left-6 top-6",
                                                children: "Create wall"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                onClick: handleOpenA,
                                                variant: "outlined",
                                                className: "left-12 top-7",
                                                children: "About"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_15___default()), {
                                        xs: 3,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_15___default()), {
                                            container: true,
                                            spacing: 0,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                    xs: 2,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "https://tagthewall.org/",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: "https://cryptologos.cc/logos/polygon-matic-logo.png?v=023",
                                                            style: {
                                                                width: 42
                                                            }
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                    xs: 2,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "https://FTM.tagthewall.org/",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: "https://cryptologos.cc/logos/fantom-ftm-logo.png?v=023",
                                                            style: {
                                                                width: 42
                                                            }
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                    xs: 2,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "https://BSC.tagthewall.org/",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: "https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=023",
                                                            style: {
                                                                width: 42
                                                            }
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                    xs: 2,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "https://ARB.tagthewall.org/",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: "https://bridge.arbitrum.io/static/media/ArbitrumOneLogo.abae01ba.svg",
                                                            style: {
                                                                width: 42
                                                            }
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Unstable_Grid2__WEBPACK_IMPORTED_MODULE_15___default()), {
                                        xs: 5,
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
                                className: "flex flex-col space-y-2 justify-center mt-6 md:mt-2 px-4 xs:px-0 items-center m-auto",
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
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "text-1xl text-center font-bold justify-center light:text-gray-800",
                                        children: "Price"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_11___default()), {
                                        className: "m-auto text-center w-3/4 justify-center light:text-gray-800 dark:text-black",
                                        onChange: (e)=>handleChangePrice(e)
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
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_13___default()), {
                                        control: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Switch__WEBPACK_IMPORTED_MODULE_14___default()), {
                                            onChange: handleChangeSub
                                        }),
                                        label: "Subscription wall"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        style: {
                                            background: "#00ffff"
                                        },
                                        className: "btn w-6/12 m-auto rounded-md border border-solid light:border-black dark:border-black light:text-gray-800 dark:text-black",
                                        type: "button",
                                        onClick: createWallT,
                                        children: " Create Wall"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_10___default()), {
                            open: openA,
                            onClose: handleCloseA,
                            "aria-labelledby": "modal-modal-title",
                            "aria-describedby": "modal-modal-description",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col space-y-2 justify-center mt-6 md:mt-2 px-4 xs:px-0 items-center m-auto",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                                            id: "modal-modal-title",
                                            variant: "h6",
                                            component: "h2",
                                            className: "m-auto text-center w-3/4 font-bold justify-center rounded-md dark:text-black ",
                                            children: "About the Wall"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "text-1xl text-center font-bold justify-center light:text-gray-800",
                                            children: "the Wall"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                                            id: "modal-modal-description",
                                            sx: {
                                                mt: 2
                                            },
                                            className: "m-auto text-center w-3/4 justify-center rounded-mdlight:text-gray-800 dark:text-black",
                                            children: "The wall is a fully onchain, decentralized and permissionless on chain Social Chat Platform. Messages posted to walls are messages wrapped as NFTs which hold the message, creator and timestamp for every message. This allow each wall to be fully self sovereign, with noone able to ban/censor/edit messages unless explicitly stated by that wall at creation by the creator. The wall is the first fully onchain social chat platform and allows for a truely free, decentralized and immutable platform for anyone, anywhere to express any idea. Information is power and we believe people should have free access to any and all information in order for society to be free, open and able to achieve its best."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                                            id: "modal-modal-description",
                                            sx: {
                                                mt: 2
                                            },
                                            className: "m-auto text-center w-3/4 justify-center rounded-mdlight:text-gray-800 dark:text-black",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "text-1xl text-center font-bold justify-center light:text-gray-800",
                                                    children: "NFTs as Messages"
                                                }),
                                                "Messages are wrapped as NFTs allowing us to attach metadata onchain to each NFT token, this allows anyone to create a front end to show this information for any wall without any central server. The message, timestamp and creator are all fully onchain, with the actual image for the NFT and URI metadata able to be handled offchain by IPFS, this is not yet implemented as we are in the beta. All messages are NFTs from a specific wall, this allows you to see who is most active by how many NFTs they own for the community, allowing you to reward members by participation."
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                                            id: "modal-modal-description",
                                            sx: {
                                                mt: 2
                                            },
                                            className: "m-auto text-center w-3/4 justify-center rounded-mdlight:text-gray-800 dark:text-black",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "text-1xl text-center font-bold justify-center light:text-gray-800",
                                                    children: "Moderation"
                                                }),
                                                "All NFTs are able to change their data only in the way set at the walls creation for that community. This allows for communities to choose their moderation style and policy or be fully decentralized. Wallls are able to be moderated by specific addresses, edit own messages or be immutable."
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                                            id: "modal-modal-description",
                                            sx: {
                                                mt: 2
                                            },
                                            className: "m-auto text-center w-3/4 justify-center rounded-mdlight:text-gray-800 dark:text-black",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "text-1xl text-center font-bold justify-center light:text-gray-800",
                                                    children: "Unique"
                                                }),
                                                "Walls are all unique and each wall has a name which cannot be shared by any other wall. Walls are fully onchain and decentralized, using the deployment contract to lookup which walls for which community by name allowing for a subreddit style UX. Users are able to also choose the symbol and set a bio for the walls, aswell as able to create their own walls!"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    style: {
                                        background: "#ff50a9",
                                        color: "white"
                                    },
                                    className: "btn w-6/12 m-auto rounded-md border border-solid light:border-black dark:border-black light:text-gray-800 dark:text-black",
                                    type: "button",
                                    onClick: handleCloseA,
                                    children: " Close"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_10___default()), {
                            open: openBRK,
                            onClose: handleCloseBRK,
                            "aria-labelledby": "modal-modal-title",
                            "aria-describedby": "modal-modal-description",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_9___default()), {
                                className: "flex flex-col space-y-2 justify-center mt-6 md:mt-2 px-4 xs:px-0 items-center m-auto",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                                        id: "modal-modal-title",
                                        variant: "h6",
                                        component: "h2",
                                        className: "m-auto text-center w-3/4 font-bold justify-center rounded-md dark:text-black ",
                                        children: "Brick Token (BRK)"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                                        id: "modal-modal-description",
                                        sx: {
                                            mt: 2
                                        },
                                        className: "m-auto text-center w-3/4 justify-center rounded-mdlight:text-gray-800 dark:text-black",
                                        children: "Bricks are the native token for the Wall! They are used to show reputation, used for tipping in the app, cosmetics coming soon, as well as a stake in the protocol through DAO control and Treasury control."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                                        id: "modal-modal-description",
                                        sx: {
                                            mt: 2
                                        },
                                        className: "m-auto text-center w-3/4 justify-center rounded-mdlight:text-gray-800 dark:text-black",
                                        children: "These tokens are on the Polygon network. Please make sure to switch from the network youre on to Polygon before Uniswap link as you may get the wrong token otherwise!.  "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                                        id: "modal-modal-description",
                                        sx: {
                                            mt: 2
                                        },
                                        className: "m-auto text-center w-3/4 justify-center rounded-mdlight:text-gray-800 dark:text-black",
                                        children: "The tokens are purchasable at 100 tokens for $1 and can be tipped or just used to flex on the Wall! They are primarily a tip token and used for cosmetics in the app. Please dont purchase for speculation. Purchases also help us keep building neat stuff like the Wall and are appreciated."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        style: {
                                            background: "#FF007A",
                                            color: "white"
                                        },
                                        className: "btn w-6/12 m-auto rounded-md border border-solid light:border-black dark:border-black light:text-gray-800 dark:text-black",
                                        type: "button",
                                        onClick: brkBuy,
                                        children: " Buy Bricks!"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_10___default()), {
                            open: openSub,
                            onClose: handleCloseSub,
                            "aria-labelledby": "modal-modal-title",
                            "aria-describedby": "modal-modal-description",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col space-y-2 justify-center mt-6 md:mt-2 px-4 xs:px-0 items-center m-auto",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                                        id: "modal-modal-title",
                                        variant: "h6",
                                        component: "h2",
                                        className: "m-auto text-center w-3/4 font-bold justify-center rounded-md dark:text-black ",
                                        children: "Purchase Sub"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {
                                        id: "modal-modal-description",
                                        sx: {
                                            mt: 2
                                        },
                                        className: "m-auto text-center w-3/4 justify-center rounded-mdlight:text-gray-800 dark:text-black",
                                        children: "Subscribe to the wall to view, chat"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "text-1xl text-center font-bold justify-center light:text-gray-800",
                                        children: "Purchase sub for 1 MATIC"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_11___default()), {
                                        className: "m-auto text-center w-3/4 justify-center rounded-mdlight:text-gray-800 dark:text-black",
                                        onChange: (e)=>handleChangeS(e)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        style: {
                                            background: "#00ffff"
                                        },
                                        className: "btn w-6/12 m-auto rounded-md border border-solid light:border-black dark:border-black light:text-gray-800 dark:text-black",
                                        type: "button",
                                        onClick: subWallT,
                                        children: " Subscribe"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
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
                                subt(),
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
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "btn fixed left-16 bottom-14 flex flex-col text-3xl",
                                    type: "button",
                                    onClick: handleOpenBRK,
                                    children: "\uD83E\uDDF1"
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

/***/ 8167:
/***/ ((module) => {

module.exports = require("@mui/material/Card");

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

/***/ 3796:
/***/ ((module) => {

module.exports = require("alchemy-sdk");

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

/***/ }),

/***/ 6201:
/***/ ((module) => {

module.exports = import("react-hot-toast");;

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