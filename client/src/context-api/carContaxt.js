import { useState,useContext,createContext } from "react";

const carContext = createContext();

 const CarHeaderProvider = ({children})=>{
  
  const [orderHeader,setOrderHeader] = useState({

   startDate:"",
   endDate:"",
   origin:"",
   destination:"",
   bookingDate:"",
   bookingTime:""
  })
  const [carData, setCarData] = useState({});




  return (
    <carContext.Provider value={[orderHeader,setOrderHeader,carData,setCarData]}>
    {children}
    </carContext.Provider>
  )
}
const useCar = () => useContext(carContext);
export {CarHeaderProvider,useCar}