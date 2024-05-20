// import React, { useState } from 'react'
// export const AppContext = React.createContext()

// const AppProvider = ({ children }) => {
//   const [dashboard, setDashboard] = useState('timeline')
//   const [uploadedcontent, setUploadedcontent] = useState([])
//   return (
//     <AppContext.Provider
//       value={{
//         dashboard,
//         setDashboard,
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   )
// }

// export default AppProvider

// import React from "react";

// const AppContext = React.createContext();

// module.exports = AppContext;



import { createContext } from 'react';

const AppContext = createContext();

export default AppContext;
