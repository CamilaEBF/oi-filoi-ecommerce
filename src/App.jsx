import "./App.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navigation/NavBar";
import ItemListContainer from "./components/main/ItemListContainer";
import ItemDetailContainer from "./components/main/ItemDetailContainer";
import NotFound from "./NotFound";
import Cart from "./components/cart/Cart";
import CacheProvider from "./context/CacheProvider";

function App() {
  return (
    <CacheProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CacheProvider>
  );
}

export default App;
