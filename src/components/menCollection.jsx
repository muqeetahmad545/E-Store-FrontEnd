import React, { useContext, useEffect, useState } from "react";
import AppContext from '../context/Context';

const MenCollection = () => {
  const { data, getData } = useContext(AppContext);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    if (data && data.length > 0) {
      const menItems = data.filter(item => item.gender === 'Men');
      setFilteredData(menItems);
    }
  }, [data]);

  return (
    <>
      <div
        className="menCollection"
        style={{ textAlign: "center", marginTop: "20px" }}
      >
        <h3>Men collection</h3>
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
              alt={item.productName}
              style={{ width: "100%" }}
            />
            <div style={{ padding: "10px" }}>
              <p>{item.gender}</p>
              <p>{item.productDescription}</p>
              <p>{item.brand}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MenCollection;
