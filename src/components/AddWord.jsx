import React from "react";
import { addNewWord } from "./ApiSerivce";
import { useState } from "react";
import { Link } from "react-router-dom";

// DOES NOT WORK PROPERLY?
function AddWord() {
  var word = "";
  const [translation, setTranslation] = useState("");
  const [finnish, setFinnish] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newWord = `{"fin": "${finnish}", "eng": "${translation}"}`;
    word = newWord;

    console.log(word);
    var JSONstring = JSON.parse(word);
    console.log(JSONstring);

    try {
      await addNewWord(JSONstring);
      console.log("Word added");
    } catch (error) {
      console.error("Error adding word", error);
    }
  };

  return (
    <div>
      <h2>Lisää sana</h2>
      <form onSubmit={handleSubmit} id="addWord">
        <input
          name="newWordFin"
          id="newWordFin"
          type="text"
          placeholder="Kirjoita sana"
          onChange={(e) => setFinnish(e.target.value)}
        />
        <input
          name="newWordEng"
          id="newWordEng"
          type="text"
          placeholder="Kirjoita käännös"
          onChange={(e) => setTranslation(e.target.value)}
        />
        <input name="submit" id="submit" type="Submit" value="Lisää" />
      </form>
      <br></br>
      <button style={{ padding: "10px", margin: "10px" }}>
        <Link to="/">Etusivulle</Link>
      </button>
    </div>
  );
}

export default AddWord;
