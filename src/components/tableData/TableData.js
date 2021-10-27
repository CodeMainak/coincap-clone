import React, { useState,useEffect } from 'react'
import "./tableData.css"
function TableData({data}) {
  const [allData,setAllData]=useState([]);
  // const [displayData,setDisPlayData]=useState();
  const dataPerPage=50;
  const [currentPage,setCurrentPage]=useState(1);
  console.log("Data",data)

 
  useEffect(() => {
    setAllData(data)
  }, [data])
  if(!allData) return null
    return (
      <>
      <table className="table table-striped container customTable text-secondary">
      <thead>
        <tr>
          <th scope="col">Rank  </th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Market Cap</th>
          <th scope="col" className="d-none d-lg-table-cell d-xl-table-cell">VWAP(24Hr)</th>
          <th scope="col"  className="d-none d-lg-table-cell d-xl-table-cell">Supply</th>
          <th scope="col"  className="d-none d-md-table-cell d-lg-table-cell d-xl-table-cell">Volume(24Hr)</th>
          <th scope="col"  className="d-none d-lg-table-cell d-xl-table-cell">Change(24Hr)</th>
        </tr>
      </thead>
      <tbody>
        {allData?allData.slice(0,currentPage*dataPerPage).map(item=> <tr key={item.rank}>
          <th scope="row">{item.rank?item.rank:null}</th>
          <td><img src={`https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`} alt="logo" style={{height:"30px"}}/> {item.id?item.id:null} <br/></td>
          <td>${item.priceUsd? item.priceUsd.split(".")[0]+"."+item.priceUsd.split(".")[1].substr(0,2):null}</td>
          <td>${item.marketCapUsd?item.marketCapUsd.split(".")[0]+"."+item.marketCapUsd.split(".")[1].substr(0,2):null}</td>
          <td  className="d-none d-lg-table-cell d-xl-table-cell">${item.vwap24Hr?item.vwap24Hr.split(".")[0]+"."+item.vwap24Hr.split(".")[1].substr(0,2):null}</td>
          <td  className="d-none d-lg-table-cell d-xl-table-cell">{item.supply?item.supply.split(".")[0]+"."+item.supply.split(".")[1].substr(0,2):null}</td>
          <td  className="d-none d-md-table-cell d-lg-table-cell d-xl-table-cell">${item.volumeUsd24Hr?item.volumeUsd24Hr.split(".")[0]+"."+item.volumeUsd24Hr.split(".")[1].substr(0,2):null}</td>
          <td  className="d-none d-lg-table-cell d-xl-table-cell " style={{color:item.changePercent24Hr<0?"red":"green"}}>{item.changePercent24Hr? item.changePercent24Hr.split(".")[0]+"."+item.changePercent24Hr.split(".")[1].substr(0,2):null}%</td>
        </tr>):null}
       
        
      </tbody>
    </table>
    <div className="topbar"><button className="view_more" onClick={e=>setCurrentPage(currentPage+1)} style={{position:"relative",top:"-80px"}}>View More</button></div>
    </>
    )
}

export default TableData
