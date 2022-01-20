import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';
import { useState } from 'react';
import ListBoxButton from '../components/ListBoxButton';
import ListBoxInput from '../components/ListBoxInput';
import TokenSelector from '../components/TokenSelector';

const Home: NextPage = () => {
  
  return (
    <>
  <div className="flex justify-center items-center w-full mt-10">
     <div className="p-6 w-[90%] md:max-w-[500px] border rounded-2xl">
     <header className='h-8 mb-5'>
       {/* <h2 className="font-mono text-xl">3SWAP</h2> */}
       <img src="/3swap-logo.png" className="h-full "/>
     </header>
   <ListBoxInput button={()=><ListBoxButton/>}/> 
   <ListBoxInput button={()=><ListBoxButton/>}/> 
    
    <div className="mt-12">
    <ListBoxInput button={()=><ListBoxButton/>}/> 
    </div>

    <button className="disabled:opacity-40 w-full text-center mt-10 text-white bg-blue-400 p-4 rounded-3xl"  disabled>Swap</button>
    </div>
  </div>
 

 
 
 
    
    </>
  )
}

export default Home;