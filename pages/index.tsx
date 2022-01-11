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
     <div className="p-4 w-[80%] md:max-w-[500px] border rounded-2xl">
     <header>
       <h2 className="font-mono text-xl">3SWAP</h2>
     </header>
   <ListBoxInput button={()=><ListBoxButton/>}/> 
   <ListBoxInput button={()=><ListBoxButton/>}/> 
    
    <div className="mt-12">
    <ListBoxInput button={()=><ListBoxButton/>}/> 
    </div>

    <button className="w-full text-center mt-10 text-white bg-blue-400 p-4 rounded-3xl"  disabled>Swap</button>
    </div>
  </div>
 

 
 
 
    
    </>
  )
}

export default Home;