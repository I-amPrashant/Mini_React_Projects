import React, { createContext, useState } from "react";

const myContext = createContext();

const ContextProvider = ({ children }) =>{
  const [totalBookmark, setTotalBookmark] = useState(0);
  const [bookmarkItems, setBookmarkItems] = useState([]);


  return (
    <myContext.Provider
      value={{
        totalBookmark,
        setTotalBookmark,
        bookmarkItems,
        setBookmarkItems,
      }}
    >
      {children}
    </myContext.Provider>
  );
};

export { myContext, ContextProvider };
