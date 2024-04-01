import React from "react";

const MenCollection = () => {
  const menItems = [
    {
      id: 1,
      title: "Item 1",
      description: "Description 1",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Item 2",
      description: "Description 2",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Item 3",
      description: "Description 3",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Item 4",
      description: "Description 4",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      title: "Item 5",
      description: "Description 5",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

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
        {menItems.map((item) => (
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

export default MenCollection;
