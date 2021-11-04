
import {useEffect} from "react"
import {connect} from "react-redux"
import { getData } from "./actions/data";
import Header from "./components/header/Header"
import TableData from "./components/tableData/TableData"
import Topbar from "./components/topbar/Topbar"

function App({getData}) {
  // const getMyData=async()=>{
  //   // axios.defaults.headers={"Access-Control-Allow-Origin":"*"}
  //   const config = {
  //     method: 'get',
  //     url: "https://api.coincap.io/v2/assets",
  //     headers: {
  //       // 'Access-Control-Allow-Origin': '*',
  //     },
  //   };
  
  //   const res=await axios.request(config)
  //   setData(res.data.data)
  // }
  useEffect(()=>{
    getData();
  },[getData])
  
  return (
   <div>
     <Header/>
     <Topbar/>
     <TableData/>
     {/* <Footer/> */}
     {/* <Topbar/> */}
   </div>
  );
}

export default connect(null,{getData})(App);
