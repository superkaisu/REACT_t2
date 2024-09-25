import { useState } from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import FindWord from "./components/FindWord";
import AddWord from "./components/AddWord";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/find" element={<FindWord />} />
          <Route path="/add" element={<AddWord />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
