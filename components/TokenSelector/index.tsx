import { useState ,ReactNode, useEffect} from "react";
import ModalOverlay from "../ModalOverlay"
type props={
    children:ReactNode,
   open:boolean,
   optionSelected:boolean
}
export default function Index({children,open,optionSelected}:props) {

  const [modalState,setModalState]=useState(false);
  const closeModal=()=>{
      setModalState(false);
  }
 useEffect(()=>{
     if(open){
        setModalState(open)
     }
  
 },[open])
 useEffect(()=>{
   
       closeModal();
    
 
},[optionSelected])

 
    return (
        
        <ModalOverlay show={modalState} > 
    
   <div className="flex justify-center  w-full h-full ">
    <div className="max-w-[420px]  md:w-[80%]  bg-white h-[80%] rounded-lg mt-10 p-4">
    
        <div className="flex justify-between">
          <h2 className="text-xl font-mono">Select a token</h2> <button onClick={()=>{closeModal()}} className="scale-125">X</button>
        </div>
        <input type="text" placeholder="SEARCH NAME OR PLACE ADDRESS" className="text-center w-full rounded-3xl my-4 p-4 border-2 border-blue-400"/>
       {children}
    </div>
   </div>   

    </ModalOverlay>
     )
 
    
   
}
