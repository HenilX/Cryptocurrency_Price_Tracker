import "./App.css";
import React from "react";
import navi from "./mycomp/header";
import footer from "./mycomp/stock";
import home from "./mycomp/crypto";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Textform from "./mycomp/textform";

function App() {
  return (
    <>
      <div className="res">
        <BrowserRouter>
          <div className="header">
            {navi()}
            
            <Routes>
              <Route path="/home" element={home()} />
              <Route path="/market" element={footer()} />
              <Route path="/textform" element={Textform()} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
