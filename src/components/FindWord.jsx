import React, { useEffect, useState } from "react";
import { getWord } from "./ApiSerivce";
import Welcome from "./Welcome";

function FindWord() {
  const [searchWord, setSearchWord] = useState("");
  const [word, setWord] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    var fetchedWord = await getWord(searchWord);
    setWord(fetchedWord); //This is an JSON object

    console.log(word);

    var newWord = JSON.stringify(word);
    var fixedWord = newWord.slice(9, -2);

    document.getElementById("fetchedWord").value = fixedWord;
  };

  return (
    <div>
      <h2>Etsi sanaa</h2>
      <form onSubmit={handleSubmit} id="findWord">
        <input
          type="text"
          name="inputWord"
          id="inputWord"
          placeholder="Kirjoita sana"
          onChange={(e) => setSearchWord(e.target.value)}
        />
        <input type="submit" name="search" id="search" value="Etsi" />
      </form>
      <input id="fetchedWord" />
    </div>
  );
}

export default FindWord;
