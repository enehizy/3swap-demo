import { useState ,ReactNode, useEffect} from "react";
import ModalOverlay from "../ModalOverlay"
type props={
    children:ReactNode,
   open:boolean,
   optionSelected:string|null
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
    <div className="md:max-w-[420px]  w-[90%]  bg-white h-[550px] md:h-[85%]  rounded-lg mt-10 p-4">
    
        <div className="flex justify-between">
          <h2 className="text-xl font-mono">Select a token</h2> <button onClick={()=>{closeModal()}} className="scale-125"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
</svg></button>
        </div>
        <input type="text" placeholder="SEARCH NAME OR PLACE ADDRESS" className="text-center w-full rounded-3xl my-4 p-4 border-2 border-blue-400"/>
       {children}
    </div>
   </div>   

    </ModalOverlay>
     )
 
    
   
}
