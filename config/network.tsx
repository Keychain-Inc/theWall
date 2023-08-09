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
<MenuItem value={'0xbbb06bDcf221Ae565f458b990DE83Cbb3D27C2aA'}>Sub Wall</MenuItem>,
]
const PolyC = chain.polygon
const PolyRPC = 'https://developer-access-mainnet.base.org/'
const PolyA = '0xd3233c02adAAE7ad27cA43d03A6b965cd9a638c0'
const PolyN = '0x52C990AA70dD004bfC6f0a7F452a179b146ffee7'

const envVars = {
  chainn:Sep,//chainn,
  rpc: PolyRPC,
    createn: PolyN,
    contractn: PolyA,
    menun:PolyM
}

export default envVars
