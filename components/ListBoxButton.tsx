import { Listbox } from "@headlessui/react"
import { useState } from "react"
import TokenSelector from './TokenSelector';
import Token from './TokenSelector/token'
import TokenList from '../TokenList.json';

// const tokenList=['eth','bnb','cake','tron','sol']
const tokenList=TokenList.tokenList;
type tList={
   address:string,
   symbol:string,
   logoURI:string
}

export default function ListBoxButton() {
    const [selected,setSelected] =useState<tList|null>(null);
    return (
      
    <Listbox as="div" value={selected} onChange={setSelected}>
        {({open})=>(
           <>
           
           <Listbox.Button className={` flex ${!selected?'bg-blue-400 text-white  border-blue-400 ':'bg-gray-50 border-gray-50'} border-2 p-2 rounded-2xl absolute top-[10px] right-0 px-4 mr-3`}>
                {selected?<Token symbol={selected.symbol} logoURI={selected.logoURI} address={selected.address}/>:'SELECT A TOKEN'} <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
</svg>
            </Listbox.Button>
         
           
               
             <TokenSelector open={open} optionSelected={(selected?.symbol|| null)}>
                
            <div>
            
                <Listbox.Options className=" h-auto overflow-y-scroll mt-4" style={{height:10 * tokenList.length}}>
                    
               
                    {tokenList.map((token)=>(
    
                    <Listbox.Option key={token.symbol} value={token} as="div" className="divide-blue-200">
                        {({selected:isSelected,active})=>(
                            
                             <button disabled={isSelected} className="disabled:bg-blue-100 disabled:opacity-30  w-full p-4 text-left my-1 font-semibold hover:bg-blue-400/10 flex" >
                                <Token symbol={token.symbol} address={token.address} logoURI={token.logoURI}/></button>
                            
                          
                        
                        )}
                    </Listbox.Option>
           

                    ))}
               
                </Listbox.Options>
                
                
           
            </div>
              </TokenSelector>
            

            </>
      )}
        
    </Listbox>
     
    )
}
