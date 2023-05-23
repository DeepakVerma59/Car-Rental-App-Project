import { useState,useContext,createContext,useEffect } from "react";

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

  useEffect(()=>{
    let data = localStorage.getItem("order");
    if(data){
     const parsedData = JSON.parse(data);
     setOrderHeader({
         startDate:parsedData.startDate,
         endDate:parsedData.endDate,
         origin:parsedData.origin,
         destination:parsedData.destination
     })
   }
   },[])

  const [carData, setCarData] = useState({
    name:"",
    adminId:"",
    _id:"",
    pricePerKm:""
  });

  useEffect(()=>{
    let data = localStorage.getItem("cardata");
    if(data){
      const parsedData = JSON.parse(data);
      setCarData({
        ...carData,
         name:parsedData.name,
         adminId:parsedData.adminId,
         _id:parsedData._id,
         pricePerKm:parsedData.pricePerKm
      })
    }
  },[])



  return (
    <carContext.Provider value={[orderHeader,setOrderHeader,carData,setCarData]}>
    {children}
    </carContext.Provider>
  )
}
const useCar = () => useContext(carContext);
export {CarHeaderProvider,useCar}