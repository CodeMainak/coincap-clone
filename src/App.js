import axios from "axios";
import React,{useState,useEffect} from "react"
import Header from "./components/header/Header"
import TableData from "./components/tableData/TableData"
import Topbar from "./components/topbar/Topbar"
// import Footer from "./components/footer/Footer"
function App() {
  const [data,setData]=useState();
  const getMyData=async()=>{
    // axios.defaults.headers={"Access-Control-Allow-Origin":"*"}
    const config = {
      method: 'get',
      url: "https://api.coincap.io/v2/assets",
      headers: {
        // 'Access-Control-Allow-Origin': '*',
      },
    };
  
    const res=await axios.request(config)
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
