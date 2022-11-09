import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import '@rainbow-me/rainbowkit/styles.css'
import { useEffect, useState } from "react";
import abi from '../contracts/theWall.json'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Modal from '@mui/material/Modal'
import Snackbar from '@mui/material/Snackbar'
import Card from '@mui/material/Card'
import Dialog from '@mui/material/Dialog'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import DarkModeToggle from '../components/darkModeToggle';
import Router, { useRouter } from 'next/router'
import { Network, Alchemy } from 'alchemy-sdk';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { chain, configureChains, createClient, WagmiConfig, useContractWrite } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import config from '../config/env-vars'
import { BigNumber, ethers } from 'ethers'
import { RainbowKitChainProvider } from '@rainbow-me/rainbowkit/dist/components/RainbowKitProvider/RainbowKitChainContext'
import Home from '.';
import Custom from '.';
import AddressPill from '../components/addressPill';
import { ChangeEvent } from 'react';
const { NEXT_PUBLIC_ALCHEMY_ID, NEXT_PUBLIC_INFURA_ID, NEXT_PUBLIC_ETHERSCAN_API_KEY } = config
import net from '../config/network'
import toast, { Toaster } from 'react-hot-toast';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
const { chainn, rpc,createn,contractn,menun} = net
const alchemyId = NEXT_PUBLIC_ALCHEMY_ID
const etherscanApiKey = NEXT_PUBLIC_ETHERSCAN_API_KEY

const { chains, provider } = configureChains(
  [chainn],//, chain.arbitrum],//, //chain.optimism, chain.arbitrum, chain.localhost],
  [jsonRpcProvider({
    rpc: (chainn) => ({
      http: rpc,
    })})],//,// alchemyProvider({ apiKey: "l7DBx7tLlR-x_X8_3it8Jpr9u9yiqrn8" })],
)
const { connectors } = getDefaultWallets({
  appName: 'the Wall',
  chains,
})
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

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
function format_address(address: string) {
  const new_address = address.substring(0, 5) + '...' + address.slice(-3)
  return new_address;
}
let addrs: string[] = []

