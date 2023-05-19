import { useState,useContext,createContext } from "react";

const carContext = createContext();

 const CarHeaderProvider = ({children})=>{
  
  const [orderHeader,setOrderHeader] = useState({

   startDate:"",
   endDate:"",
   origin:"",
   destination:""
  })


  return (
    <carContext.Provider value={[orderHeader,setOrderHeader]}>
    {children}
    </carContext.Provider>
  )
}
const useCar = () => useContext(carContext);
export {CarHeaderProvider,useCar}