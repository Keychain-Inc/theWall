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

const FTMC: Chain = {
  id: 250,
  name: 'Fantom',
  network: 'fantom',
  iconUrl: 'https://cryptologos.cc/logos/fantom-ftm-logo.svg?v=023',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'Fantom',
    symbol: 'FTM',
  },
  rpcUrls: {
    default: 'https://rpc.ftm.tools'//'https://rpc.ftm.tools/',
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
const PolyM = [<MenuItem value={'0x4989314F8cb5b382FEdB339bdF9604fF1fbfdC79'}>Main</MenuItem>,
<MenuItem value={'0x3c82EBe821Fdf1CC734046d1D245eE0FC05F9d58'}>Weebs</MenuItem>,
<MenuItem value={'0x503D749c21720E8B0d7A39809AfeC02bdeb014bc'}>Polygon</MenuItem>,
<MenuItem value={'0x4B233C47dC9C456dBaaa9af138F54b03CFcDED6E'}>ENS</MenuItem>,
<MenuItem value={'0x6A98F6F6F27E53089857333fc036Ab98719fAe75'}>Sushiswap</MenuItem>
]
const PolyC = chain.polygon
const PolyRPC = 'https://polygon-rpc.com'
const PolyA = '0x4989314F8cb5b382FEdB339bdF9604fF1fbfdC79'
const PolyN = '0xC6Da5Fee70AA6A606E4FfD748108C52E16C07444'

const envVars = {
  chainn:FTMC,//chainn,
  rpc: FTMRPC,
    createn: FTMN,
    contractn: FTMA,
    menun:FTMM
}

export default envVars
