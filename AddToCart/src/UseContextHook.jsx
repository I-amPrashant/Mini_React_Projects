import React, { createContext, useState } from "react";

const myContext = createContext();

const ContextProvider = ({ children }) =>{
  const [totalBookmark, setTotalBookmark] = useState(0);
  const [bookmarkItems, setBookmarkItems] = useState([]);
  const [modalData, setModalData] = useState({});
  const [imagesList, setImagesList] = useState([]);

  return (
    <myContext.Provider
      value={{
        totalBookmark,
        setTotalBookmark,
        bookmarkItems,
        setBookmarkItems,
        modalData,
        setModalData,
        imagesList,
        setImagesList
      }}
    >
      {children}
    </myContext.Provider>
  );
};

export { myContext, ContextProvider };
