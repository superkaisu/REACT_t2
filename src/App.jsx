import { useState } from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import FindWord from "./components/FindWord";
import AddWord from "./components/AddWord";

function App() {
  return (
    <>
      <Welcome />
      <FindWord />
      <AddWord />
    </>
  );
}

export default App;
