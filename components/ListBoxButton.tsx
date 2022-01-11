import { Listbox } from "@headlessui/react"
import { useState } from "react"
import TokenSelector from './TokenSelector';
const tokenList=['eth','bnb','cake','tron','sol']
export default function ListBoxButton() {
    const [selected,setSelected] =useState('SELECT A TOKEN');
    const [optionSelected,setOptionSelected]=useState(false)
    return (
      
    <Listbox as="div" value={selected} onChange={setSelected}>
        {({open})=>(
           <>
           
           <Listbox.Button className="block bg-blue-400 text-white border-2 border-blue-400 p-2 rounded-xl absolute top-[10px] right-0 px-4 mr-3">
                {selected}
            </Listbox.Button>
         
           
               
             <TokenSelector open={open} optionSelected={optionSelected}>
                
            <div>
            
                <Listbox.Options>
               
                    {tokenList.map((token)=>(
    
                    <Listbox.Option key={token} value={token} as="div" className="divide-blue-200">
                        {({selected,active})=>(
                            <button className=" w-full p-4 text-left my-1 font-semibold hover:bg-blue-400/10 " onClick={()=>{setOptionSelected(!optionSelected)}}>{`${token}`.toUpperCase()}</button>
                       
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
