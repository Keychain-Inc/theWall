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

interface IFeatureSectionProps extends React.PropsWithChildren {
  title: string
  description: string
  bgColorOverride?: string
}

const FeatureSection: React.FC<IFeatureSectionProps> = ({ title, description, bgColorOverride, children }) => {
  return (
    <div className="shadow-md rounded-md border border-solid light:border-gray-200 dark:border-gray-500 grid grid-rows-1 md:grid-cols-2 gap-2 overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 light:text-gray-800"> {title}</h2>
        <p className="light:text-gray-600">{description}</p>
      </div>
      <div className={'bg-gray-500 py-10 md:p-0 flex justify-center items-center ' + bgColorOverride}>{children}</div>
    </div>
  )
}

export const WalletConnectSection: React.FC<{}> = () => {
  return (
    <FeatureSection
      title="the Wall"
      description="The Wall allows you to post messages (tags) to the chat wall. These messages are fully on-chain, permissionless and permanant. Please be careful what you post. Messages are wrapped as NFTs allowing each message to be fully ownable. To celebrate Base Onchain Summer, this wall can only be interacted with by being a holder for the Onchain Summer NFT linked here."
      bgColorOverride="bg-blue-500"
    >
      <a href="https://onchainsummer.xyz/" target="_blank" rel="noopener noreferrer">Onchain Summer NFT linked here.</a>
      <div className="p-4 md:px-8 shadow-md bg-white rounded-md light:text-gray-800 dark:text-black">
        <h2 className="text-1xl text-center font-bold mb-2 justify-center light:text-gray-800"> 
      0x9D31e30...2c93abb5 @ 21:21 9/2</h2>
      <div className="text-center light:text-white-600">First</div></div> </FeatureSection>
  )
}
export const WallSection: React.FC<{}> = () => {
  return (<></>
  )
}

const Home: NextPage = () => {
  return (
    <div className="max-w-screen-xl m-auto pb-4 md:pb-12">
      <Head>
        <title>the Wall</title>
        <meta name="description" content="A Permissionless Wall " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster />

      <h1 className="m-auto text-center md:mt-8 text-4xl md:text-6xl font-extrabold">
        Welcome to{' '}
        <a href="https://tagtheWall.org" target="_blank" rel="noreferrer" className="rotating-hue">
          the Wall
        </a>
      </h1>

      <div className="flex flex-col space-y-6 justify-center mt-6 md:mt-12 px-4 xs:px-0 m-auto max-w-4xl">
        <WalletConnectSection />
        <WallSection />
      </div>

      {/* <div className="flex mt-4 space-x-3">
        <div className="flex justify-center mt-8  max-w-4xl m-auto">
          <AdminPanel />
        </div>
      </div> */}

      <a
        href="https://github.com/keychain-inc/thewall"
        target="_blank"
        rel="noreferrer"
        className="fixed left-5 bottom-4 flex flex-col"
      >
        <Image className="bg-white rounded-full" src="/github.png" alt="Github Icon" width="35" height="35" />
        </a><a
        href="https://twitter.com/tagthewall"
        target="_blank"
        rel="noreferrer"
        className="fixed left-16 bottom-4 flex flex-col"
      >
        <Image className="bg-white rounded-full" src="/twitter.png" alt="Github Icon" width="35" height="35" />
      </a>
      <a
        href="https://discord.gg/gFtHRVCDPb"
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
