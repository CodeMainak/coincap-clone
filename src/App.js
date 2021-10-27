import axios from "axios";
import React,{useState,useEffect} from "react"
import Header from "./components/header/Header"
import TableData from "./components/tableData/TableData"
import Topbar from "./components/topbar/Topbar"
// import Footer from "./components/footer/Footer"
function App() {
  const [data,setData]=useState();
  const getMyData=async()=>{
    const res=await axios.get("https://api.coincap.io/v2/assets")
    setData(res.data.data)
    console.log("MyData",res);
  }
  useEffect(()=>{
      getMyData()
  },[])
  return (
   <div>
     <Header/>
     <Topbar/>
     <TableData data={data}/>
     {/* <Footer/> */}
     {/* <Topbar/> */}
   </div>
  );
}

export default App;
