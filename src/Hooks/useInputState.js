import { useState } from "react"

const useInputState=(DefaultValue=null)=>{
    const [InputValue,setInputValue]=useState(DefaultValue);
    // const handleChange=e=>{
    //      setInputValue(e.target.value);
    // }
    // return [InputValue,handleChange];
    const OnChange=e=>{
         setInputValue(e.target.value);
    }
    return {
        InputValue,
        OnChange
    };
}
export default useInputState;