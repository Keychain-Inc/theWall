import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'


import { Toaster } from 'react-hot-toast'

import Navbar from '../components/navbar'


import { useState, useEffect } from 'react'
import { CheckCircleIcon } from '@heroicons/react/solid'


import Button from '../components/button'
import Spinner from '../components/spinner'
import AddressPill from '../components/addressPill'
import DarkModeToggle from '../components/darkModeToggle'


const Home: NextPage = () => {
  return (
    <div className="max-w-screen-xl m-auto pb-4 md:pb-12">
      <Head>
        <title>the Wall</title>
        <meta name="description" content="High Scale, Decentralized Oracles and Data" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster />

      <h1 className="m-auto text-center md:mt-8 text-4xl md:text-6xl font-extrabold">
        Welcome to{' '}
        <a href="https://scry.finance" target="_blank" rel="noreferrer" className="rotating-hue">
        Scry
        </a>
      </h1>


      <a
        href="https://github.com/scryprotocol"
        target="_blank"
        rel="noreferrer"
        className="fixed left-5 bottom-4 flex flex-col"
      >
        <Image className="bg-white rounded-full" src="/github.png" alt="Github Icon" width="35" height="35" />
        </a><a
        href="https://twitter.com/scryprotocol"
        target="_blank"
        rel="noreferrer"
        className="fixed left-16 bottom-4 flex flex-col"
      >
        <Image className="bg-white rounded-full" src="/twitter.png" alt="Github Icon" width="35" height="35" />
      </a>
      <a
        href="https://discord.gg/3Z2qvm9BDg"
        target="_blank"
        rel="noreferrer"
        className="fixed left-5 bottom-14 flex flex-col"
      >
        <Image className="bg-white rounded-full" src="/discord.svg" alt="Github Icon" width="35" height="35" />
      </a>
    
      <style jsx>{`
        .rotating-hue {
          background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          -webkit-animation: hue 30s infinite linear;
        }

        @-webkit-keyframes hue {
          from {
            -webkit-filter: hue-rotate(0deg);
          }
          to {
            -webkit-filter: hue-rotate(-360deg);
          }
        }
      `}</style>
    </div>
  )
}

export default Home
