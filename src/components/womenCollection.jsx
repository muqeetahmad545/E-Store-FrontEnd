import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/Context";

const WoMenCollection = () => {
const {data ,getData} = useContext(AppContext)
const [filteredData,setFilteredData] = useState([]);

useEffect(()=>{
  getData()
},[getData])


useEffect(()=>
{
  if (data&&data.length>0){
    const woMenItems= data.filter(item=>item.gender==='Women')
    console.log("woMenItems",woMenItems)
    setFilteredData(woMenItems)
  }
},[data]);
  return (
    <>
      <div
        className="woMenCollection"
        style={{ textAlign: "center", marginTop: "20px" }}
      >
        <h3>Women collection</h3>
      </div>
      <div
        style={{
          display: "flex",
          margin: "50px",
          marginTop: "20px",
        }}
      >
        {filteredData.map(item => (
          <div
            key={item.id}
            style={{ width: "350px", margin: "10px", border: "1px solid #ccc" }}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              style={{ width: "100%" }}
            />
            <div style={{ padding: "10px" }}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WoMenCollection;
