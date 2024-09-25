import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

function Welcome() {
  return (
    <div>
      <h1>Tervetuloa sanakirjaan</h1>
      <nav>
        <button style={{ padding: "10px", margin: "10px" }}>
          <Link to="/">Etusivulle</Link>
        </button>
        <button style={{ padding: "10px", margin: "10px" }}>
          <Link to="/find">Etsi sana</Link>
        </button>
        <button style={{ padding: "10px", margin: "10px" }}>
          <Link to="/add">Lisää uusi sana</Link>
        </button>
      </nav>
    </div>
  );
}

export default Welcome;
