//@ts-nocheck
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
let tokenaddrs = "0x000000000075F13bCF2E6652e84821e8b544F6F9";
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
  "function withdraw()",
  "function mint(address to, string _tag)",
  "function owner () view returns (address)",
  "event newWall(address,string)",
  "function balanceOf(address) view returns (uint256)",
  "function createWall(string _name,string _symbol,uint256 _price,uint8 _canMod,uint8 _canChange, uint8 sub) returns (address)",
  "function mintandrenewSub(address to) payable"
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
let subWall = 0
let checkS = 0;let own= 0
function useT1() {
  const [wallT, setwallT] = useState("");
  useEffect(() => {
    // update the ui elements/
    update()
    async function update() {
      if (ut == 0 && contractaddrs != contractn) {
        contracturl = window.location.origin.toString() + '/?walladdrs=' + contractaddrs
        setwallT('Welcome to ' + await Contract.name())
        ut = 1; const provider2 = new ethers.providers.Web3Provider(window.ethereum)
    await provider2.send("eth_requestAccounts", []);
    if (await Contract.owner() == await provider2.getSigner().getAddress()) {
      own = 1}
      } 
        
    }
  },); return (<><h1 className="m-auto text-center md:mt-8 text-2xl md:text-4xl font-extrabold rotating-hue" >{wallT}</h1><div className="m-auto text-center" style={{ color: '#4f86f7' }}>{contracturl}</div></>)
}//      contractaddrs = (router.query.new_nft_address);
function useTtag0() {

  const [tag, setTag] = useState("L");
  const [artist, setArtist] = useState("L");
  const [time, setTime] = useState("");
  const [sup, setSup] = useState(1);
  const [sprice, setSPrice] = useState("L");// let addrs = []
  const [wallT, setwallT] = useState("");
  const [symbol, setSymbol] = useState("L");
  let addrst = 0
  const router = useRouter()
  const { walladdrs } = router.query
  // State to keep track of whether the dialog is open
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // State to keep track of which image is currently open in the dialog
  const [currentImage, setCurrentImage] = useState(null);
  if (walladdrs != null && addrst == 0) {
    // @ts-ignore
    contractaddrs = walladdrs
    Contract = new ethers.Contract(contractaddrs, Abi, signerw);
    addrst = 1
  }
  
    useEffect(() => {
    // update the ui elements
    async function updateUIStates() {
      try {
        if (checkS == 0) {
          toast('Loading wall. Please Connect Wallet.')
          subWall=await Contract.subWall()
          checkS= 1
        }
        if (loaded == 0) {
          if (subWall  == 0) {
          toast('Loading wall')
          } else {
            toast('Loading wall. Please Connect Wallet.')
          } 
        }
        const provider2 = new ethers.providers.Web3Provider(window.ethereum)
        
        let pro2  = await provider2.send("eth_requestAccounts", []);
        // Setup
        if ((await provider2.getNetwork()).chainId != chainn.id) {
          toast.error('Wrong Network. Please switch networks')
        }
       
        Contract = new ethers.Contract(contractaddrs, Abi, provider2);
        if (subWall  == 1) {
          
        let s = (await Contract.totalSupply() - await Contract.subs() );
        s = ethers.utils.formatUnits(s, 0);
        setSup(s)
      }else {
        let s = (await Contract.totalSupply());
        s = ethers.utils.formatUnits(s, 0);
        setSup(s)
      } 
        const [tagS, artistS, timeS] = await Contract.latest(sup, { from: await provider2.getSigner().getAddress() });
        console.log(await Contract.latest(sup, { from: await provider2.getSigner().getAddress() }))
        if (wallT == 'LOL') {
          setwallT(await Contract.name() + 'LOLOL')
        }
        let SP = await Contract.price()
        setSPrice(ethers.utils.formatEther(SP))
        setTag(tagS);
        setArtist(artistS);
        setTime(timeS);
        const provider3 = new ethers.providers.JsonRpcProvider('https://eth-mainnet.g.alchemy.com/v2/Z-ifXLmZ9T3-nfXiA0B8wp5ZUPXTkWlg')
        const provider4 = new ethers.providers.JsonRpcProvider('https://eth.llamarpc.com	')
       
        for (let T = 0; T < sup;n++) {
          let n= T
          if (subWall  == 1) {
            n = T+1
          }
          if (addrs[artistS[n]] == null) {
            let tn = await provider3.lookupAddress(artistS[n])
            // @ts-ignore
            if (balances[artistS[n]] == null) {
              try {
                balances[artistS[n]] = Number(await Contract.balanceOf(artistS[n]))
                balancestoken[artistS[n]] = Number(await Token.connect(provider4).balanceOf(artistS[n]) / 10 ** 18  //}
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
          if (loaded == 0 && tag[1]!= '') {
            loaded = 1
            toast.success('Successfully loaded wall!')
          } 
         
        }
      } catch (error) {

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
    for (let n = 0; n< sup;n++) {
      if (subWall  == 1) {
      tags[n] = tag[n+1]
      console.log(tag[n+1])
      artists[n] = artist[n+1]
    }else {
      tags[n] = tag[n]
      console.log(tag[n])
      artists[n] = artist[n]
     
    }
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
      console.log(n)
      console.log(tag[n])
      

      const MyComponent = ({ message }) => {
        // Extract all of the URLs from the message
        let urls = []
        try {
          urls = message.match(/(https?:\/\/[^\s]+\.(?:png|jpg|jpeg|gif)|ipfs:\/\/[^\s]+|\/ipfs\/[^\s]+)/gi) || [];
        } catch (e) {
          console.log("Error: ", e.message);
          // addToast({body: e.message, type: "error"});
        }

        // Function to open the dialog when an image is clicked
        const handleOpenDialog = (image) => {
          setIsDialogOpen(true);
          setCurrentImage(image);
        }

        // Function to close the dialog
        const handleCloseDialog = () => {
          setIsDialogOpen(false);
          setCurrentImage(null);
        }
        console.log(urls);
        // Map over the array of URLs and return an img element for each
        // @ts-ignore
        return (
          <div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gridGap: '10px',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {urls.map((url, index) => {
                let src = url;
                // Check if the URL is an IPFS link
                if (url.startsWith("/ipfs/") || url.startsWith("ipfs://")) {
                  // Resolve the IPFS link using an IPFS gateway
                  src = `https://cloudflare-ipfs.com/ipfs/${url.replace("ipfs://", "/").replace("/ipfs/", "/")}`
                }
                return <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }} key={index} ><img src={src} alt={`Image ${index + 1}`} onClick={() => handleOpenDialog(src)} style={{ width: '400px', cursor: 'pointer' }}
                /></div>;
              })}
            </div>
            {isDialogOpen && (
              <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <div style={{
                  background: 'white',
                  maxWidth: '90%',
                  maxHeight: '90%',
                  overflow: 'auto',
                  padding: '10px',
                }}>
                  <img src={currentImage} alt='Large image' onClick={handleCloseDialog} style={{ maxWidth: '100%' }} />
                  <button onClick={handleCloseDialog} style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    color: 'white',
                  }}>
                    X
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      };


      //ts[n] = ethers.utils.formatUnits(time[0]);
      // times[n] = ethers.utils.formatUnits(ts[n],0);
      if (tags[n] != '') {
        let t2 = 'https://etherscan.io/address/' + artist[n]
        // @ts-ignore
        t0[n] = (<div ><h2 className="text-1xl text-center font-bold justify-center light:text-gray-800 "> <a style={{ color: '#4f86f7' }}> # {sup - n}</a>  From   <a href={t2} target="_blank" rel="noreferrer" className="rotating-hue" style={{ color: '#4f86f7' }}>{artists[n]}</a> ★{balances[artist[n]]}        <Image src="/lol.png" alt="Icon" width="16" height="16" />{balancestoken[artist[n]]}
        </h2>
          <div className="text-center light:text-white-600" >
            {tags[n]}
          </div><MyComponent message={tags[n]} />
          <h2 style={{ color: '#cccccc' }} className="text-1xl text-centerjustify-center ">
            {times[n]}</h2>
          <div className="text-center light:text-white-600"><a style={{ color: '#32353B' }}>
            _____________________________________________________________________________________________
          </a></div>
        </div>
        )
      }
    
    }
        let t2 = <div className="text-1xl font-bold light:text-gray-800">Price per 4w: {sprice} ETH</div>
let t1 = <div className="text-1xl font-bold light:text-gray-800">Messages: {sup}</div>
    return (
      <>{t2}{t0}{t1}</>);
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
  function handleChangeS(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const values = event.target.value;
    set_s(values);
  }
  function handleChangePrice(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const values = event.target.value;
    set_Price(ethers.utils.parseEther(values));
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
  function handleChangeSub(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (_Sub == 0) {
      set_Sub(1);
    }
    else { set_Sub(0) }
  }
  function subt() {
     if (subWall != 1) {
       return null;
    }if (subWall == 1&&own==1) {
      return (<div style={{
       
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',flexDirection: 'column'
      }}><Button onClick={wd}>
        withdraw
      </Button><div></div>
      <Button onClick={handleOpenSub}>
      Subscribe
    </Button></div>);
   }

    return (
      <Button onClick={handleOpenSub}>
        You must Subscribe to access
      </Button>
    );
  }const wd = async () => {
    const provider2 = new ethers.providers.Web3Provider(window.ethereum)
    await provider2.send("eth_requestAccounts", []);
    try {
      const signer = provider2.getSigner()
      let myAddress = await signer.getAddress()
      await Contract.connect(signer).withdraw()////signer._address, sendMessage)
      } catch (e) {
        console.log("LOL")}
    
      // addToast({body: e.message, type: "error"});
    }
  //notify
  const [sendMessage, setSendMessage] = useState("");
  const [_name, set_name] = useState("LOL");
  const [_Sub, set_Sub] = useState(0);
  const [_symbol, set_symbol] = useState("LOL");
  const [_s, set_s] = useState("LOL");
  const [_Price, set_Price] = useState("0");
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
  const handleOpenA = () => {
    setOpenA(true);
  };
  const handleCloseA = () => {
    setOpenA(false);
  };
  const handleOpenSub = () => {
    setOpenSub(true);
  };
  const handleCloseSub = () => {
    setOpenSub(false);
  };
  const [openBRK, setOpenBRK] = useState(false);
  const handleOpenBRK = () => {
    setOpenBRK(true);
  };
  const handleCloseBRK = () => {
    setOpenBRK(false);
  };
  const [open, setOpen] = useState(false);
  const [openA, setOpenA] = useState(false);
  const [openSub, setOpenSub] = useState(false);
  const [wallAddrs, setWall] = useState('0x0947ef8Bf078b8201013c77C39b5f0A5Bb8f58EC');
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
      await CreateWall.connect(signer).createWall(_name, _symbol, _Price, _mod, _edit, _Sub)////signer._address, sendMessage)
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
  const brkBuy = async () => {
    const provider2 = new ethers.providers.Web3Provider(window.ethereum)
    //d
    //signerw ethers.js .send("eth_requestAccounts", []);

      window.location.assign('https://app.uniswap.org/#/swap?inputCurrency=ETH&chain=mainnet&outputCurrency='+tokenaddrs)
    
  };
  // const sendTip = async (toAddrs, amount) => {// @ts-ignore
  const subWallT = async () => {
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

      await Contract.connect(signer).mintandrenewSub(myAddress, { value: ethers.utils.parseEther(_s) })
      // .then((transaction) => {
      //     console.log(`Transaction successful: ${transaction.hash}`);
      // })
    } catch (e) {
      console.log("LOL")
      // addToast({body: e.message, type: "error"});
    }
  };//}// @ts-ignore
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
      if ((await provider2.getNetwork()).chainId != chainn.id) {
        toast.error('Wrong Network. Please switch networks')
      }
      else {
        await Contract.connect(signer).mint(myAddress, sendMessage)////signer._address, sendMessage)
      }
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
                <Grid xs={2} className="left-6 top-12 m-auto">
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

                <Grid xs={2}><Button onClick={handleOpen} variant="outlined" className="left-6 top-6">Create wall</Button>
                  <Button onClick={handleOpenA} variant="outlined" className="left-12 top-7">About</Button></Grid><Grid xs={3}>
                  <Grid container spacing={0}>
                    <Grid xs={2}>
                      <a href='https://tagthewall.org/'>
                        <img src='https://cryptologos.cc/logos/polygon-matic-logo.png?v=023' style={{ width: 42 }}>
                        </img></a>
                    </Grid>
                    <Grid xs={2}>
                      <a href='https://FTM.tagthewall.org/'>
                        <img src='https://cryptologos.cc/logos/fantom-ftm-logo.png?v=023' style={{ width: 42 }}>
                        </img></a>
                    </Grid><Grid xs={2}>
                      <a href='https://BSC.tagthewall.org/'>
                        <img src='https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=023' style={{ width: 42 }}>
                        </img></a>
                    </Grid><Grid xs={2}>
                      <a href='https://ARB.tagthewall.org/'>
                        <img src='https://cryptologos.cc/logos/arbitrum-arb-logo.svg?v=023' style={{ width: 42 }}>
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
              <div className="flex flex-col space-y-2 justify-center mt-6 md:mt-2 px-4 xs:px-0 items-center m-auto">
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
                <h2 className="text-1xl text-center font-bold justify-center light:text-gray-800">
                  Price
                </h2>
                <TextField className="m-auto text-center w-3/4 justify-center light:text-gray-800 dark:text-black"
                  onChange={e => handleChangePrice(e)} />
                <FormControlLabel control={<Switch onChange={handleChangeMod} />} label="Mods can delete messages" />
                <FormControlLabel control={<Switch onChange={handleChangeedit} />} label="Users can edit messages" />
                <FormControlLabel control={<Switch onChange={handleChangeSub} />} label="Subscription wall" />
                <button style={{ background: "#00ffff" }} className="btn w-6/12 m-auto rounded-md border border-solid light:border-black dark:border-black light:text-gray-800 dark:text-black" type="button"
                  onClick={createWallT}> Create Wall
                </button>
                <div></div>
              </div>
            </Dialog>
            <Dialog
              open={openA}
              onClose={handleCloseA}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <div className="flex flex-col space-y-2 justify-center mt-6 md:mt-2 px-4 xs:px-0 items-center m-auto">
                <Typography id="modal-modal-title" variant="h6" component="h2" className="m-auto text-center w-3/4 font-bold justify-center rounded-md dark:text-black ">
                  About the Wall
                </Typography>
                <Image src="/lol.png" alt="Icon" width="100" height="100" />
                <h2 className="text-1xl text-center font-bold justify-center light:text-gray-800">
                  the Wall
                </h2>
                <Typography id="modal-modal-description" sx={{ mt: 2 }} className="m-auto text-center w-3/4 justify-center rounded-mdlight:text-gray-800 dark:text-black">
                  The wall is a fully onchain, decentralized and permissionless on chain Social Chat Platform. Messages posted to walls are messages wrapped as NFTs which hold the message, creator and timestamp for every message. This allow each wall to be fully self sovereign, with noone able to ban/censor/edit messages unless explicitly stated by that wall at creation by the creator. The wall is the first fully onchain social chat platform and allows for a truely free, decentralized and immutable platform for anyone, anywhere to express any idea. Information is power and we believe people should have free access to any and all information in order for society to be free, open and able to achieve its best.
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }} className="m-auto text-center w-3/4 justify-center rounded-mdlight:text-gray-800 dark:text-black">
                  <h2 className="text-1xl text-center font-bold justify-center light:text-gray-800">

                    NFTs as Messages

                  </h2>
                  Messages are wrapped as NFTs allowing us to attach metadata onchain to each NFT token, this allows anyone to create a front end to show this information for any wall without any central server. The message, timestamp and creator are all fully onchain, with the actual image for the NFT and URI metadata able to be handled offchain by IPFS, this is not yet implemented as we are in the beta. All messages are NFTs from a specific wall, this allows you to see who is most active by how many NFTs they own for the community, allowing you to reward members by participation.
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }} className="m-auto text-center w-3/4 justify-center rounded-mdlight:text-gray-800 dark:text-black">
                  <h2 className="text-1xl text-center font-bold justify-center light:text-gray-800">
                    Moderation</h2>
                  All NFTs are able to change their data only in the way set at the walls creation for that community. This allows for communities to choose their moderation style and policy or be fully decentralized. Wallls are able to be moderated by specific addresses, edit own messages or be immutable.
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }} className="m-auto text-center w-3/4 justify-center rounded-mdlight:text-gray-800 dark:text-black">
                  <h2 className="text-1xl text-center font-bold justify-center light:text-gray-800">
                    Unique</h2>
                  Walls are all unique and each wall has a name which cannot be shared by any other wall. Walls are fully onchain and decentralized, using the deployment contract to lookup which walls for which community by name allowing for a subreddit style UX. Users are able to also choose the symbol and set a bio for the walls, aswell as able to create their own walls!
                </Typography>
              </div>
              <Button style={{ background: "#ff50a9", color: 'white' }} className="btn w-6/12 m-auto rounded-md border border-solid light:border-black dark:border-black light:text-gray-800 dark:text-black" type="button"
                onClick={handleCloseA}> Close
              </Button>
            </Dialog>
            <Dialog
              open={openBRK}
              onClose={handleCloseBRK}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Card className="flex flex-col space-y-2 justify-center mt-6 md:mt-2 px-4 xs:px-0 items-center m-auto">
                <Typography id="modal-modal-title" variant="h6" component="h2" className="m-auto text-center w-3/4 font-bold justify-center rounded-md dark:text-black ">
                  Signet (SIG)
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }} className="m-auto text-center w-3/4 justify-center rounded-mdlight:text-gray-800 dark:text-black">
                SIGs are the native token for the Wall! They are used to show reputation, used for tipping in the app, cosmetics coming soon.
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }} className="m-auto text-center w-3/4 justify-center rounded-mdlight:text-gray-800 dark:text-black">
                  The tokens are purchasable at 10 tokens for $1 and can be tipped or just used to flex on the Wall! They are primarily a tip token and used for cosmetics in the app. Please dont purchase for speculation. Purchases also help us keep building neat stuff like the Wall and are appreciated.
                </Typography>
                <Button style={{ background: "#FF007A", color: 'white' }} className="btn w-6/12 m-auto rounded-md border border-solid light:border-black dark:border-black light:text-gray-800 dark:text-black" type="button"
                  onClick={brkBuy}> Buy Signets!
                </Button>
                <div />
              </Card>
            </Dialog><Dialog
              open={openSub}
              onClose={handleCloseSub}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <div className="flex flex-col space-y-2 justify-center mt-6 md:mt-2 px-4 xs:px-0 items-center m-auto">
                <Typography id="modal-modal-title" variant="h6" component="h2" className="m-auto text-center w-3/4 font-bold justify-center rounded-md dark:text-black ">
                  Purchase Sub
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }} className="m-auto text-center w-3/4 justify-center rounded-mdlight:text-gray-800 dark:text-black">
                  Subscribe to the wall to view, chat
                </Typography>
                <h2 className="text-1xl text-center font-bold justify-center light:text-gray-800">
                  Purchase sub for as long as possible by spending this much ETH
                </h2>
                <TextField className="m-auto text-center w-3/4 justify-center rounded-mdlight:text-gray-800 dark:text-black"
                  onChange={e => handleChangeS(e)} />
                <button style={{ background: "#00ffff" }} className="btn w-6/12 m-auto rounded-md border border-solid light:border-black dark:border-black light:text-gray-800 dark:text-black" type="button"
                  onClick={subWallT}> Subscribe
                </button>
                <div></div>
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
              {subt()}
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
              <button
                className="btn fixed left-16 bottom-14 flex flex-col text-3xl"
                type="button"
                onClick={handleOpenBRK}
              >
              <Image className="bg-white rounded-full" src="/lol.png" alt="Icon" width="35" height="35" />
            
              </button>
            </div>
          </RainbowKitProvider>
        </WagmiConfig>
      </div>
    </ThemeProvider>
  )
}
export default App
