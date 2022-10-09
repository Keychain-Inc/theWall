import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import '@rainbow-me/rainbowkit/styles.css'
import {useWeb3React} from "@web3-react/core";
import { useEffect, useState } from "react";
import abi from '../contracts/theWall.json'
import Head from 'next/head'
import Image from 'next/image'
import { Toaster } from 'react-hot-toast'
import AdminPanel from '../components/adminPanel'
import Navbar from '../components/navbar'
import { usePrepareContractWrite } from 'wagmi'
import { useQuery, QueryClientProvider, QueryClient } from 'react-query'
import React from 'react'

const queryClient = new QueryClient()

import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { chain, configureChains, createClient, WagmiConfig, useContractWrite } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

import config from '../config/env-vars'
import { BigNumber, ethers} from 'ethers'
import { RainbowKitChainProvider } from '@rainbow-me/rainbowkit/dist/components/RainbowKitProvider/RainbowKitChainContext'
import { Provider } from 'web3/providers'
import Home from '.';
import { useENSName } from 'use-ens-name';
import AddressPill from '../components/addressPill';
const { NEXT_PUBLIC_ALCHEMY_ID, NEXT_PUBLIC_INFURA_ID, NEXT_PUBLIC_ETHERSCAN_API_KEY } = config

const alchemyId = NEXT_PUBLIC_ALCHEMY_ID
const etherscanApiKey = NEXT_PUBLIC_ETHERSCAN_API_KEY

const { chains, provider } = configureChains(
  [chain.polygon],//, //chain.optimism, chain.arbitrum, chain.localhost],
  [alchemyProvider({ apiKey: alchemyId }), publicProvider()],
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
  const new_address = address.substring(0, 5) + '...' + address.slice(-3)
  return new_address;
}

function tag0() {
  const [tag, setTag] = useState("LOL");
  const [artist, setArtist] = useState("LOL");
  const [time, setTime] = useState("");
  const [sup, setSup] = useState(2);
  // effect hook for updating data
  
  useEffect(() => {

    // update the ui elements
    async function updateUIStates() {
      const [tagS, artistS, timeS] = await Contract.latest(await Contract.totalSupply());
      // set balance
      setTag(tagS);
      setArtist(artistS);
      setTime(timeS);
      let s = (await Contract.totalSupply());
      s = ethers.utils.formatUnits(s,0);
      setSup(s)
      };
    // fix for updatix1ng after wallet login
    updateUIStates();

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
      times[n] = time[n]
    //ts[n] = ethers.utils.formatUnits(time[0]);
     // times[n] = ethers.utils.formatUnits(ts[n],0);<p style={{color: 'blue'}}>
      if (tags[n] != ''){
      t0[n] = (<div >
        <h2 className="text-1xl text-center font-bold justify-center light:text-gray-800 ">
        <a style={{color: '#4f86f7'}}> # {sup-n}</a>  From   <a className="rotating-hue" style={{color: '#4f86f7'}}>{artists[n]}</a>
        </h2>
        <div className="text-center light:text-white-600" >
          {tags[n]}
           </div>
           <div className="text-center light:text-white-600"><a style={{color: '#32353B'}}>
           _____________________________________________________________________________________________
                      </a></div>
      </div>
      )}
    }
    let t1 = [<div className="text-1xl font-bold light:text-gray-800">Messages: {sup}</div>]
    return (
      <>{t0}{t1}</>);
  }

  return (
    <div>{tag1()}</div>
  )
}

// The Contract object
const Contract = new ethers.Contract(contractaddrs, Abi, signerw);
const App = ({ Component, pageProps }: AppProps) => {

  function handleChangeMessage(event) {
    const values = event.target.value;
    setSendMessage(values);
  }
   //notify
   const [sendMessage, setSendMessage] = useState("TT");
   const [unlocktext, set_unlocktext] = useState("Please Unlock Wallet");
  // notify function call

  
  const callTag = async () => {
    const { config } = usePrepareContractWrite({
      addressOrName: '0x91fc82f5c588c00985aa264fc7b45ee680110703',
      contractInterface: abi,
      functionName: 'mint',
      args: [sendMessage],
    })
    const { write } = useContractWrite(config)
    try {
      await write?.();
      setSendMessage("2");
    } catch (e) {
      console.log("LOL")
       // addToast({body: e.message, type: "error"});
    }
//const{isLoading,error, write} = useContractWrite({
//  addressOrName:"0x91fc82f5c588c00985aa264fc7b45ee680110703",
//  contractInterface:abi,
//});
    
  };
  return (
    
    <ThemeProvider attribute="class">
      <div className="m-auto bg-white dark:bg-gray-900 dark:text-white">
      
  <QueryClientProvider client={queryClient}>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains}>
            <Component {...pageProps} />
            
            <div className="flex flex-col space-y-2 justify-center mt-6 md:mt-2 px-4 xs:px-0 m-auto max-w-4xl min-w-80 shadow-md rounded-md border border-solid light:border-gray-200 dark:border-gray-500 overflow-hidden">
            <h1 className="m-auto text-center md:mt-8 text-2xl md:text-4xl font-extrabold rotating-hue">
                Tag the Wall! {sendMessage}
              </h1>
              <h2 className="text-1xl text-center font-bold justify-center light:text-gray-800">
        Send your message here
        </h2>
        <textarea className="m-auto text-center w-3/4 justify-center rounded-md border border-solid light:border-gray-200 dark:border-gray-500 "
                                      onChange={e => handleChangeMessage(e)}/>
          
                    <button style={{background: "#00ffff"}} className="btn w-6/12 m-auto rounded-md border border-solid light:border-black dark:border-black" type="button"
                            onClick={callTag}> Send 
                            </button>
                            <div>
              
              </div>  
              <div>
              
              </div>  
            </div>
            <div className="flex flex-col space-y-6 justify-center mt-6 md:mt-12 px-4 xs:px-0 m-auto max-w-4xl min-w-80 shadow-md rounded-md border border-solid light:border-gray-200 dark:border-gray-500 overflow-hidden">

              <h1 className="m-auto text-center md:mt-8 text-4xl md:text-4xl font-extrabold rotating-hue">
                Chat
              </h1>
              <div>
                
                  {tag0()}
                </div>
                
            </div>
          </RainbowKitProvider>
        </WagmiConfig>
</QueryClientProvider>
      </div>
    </ThemeProvider>
  )
}
export default App
