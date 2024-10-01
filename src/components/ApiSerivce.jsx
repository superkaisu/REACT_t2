import React from "react";
import { useState } from "react";

const API_BASE_URL = "http://localhost:3000";

export const getAllWords = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/words`);
    const allWords = await response.json();
    return allWords;
  } catch (error) {
    console.error("Error fetching all words", error);
  }
};

// Uses getAllWords to fetch the whole dictionary - not the best way to do thi,
// but using the given code, the function is implemented like this
export const getWord = async (searchWord) => {
  try {
    await getAllWords();
    const response = await fetch(`${API_BASE_URL}/words/${searchWord}`);
    const word = await response.json();
    return word;
  } catch (error) {
    console.error("Error fetching word", error);
  }
};

// Backend funktio tarvitsee JSON-objectin, joka sisältää sanan ja käännöksen
export const addNewWord = async (wordString) => {
  const path = "http://localhost:3000/words";

  console.log(wordString);

  try {
    const response = await fetch(path, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json", //tarviiko tämä "" Acceptin ympärille? Prettier formatoi näin.
      },
      body: wordString,
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return data;
  } catch (error) {
    console.error("Error adding word", error);
    throw error;
  }
};
