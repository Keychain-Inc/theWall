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

const FTM: Chain = {
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

const envVars = {
  chainn:chain.polygon,
  rpc: 'https://rpc.ftm.tools/',
    createn: '0xBE153Eb48062ba3892C10389844643d37cedA639',
    contractn: '0x0947ef8Bf078b8201013c77C39b5f0A5Bb8f58EC',
    menun:[<MenuItem value={'0x0947ef8Bf078b8201013c77C39b5f0A5Bb8f58EC'}>Main</MenuItem>]
  }

export default envVars
