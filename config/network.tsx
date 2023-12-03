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
  id: 8453,
  name: 'Base',
  network: 'Base',
  iconUrl: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=023',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'ETH',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: 'https://developer-access-mainnet.base.org/',
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
const PolyM = [<MenuItem value={'0x2287BAF672879935cB944a2C050971515E73da65'}>Main</MenuItem>,
<MenuItem value={'0xf25e4B1989f0Dcb992b02b767Aa12C3f9798DF88'}>Sub Wall</MenuItem>,
]
const PolyC = chain.polygon
const PolyRPC = 'https://developer-access-mainnet.base.org/'
const PolyA = '0x2287BAF672879935cB944a2C050971515E73da65'
const PolyN = '0xC17985AAe8FA383bd4b73028A1d12B87730e2eAe'

const envVars = {

  chainn:chain.arbitrum,//chainn,
  rpc: 'https://arb1.arbitrum.io/rpc',
    createn: '0xC6Da5Fee70AA6A606E4FfD748108C52E16C07444',
    contractn: '0x4766d8244d68874ed6499F085e194be3dC4152AA',
    menun:[<MenuItem value={'0x4766d8244d68874ed6499F085e194be3dC4152AA'}>Main</MenuItem>,
     ]
 }

export default envVars
