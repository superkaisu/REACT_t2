import React from "react";
import { addNewWord } from "./ApiSerivce";
import { useState } from "react";

// DOES NOT WORK PROPERLY?
function AddWord() {
  const [word, setWord] = useState([]);
  const [translation, setTranslation] = useState("");
  const [finnish, setFinnish] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newWord = finnish + translation;
    setWord(newWord);

    console.log(word);

    try {
      await addNewWord(newWord);
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
    </div>
  );
}

export default AddWord;
