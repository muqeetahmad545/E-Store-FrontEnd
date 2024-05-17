// import React, { useState } from "react";

// const babyCollection = () => {
//   const babyItems = [
//     {
//       id: 1,
//       title: "Item 1",
//       description: "Description 1",
//       imageUrl: "https://via.placeholder.com/150",
//     },
//     {
//       id: 2,
//       title: "Item 2",
//       description: "Description 2",
//       imageUrl: "https://via.placeholder.com/150",
//     },
//     {
//       id: 3,
//       title: "Item 3",
//       description: "Description 3",
//       imageUrl: "https://via.placeholder.com/150",
//     },
//     {
//       id: 4,
//       title: "Item 4",
//       description: "Description 4",
//       imageUrl: "https://via.placeholder.com/150",
//     },
//     {
//       id: 5,
//       title: "Item 5",
//       description: "Description 5",
//       imageUrl: "https://via.placeholder.com/150",
//     },
//   ];

//   return (
//     <>
//       <div
//         className="babyCollection"
//         style={{ textAlign: "center", marginTop: "20px" }}
//       >
//         <h3>Baby collection</h3>
//       </div>
//       <div
//         style={{
//           display: "flex",
//           margin: "50px",
//           marginTop: "20px",
//         }}
//       >
//         {babyItems.map((item) => (
//           <div
//             key={item.id}
//             style={{ width: "350px", margin: "10px", border: "1px solid #ccc" }}
//           >
//             <img
//               src={item.imageUrl}
//               alt={item.title}
//               style={{ width: "100%" }}
//             />
//             <div style={{ padding: "10px" }}>
//               <h3>{item.title}</h3>
//               <p>{item.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default babyCollection;




import React, { useState } from 'react';

const BabyCollection = (props) => {
  const [text, setText] = useState('Enter Text');

  const handleChange = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };

  return (
    <div className="mb-3">
      <h6>{props.name}</h6>
      <textarea
        className="form-control"
        id="myBox"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="8"
      ></textarea>
      <button className='btn btn-primary' onClick={handleChange}>Convert to Uppercase</button>
    </div>
  );
};

export default BabyCollection;