//if (first_router === 0) {
//  console.log(router.pathname);
//  console.log(router.query); 
//  console.log(router) 
//  if (router.query && router.query.new_nft_address) {
//     console.log('in router')
let ut = 0
let contracturl = ''
// @ts-ignore
let balances = []// @ts-ignore
let balancestoken = []// @ts-ignore
let loaded = 0
function useT1() {
  const [wallT, setwallT] = useState("");
  useEffect(() => {
    // update the ui elements/
    update()
    async function update() {
      if (ut == 0 && contractaddrs != contractn) {
        contracturl = 'https://tagthewall.org/?walladdrs=' + contractaddrs
        setwallT('Welcome to ' + await Contract.name())
        ut = 1;
      }
    }
  },); return (<><h1 className="m-auto text-center md:mt-8 text-2xl md:text-4xl font-extrabold rotating-hue" >{wallT}</h1><div className="m-auto text-center" style={{ color: '#4f86f7' }}>{contracturl}</div></>)
}//      contractaddrs = (router.query.new_nft_address);
function useTtag0() {

  const [tag, setTag] = useState("LOL");
  const [artist, setArtist] = useState("LOL");
  const [time, setTime] = useState("");
  const [sup, setSup] = useState(2);
  // let addrs = []
  const [wallT, setwallT] = useState("");
  const [symbol, setSymbol] = useState("LOL");
  let addrst = 0
  const router = useRouter()
  const { walladdrs } = router.query
  if (walladdrs != null && addrst == 0) {
    // @ts-ignore
    contractaddrs = walladdrs
    Contract = new ethers.Contract(contractaddrs, Abi, signerw);
    addrst = 1
  }

  useEffect(() => {
    // update the ui elements
    async function updateUIStates() {
      const [tagS, artistS, timeS] = await Contract.latest(await Contract.totalSupply());
      if (wallT == 'LOL') {
        setwallT(await Contract.name() + 'LOLOL')
      }
      setTag(tagS);
      setArtist(artistS);
      setTime(timeS);
      const provider3 = new ethers.providers.JsonRpcProvider('https://eth-mainnet.g.alchemy.com/v2/Z-ifXLmZ9T3-nfXiA0B8wp5ZUPXTkWlg')
      const provider4 = new ethers.providers.JsonRpcProvider('https://polygon-rpc.com')
      if (loaded == 0){
        toast('Loading wall')
      }
      for (let n = 0; n < sup; n++) {
        if (addrs[artistS[n]] == null) {
          let tn = await provider3.lookupAddress(artistS[n])
          // @ts-ignore
          if (balances[artistS[n]] == null) {
            try {
              balances[artistS[n]] = Number(await Contract.balanceOf(artistS[n]))
              balancestoken[artistS[n]] = Number(await Token.connect(provider4).balanceOf(artistS[n])/10**18  //}
              )
            }
            catch { }
          }

          if (tn != null) {
            addrs[artistS[n]] = tn
          }
          else {
            addrs[artistS[n]] = artistS[n]
          }
        }
      }
      let s = (await Contract.totalSupply());
      s = ethers.utils.formatUnits(s, 0);
      setSup(s)
      if (loaded == 0){
      toast.success('Successfully loaded wall!')
      loaded = 1
    }
    };
    // fix for updatix1ng after wallet login
    //updateUIStates();

    // schedule every 15 sec refresh
    const timer = setInterval(() => {

      updateUIStates()

    }, 3000);
    // clearing interval
    return () => clearInterval(timer);
  },);

  function tag1() {
    let tags = []
    let artists = []
    let times = []
    let t0 = []
    let ts = []
    let i = "";
    for (let n = 0; n < sup; n++) {
      tags[n] = tag[n]
      artists[n] = artist[n]
      if (addrs[artists[n]] == null) {
        artists[n] = artist[n]
      }
      else {
        // @ts-ignore
        artists[n] = addrs[artists[n]]
      }//artist[n]
      //  artists = nm
      times[n] = Number(time[n])
       // @ts-ignore
      let TT = new Date(times[n] * 1000).toLocaleString()
      times[n] = String(TT)
  
      //ts[n] = ethers.utils.formatUnits(time[0]);
      // times[n] = ethers.utils.formatUnits(ts[n],0);
      if (tags[n] != '') {
        let t2 = 'https://etherscan.io/address/' + artist[n]
        // @ts-ignore
        t0[n] = (<div ><h2 className="text-1xl text-center font-bold justify-center light:text-gray-800 "> <a style={{ color: '#4f86f7' }}> # {sup - n}</a>  From   <a href={t2} target="_blank" rel="noreferrer" className="rotating-hue" style={{ color: '#4f86f7' }}>{artists[n]}</a> ★{balances[artist[n]]} 🧱{balancestoken[artist[n]]}
        </h2>
          <div className="text-center light:text-white-600" >
            {tags[n]}
          </div>
          <h2 style={{ color: '#cccccc' }}className="text-1xl text-centerjustify-center ">
          {times[n]}</h2>
          <div className="text-center light:text-white-600"><a style={{ color: '#32353B' }}>
            _____________________________________________________________________________________________
          </a></div>
        </div>
        )
      }
    }
    let t1 = <div className="text-1xl font-bold light:text-gray-800">Messages: {sup}</div>
    return (
      <>{t0}{t1}</>);
  }

  return (
    <div>{tag1()}</div>
  )
}
let Contract = new ethers.Contract(contractaddrs, Abi, signerw);
let Token = new ethers.Contract(tokenaddrs, Abi, signerw);
//const Contract = new ethers.Contract(contractaddrs, Abi, signerw);
const CreateWall = new ethers.Contract(createaddrs, Abi, signerw);
const App = ({ Component, pageProps }: AppProps) => {
  function handleChangeMessage(event: ChangeEvent<HTMLTextAreaElement>) {
    const values = event.target.value;
    setSendMessage(values);
  }
  function handleChangeWall(event: SelectChangeEvent<string>) {
    const values = event.target.value;
    setWall(values);

    window.location.replace('./' + '?walladdrs=' + values)

  }
  function handleChangeName(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const values = event.target.value;
    set_name(values);
  }
  function handleChangeSymbol(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const values = event.target.value;
    set_symbol(values);
  }
  function handleChangeedit(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {

    if (_edit == 0) {
      set_edit(1);
    }
    else { set_edit(0); }
  }
  function handleChangeMod(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (_mod == 0) {
      set_mod(1);
    }
    else { set_mod(0) }
  }

  //notify
  const [sendMessage, setSendMessage] = useState("");
  const [_name, set_name] = useState("LOL");
  const [_symbol, set_symbol] = useState("LOL");
  const [_edit, set_edit] = useState(0);
  const [_mod, set_mod] = useState(0);
  const [unlocktext, set_unlocktext] = useState("Please Unlock Wallet");
  // notify function call

  // await // MetaMask requires requesting permission to connect users accounts

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [open, setOpen] = useState(false);
  const [wallAddrs, setWall] = useState('0x91fc82f5c588c00985aa264fc7b45ee680110703');
  const createWallT = async () => {
    // A Web3Provider wraps a standard Web3 provider, which is
    // what MetaMask injects as window.ethereum into each page
    const provider2 = new ethers.providers.Web3Provider(window.ethereum)
    // Setup


    await provider2.send("eth_requestAccounts", []);
    try {
      Router.pathname

      // await provider2.send("eth_requestAccounts", []);// await // MetaMask requires requesting permission to connect users accountsSS
      const signer = provider2.getSigner()
      let myAddress = await signer.getAddress()
      await CreateWall.connect(signer).createWall(_name, _symbol, 0, _mod, _edit)////signer._address, sendMessage)
      CreateWall.on("newWall", (address, name) => {
        setTimeout(() => {
          window.location.replace('./' + '?walladdrs=' + address)
        }, 3000);
      });
    } catch (e) {
      console.log("LOL")
      // addToast({body: e.message, type: "error"});
    }
  };//}// @ts-ignore
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
  const callTag = async () => {
    // A Web3Provider wraps a standard Web3 provider, which is
    // what MetaMask injects as window.ethereum into each page
    const provider2 = new ethers.providers.Web3Provider(window.ethereum)
    const provider3 = new ethers.providers.JsonRpcProvider('https://eth-mainnet.g.alchemy.com/v2/Z-ifXLmZ9T3-nfXiA0B8wp5ZUPXTkWlg')
    // Setup
    const settings = {
      apiKey: "ku_puX-vIFhnbZnC3xmpdT3jUico70LY",
      network: Network.MATIC_MAINNET,
    };

    await provider2.send("eth_requestAccounts", []);
    try {
      // await provider2.send("eth_requestAccounts", []);// await // MetaMask requires requesting permission to connect users accountsSS
      const signer = provider2.getSigner()
      let myAddress = await signer.getAddress()
      await Contract.connect(signer).mint(myAddress, sendMessage)////signer._address, sendMessage)
    } catch (e) {
      console.log("LOL")
      // addToast({body: e.message, type: "error"});
    }
  };
  return (

    <ThemeProvider attribute="class">
      <div className="m-auto bg-white dark:bg-gray-900 dark:text-white">
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains}>
            <Box sx={{ flexGrow: 1 }} className="left-6 top-10 m-auto">
              <Grid container spacing={1}>
                <Grid xs={2} className="left-6 top-10 m-auto">
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">Choose wall</InputLabel>
                    <Select
                      labelId="select-label"
                      id="simple-select"
                      value={contractaddrs}
                      label="Choose wall"
                      onChange={handleChangeWall}
                      className="left-6 m-auto w-40 mt-6 md:mt-2 px-4 xs:px-0 items-center"
                    >
                     {menun}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid xs={2}><Button onClick={handleOpen} variant="outlined" className="left-6 top-10">Create wall</Button>
                </Grid><Grid xs={3}>
                <Grid container spacing={0}>
                <Grid xs={2}>
                  <a href='https://tagthewall.org/'>
                  <img src='https://cryptologos.cc/logos/polygon-matic-logo.png?v=023' style={{width:42}}>
                    </img></a>
                    </Grid>
                    <Grid xs={2}>
                    <a href='https://FTM.tagthewall.org/'>
                  <img src='https://cryptologos.cc/logos/fantom-ftm-logo.png?v=023' style={{width:42}}>
                    </img></a>
                    </Grid><Grid xs={2}>
                    <a href='https://BSC.tagthewall.org/'>
                  <img src='https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=023' style={{width:42}}>
                    </img></a>
                    </Grid><Grid xs={2}>
                    <a href='https://ARB.tagthewall.org/'>
                  <img src='https://bridge.arbitrum.io/static/media/ArbitrumOneLogo.abae01ba.svg' style={{width:42}}>
                    </img></a>
                    </Grid></Grid>
                </Grid><Grid xs={5}><Navbar /></Grid></Grid></Box>
            <Component {...pageProps} />
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <div className="flex flex-col space-y-2 justify-center mt-6 md:mt-2 px-4 xs:px-0 m-auto">
                <Typography id="modal-modal-title" variant="h6" component="h2" className="m-auto text-center w-3/4 font-bold justify-center rounded-md dark:text-black ">
                  Create your own wall!
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }} className="m-auto text-center w-3/4 justify-center rounded-mdlight:text-gray-800 dark:text-black">
                  You can create your own immutable community here.
                </Typography>
                <h2 className="text-1xl text-center font-bold justify-center light:text-gray-800">
                  Wall name
                </h2>
                <TextField className="m-auto text-center w-3/4 justify-center rounded-mdlight:text-gray-800 dark:text-black"
                  onChange={e => handleChangeName(e)} />
                <h2 className="text-1xl text-center font-bold justify-center light:text-gray-800">
                  Wall symbol
                </h2>
                <TextField className="m-auto text-center w-3/4 justify-center light:text-gray-800 dark:text-black"
                  onChange={e => handleChangeSymbol(e)} />
                <FormControlLabel control={<Switch onChange={handleChangeMod} />} label="Mods can delete messages" />
                <FormControlLabel control={<Switch onChange={handleChangeedit} />} label="Users can edit messages" />
                <button style={{ background: "#00ffff" }} className="btn w-6/12 m-auto rounded-md border border-solid light:border-black dark:border-black light:text-gray-800 dark:text-black" type="button"
                  onClick={createWallT}> Create Wall
                </button>

              </div>
            </Dialog>
            <div className="flex flex-col space-y-2 justify-center mt-6 md:mt-2 px-4 xs:px-0 m-auto max-w-4xl min-w-80 shadow-md rounded-md border border-solid light:border-gray-200 dark:border-gray-500 overflow-hidden">
              <div>
                {useT1()}
              </div>
              <h1 className="m-auto text-center md:mt-8 text-2xl md:text-4xl font-extrabold rotating-hue">
                Tag the Wall!
              </h1>
              <h2 className="text-1xl text-center font-bold justify-center light:text-gray-800">
                Send your message here
              </h2>
              <textarea className="m-auto text-center w-3/4 justify-center rounded-md border border-solid light:border-gray-200 dark:border-gray-500 light:text-gray-800 dark:text-black"
                onChange={e => handleChangeMessage(e)} />

              <button style={{ background: "#00ffff" }} className="btn w-6/12 m-auto rounded-md border border-solid light:border-black dark:border-black light:text-gray-800 dark:text-black" type="button"
                onClick={callTag}> Send
              </button>

              <div>
              </div>
              <div>

              </div>
            </div>
            <div className="flex flex-col  space-y-6 justify-center mt-6 md:mt-12 px-4 xs:px-0 m-auto max-w-4xl min-w-80 shadow-md rounded-md border border-solid light:border-gray-200 dark:border-gray-500 overflow-hidden">

              <h1 className="m-auto text-center md:mt-8 text-4xl md:text-4xl font-extrabold rotating-hue">
                Chat
              </h1>
              <div className="m-auto text-center w-3/4">

                {useTtag0()}
              </div>

            </div>
          </RainbowKitProvider>
        </WagmiConfig>
      </div>
    </ThemeProvider>
  )
}
export default App
