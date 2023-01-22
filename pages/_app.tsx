// @ts-nocheck
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import '@rainbow-me/rainbowkit/styles.css'
import { useEffect, useState } from "react";
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
import React from 'react';
const { chainn, rpc, createn, contractn, menun } = net
const alchemyId = NEXT_PUBLIC_ALCHEMY_ID
const etherscanApiKey = NEXT_PUBLIC_ETHERSCAN_API_KEY

const { chains, provider } = configureChains(
  [chainn],//, chain.arbitrum],//, //chain.optimism, chain.arbitrum, chain.localhost],
  [jsonRpcProvider({
    rpc: (chainn) => ({
      http: rpc,
    })
  })],//,// alchemyProvider({ apiKey: "l7DBx7tLlR-x_X8_3it8Jpr9u9yiqrn8" })],
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
const Abi = [ 
"function getHistoricalFeeds(uint256[] memory feedIDs, uint256[] memory timestamps) view returns (uint256[] memory)",
"function getFeeds(uint256[] memory feedIDs) view returns (uint256[] memory, uint256[] memory, uint256[] memory)",
"function getFeed(uint256 feedID) view returns (uint256, uint256, uint256)",
"function getFeedLength() view returns (uint256)",
"function signers(uint256) view returns (address)",
"function getFeedList(uint256[] memory feedIDs) view returns(string[] memory, uint256[] memory, uint256[] memory, uint256[] memory, uint256[] memory)",
];
let ut = 0
let contracturl = ''
// @ts-ignore
let loaded = 0
let feeds

let last
let signers
    // @ts-ignore
  let FeedID = []
  
    // @ts-ignore
  let FeedName = []
  
    // @ts-ignore
  let FeedValue = []
  
    // @ts-ignore
  let ValueRAW = []
  
    // @ts-ignore
  let LastUpdate = []
  
    // @ts-ignore
  let Decimals = []
  
    // @ts-ignore
  let UpdateInterval = []
let checkS = 0;
let Contract = new ethers.Contract(contractaddrs, Abi, signerw);
function useT1() {
  const [wallT, setwallT] = useState("");
  useEffect(() => {
    // update the ui elements/
    update()
    async function update() {
      if (ut == 0 && contractaddrs != contractn) {
        contracturl = window.location.origin.toString() + '/?addrs=' + contractaddrs
        setwallT('Welcome to Scry')
        ut = 1; 
      } 
        
    }
  },); return (<><h1 className="m-auto text-center md:mt-8 text-2xl md:text-4xl font-extrabold rotating-hue" >{wallT}</h1><div className="m-auto text-center" style={{ color: '#4f86f7' }}>{contracturl}</div></>)
}//      contractaddrs = (router.query.new_nft_address);
function useData() {
  const [Data, setData] = useState();
  const [sup, setSup] = useState(50);
  const [fID, setID] = useState(0);
  const [FName, setName] = useState('');
  const [FValue, setValue] = useState(0);
  const [Last, setLastUpdate] = useState(0);
  const [wallT, setwallT] = useState();
  let addrst = 0
  const router = useRouter()
  const { walladdrs } = router.query
  // State to keep track of whether the dialog is open
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  if (walladdrs != null && addrst == 0) {
    // @ts-ignore
    contractaddrs = walladdrs
    Contract = new ethers.Contract(contractaddrs, Abi, signerw);
    addrst = 1
  }
  
    useEffect(() => {
    // update the ui elements
    async function updateUIStates() {
        if (loaded == 0) {
         toast("Loading")
        }
        const provider2 = new ethers.providers.JsonRpcProvider('https://polygon-rpc.com')
        
        Contract = new ethers.Contract(contractaddrs, Abi, provider2);
        
async function getData() {
  let length = await Contract.getFeedLength()
   FeedID = []
   FeedName = []
   FeedValue = []
   ValueRAW = []
   LastUpdate = []
   Decimals = []
   UpdateInterval = []
  let nt = [];
  for (var i = 0; i < 90; i++) {
    nt.push(i);
  } let feedData = await Contract.getFeedList(nt)
  let feedInfo = await Contract.getFeeds(nt)
  for (var n = 0; n < length.toNumber(); n++) {
      var d = new Date(0);
      d.setUTCSeconds(feedInfo[1][n]);
      FeedID[n] = [n]
      FeedName[n] = feedData[0][n]
      FeedValue[n] = feedInfo[0][n] / (10 ** feedData[1][n])
      ValueRAW[n] = feedInfo[0][n]
      LastUpdate[n] =  d
      Decimals[n] = feedData[1][n]
      UpdateInterval[n]  = feedData[2][n]
      console.log("ID: " +n + FeedValue[n])
  }
 if (FeedValue[1] != null) {
  setID(FeedID);
  setName(FeedName);
  setValue(FeedValue);
  setLastUpdate(LastUpdate);
  setSup(length.toNumber());
  signers=await Contract.signers(0)
  feeds =sup
  console.log("LOL2")}
  console.log("LOL")
  console.log("ID: " + FeedValue[1] + "FeedValue: " + FValue[1])
  loaded = 1
}

getData()
        let s = (await Contract.getFeedLength());
        s = ethers.utils.formatUnits(s, 0);
        setSup(s)
       
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

  function data1() {
    let t0 = []
    let upd = []
    for (let n = 0; n< sup;n++) {
      // @ts-ignore
      
      if (FValue[n] != null) {
     
    let TT = new Date(Last[n] * 1000).toLocaleString()
      upd[n] = String(TT)
        t0[n] = (<Grid xs={4}><Card><h2 className="text-2xl text-center font-bold justify-center light:text-gray-800 " style={{ color: '#50afff' }}>{FName[n]}
        </h2>
          <div className="text-center text-4xl font-extrabold rotating-hue" style={{ color: '#519fff' }}>
            {FValue[n]}
            </div>
            <h2 className="text-1xl text-center font-bold justify-center light:text-gray-800 "> Feed ID #{fID[n]} 
        </h2><div className="text-center light:text-white-600">Last Update: {upd[n]}</div>
        </Card></Grid>
        )
        last=upd[1]
        console.log(FValue[n])
        console.log(n)
      }
    
    }
    let t1
    return (
      <><Grid container spacing={2}>{t0}</Grid>{t1}</>);
  }

  return (
    <div>{data1()}</div>
  )
}

const App = ({ Component, pageProps }: AppProps) => {
  function handleChangeWall(event: SelectChangeEvent<string>) {
    const values = event.target.value;
    setWall(values);

    window.location.replace('./' + '?addrs=' + values)

  }
  const [unlocktext, set_unlocktext] = useState("Please Unlock Wallet");
  // notify function call

  // await // MetaMask requires requesting permission to connect users accounts

  const handleOpenA = () => {
    setOpenA(true);
  };
  const handleCloseA = () => {
    setOpenA(false);
  };
  const [openA, setOpenA] = useState(false);
  const [wallAddrs, setWall] = useState('0x00f0feed50dcdf57b4f1b532e8f5e7f291e0c84b');
  return (

    <ThemeProvider attribute="class">
      <div className="m-auto bg-white dark:bg-gray-900 dark:text-white">
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains}>
            <Box sx={{ flexGrow: 1 }} className="left-6 top-10 m-auto">
              <Grid container spacing={1}>
                <Grid xs={2} className="left-6 top-12 m-auto">
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">Choose Oracle</InputLabel>
                    <Select
                      labelId="select-label"
                      id="simple-select"
                      value={contractaddrs}
                      label="Choose Oracle"
                      onChange={handleChangeWall}
                      className="left-6 m-auto w-40 mt-6 md:mt-2 px-4 xs:px-0 items-center"
                    >
                      {menun}
                    </Select>
                  </FormControl>

                </Grid>

                <Grid xs={3}>
                  <Grid container spacing={0}>
                    <Grid xs={2}>
                      <a href='https://dapp.scry.finance/'>
                        <img src='https://cryptologos.cc/logos/polygon-matic-logo.png?v=023' style={{ width: 42 }}>
                        </img></a>
                    </Grid>
                    <Grid xs={2}>
                      <a href='https://FTM.dapp.scry.finance/'>
                        <img src='https://cryptologos.cc/logos/fantom-ftm-logo.png?v=023' style={{ width: 42 }}>
                        </img></a>
                    </Grid><Grid xs={2}>
                      <a href='https://BSC.dapp.scry.finance/'>
                        <img src='https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=023' style={{ width: 42 }}>
                        </img></a>
                    </Grid><Grid xs={2}>
                      <a href='https://ARB.dapp.scry.finance/'>
                        <img src='https://bridge.arbitrum.io/static/media/ArbitrumOneLogo.abae01ba.svg' style={{ width: 42 }}>
                        </img></a>
                    </Grid></Grid>
                </Grid></Grid></Box>
            <Component {...pageProps} />
            <Dialog
              open={openA}
              onClose={handleCloseA}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <div className="flex flex-col space-y-2 justify-center mt-6 md:mt-2 px-4 xs:px-0 items-center m-auto">
                <Typography id="modal-modal-title" variant="h6" component="h2" className="m-auto text-center w-3/4 font-bold justify-center rounded-md dark:text-black ">
                  About Scry
                </Typography>
                <h2 className="text-1xl text-center font-bold justify-center light:text-gray-800">
                  Scry Docs
                </h2>
                <Typography id="modal-modal-description" sx={{ mt: 2 }} className="m-auto text-center w-3/4 justify-center rounded-mdlight:text-gray-800 dark:text-black">
                  docs.dapp.scry.finance
                </Typography>
              <Button style={{ background: "#ff50a9", color: 'white' }} className="btn w-6/12 m-auto rounded-md border border-solid light:border-black dark:border-black light:text-gray-800 dark:text-black" type="button"
                onClick={handleCloseA}> Close
              </Button>
              </div>
            </Dialog><h1 className="m-auto text-center md:mt-8 text-2xl md:text-3xl font-extrabold rotating-hue w-3/4">
                Oracle Address
                </h1>
                <div className="m-auto text-center text-2xl md:text-2xl font-extrabold"style={{ color: '#519fff' }}>
                  {Contract.address}
                </div>
            <div className="flex flex-col  space-y-4 justify-center mt-6 md:mt-12 px-4 xs:px-0 m-auto max-w-4xl min-w-80 shadow-md rounded-md border border-solid light:border-gray-200 dark:border-gray-500 overflow-hidden">
              
              <h1 className="text-center text-4xl md:text-4xl font-extrabold rotating-hue">
                Oracle Info
              </h1>
              <div className="m-auto text-center w-3/4">
                
              </div>
              <Grid container spacing={2}>
                    <Grid xs={12}>
                    <Card>
                    <h1 className="m-auto text-center text-2xl md:text-3xl font-extrabold rotating-hue">
                Signers
              </h1><h1 className="text-center text-1xl md:text-2xl font-extrabold rotating-hue" style={{ color: '#519fff' }}>
              {signers}
              </h1></Card>
                    </Grid><Grid xs={6}>
                    <Card><h1 className="m-auto text-center text-2xl md:text-3xl font-extrabold rotating-hue w-3/4">
                Last Update
                </h1>
                <h1 className="text-center text-1xl md:text-2xl font-extrabold rotating-hue" style={{ color: '#519fff' }}>
              {last}
              </h1>
              </Card>
                    </Grid>
                    <Grid xs={6}>
                    <Card>
                    <h1 className="m-auto text-center text-2xl md:text-3xl font-extrabold rotating-hue">
                Feeds
              </h1>
              <h1 className="text-center text-1xl md:text-2xl font-extrabold rotating-hue" style={{ color: '#519fff' }}>
              {feeds}
              </h1>
              </Card>
                    </Grid></Grid>
                        <div style={{ display: "flex", justifyContent: "center" }}><a href='https://docs.scry.finance/'><Button style={{ background: "#519aff", color: 'white', margin: "auto"  }} className="btn m-auto rounded-md border border-solid light:border-black dark:border-black light:text-gray-800 dark:text-black" type="button"> Developer Docs
              </Button></a></div>
                    <h1 className="text-center text-1xl md:text-2xl font-extrabold rotating-hue" style={{ color: '#519fff' }}>
               
              </h1></div>
            <div className="flex flex-col  space-y-6 justify-center mt-6 md:mt-12 px-4 xs:px-0 m-auto max-w-4xl min-w-80 shadow-md rounded-md border border-solid light:border-gray-200 dark:border-gray-500 overflow-hidden" style={{ background: "#b2f9ff2e", color:"#519fff" }}>

              <h1 className="m-auto text-center md:mt-8 text-4xl md:text-4xl font-extrabold rotating-hue">
                Data
              </h1>
              <div className="m-auto text-center w-3/4">
                {useData()}
              </div>
            </div>
          </RainbowKitProvider>
        </WagmiConfig>
      </div>
    </ThemeProvider>
  )
}
export default App
