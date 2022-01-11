import React ,{}from 'react';
type props={
    button:()=>JSX.Element
}
export default function ListBoxInput({button}:props) {
    const Button=button;
    return (
    <div className="relative my-2">
        
        <input type="number" placeholder="0.0" className="block  p-4 bg-[#f8f8f8] rounded-2xl w-full text-3xl accent-[#ccc]"  />
        <Button/> 
     </div>)
}
