import { Network, Alchemy } from 'alchemy-sdk';
import { Chain } from '@rainbow-me/rainbowkit';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { chain, configureChains, createClient, WagmiConfig, useContractWrite } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { RainbowKitChainProvider } from '@rainbow-me/rainbowkit/dist/components/RainbowKitProvider/RainbowKitChainContext'
import MenuItem from '@mui/material/MenuItem';
import { useEffect, useState } from "react";
import React from 'react';

const Sep: Chain = {
  id: 11155111,
  name: 'Sepolia',
  network: 'Sepolia',
  iconUrl: 'https://cryptologos.cc/logos/fantom-ftm-logo.svg?v=023',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: '',
    symbol: '',
  },
  rpcUrls: {
    default: 'https://rpc.sepolia.org'//'https://rpc.ftm.tools/',
  },
  blockExplorers: {
    default: { name: 'FTM', url: '	https://ftmscan.com/' },
  },
  testnet: false,
};
const FTMRPC = 'https://rpc.ftm.tools/'
const FTMA = '0x0947ef8Bf078b8201013c77C39b5f0A5Bb8f58EC'
const FTMN = '0xBE153Eb48062ba3892C10389844643d37cedA639'
const FTMM = <MenuItem value={'0x0947ef8Bf078b8201013c77C39b5f0A5Bb8f58EC'}>Main</MenuItem>
const BSCC: Chain = {
  id: 56,
  name: 'Binance Chain',
  network: 'BSC',
  iconUrl: 'https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=023',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'BSC',
    symbol: 'BNB',
  },
  rpcUrls: {
    default: 'https://bsc-dataseed.binance.org/'//'https://rpc.ftm.tools/',
  },
  blockExplorers: {
    default: { name: 'B', url: '	https://bscscan.com/' },
  },
  testnet: false,
};
const BSCRPC = 'https://bsc-dataseed.binance.org/'
const BSCA = '0x18C519E0dA619d017908aFf504e782E381552620'
const BSCN = '0xB8112446078378f0998FBf834D4683B6C8Ac08C7'
const BSCM = [<MenuItem value={'0x18C519E0dA619d017908aFf504e782E381552620'}>Main</MenuItem>]
const PolyM = [<MenuItem value={'0xD70deA1a28CbaC32ab1B7531DB30d6a178671837'}>Main</MenuItem>,
<MenuItem value={'0x3783b8DAf1B14d8e556ec1C681CEB0056157e810'}>Sub Wall</MenuItem>,
]
const PolyC = chain.polygon
const PolyRPC = 'https://rpc.sepolia.org'
const PolyA = '0x9B7F8BFFc979479D887BDbbbDA5e57272a6871f8'
const PolyN = '0x99029716DEeE316894DC8ce4f55Ab066222AACe6'

const envVars = {
  chainn:Sep,//chainn,
  rpc: PolyRPC,
    createn: PolyN,
    contractn: PolyA,
    menun:PolyM
}

export default envVars
