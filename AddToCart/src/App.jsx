import React, { useState} from "react";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import { ContextProvider} from "./UseContextHook";

export default function App(){
  return (
    <ContextProvider>
      <div className="main-container">
        <Navbar/>
        <ProductList/>
      </div>
    </ContextProvider>
  );
}
