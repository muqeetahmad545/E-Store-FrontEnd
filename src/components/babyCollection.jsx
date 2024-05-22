import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/Context';

const BabyCollection = () => {
  const { data, getData } = useContext(AppContext);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    if (data && data.length > 0) {
      const babyItems = data.filter(item => item.gender === 'Baby');
      console.log("babycollection", babyItems)
      setFilteredData(babyItems);
    }
  }, [data]);

  return (
    <>
      <div
        className="babyCollection"
        style={{ textAlign: "center", marginTop: "20px" }}
      >
        <h3>Baby collection</h3>
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

export default BabyCollection;
