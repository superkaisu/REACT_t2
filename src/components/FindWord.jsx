import React, { useEffect, useState } from "react";
import { getWord } from "./ApiSerivce";
import Welcome from "./Welcome";
import { Link } from "react-router-dom";

function FindWord() {
  const [searchWord, setSearchWord] = useState("");
  const [word, setWord] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    var fetchedWord = await getWord(searchWord);
    setWord(fetchedWord); //This is an JSON object

    console.log(word);

    //document.getElementById("fetchedWord").value = word;
  };

  useEffect(() => {
    console.log(word);
    if (word) {
      var newWord = JSON.stringify(word);
      var fixedWord = newWord.slice(9, -2);
      fixedWord = fixedWord.replace(/"/g, "");
      fixedWord = fixedWord.replace(/fin/g, "");
      fixedWord = fixedWord.replace(/eng/g, " ");
      fixedWord = fixedWord.replace(/:/g, "");
      document.getElementById("fetchedWord").value = fixedWord;
    }
  }, [word]);

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
      <textarea id="fetchedWord" rows={2} cols={30} wrap="soft" />
      <br></br>
      <button style={{ padding: "10px", margin: "10px" }}>
        <Link to="/">Etusivulle</Link>
      </button>
    </div>
  );
}

export default FindWord;
