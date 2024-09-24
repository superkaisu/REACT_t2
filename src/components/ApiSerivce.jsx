import React from "react";
import { useState } from "react";

const API_BASE_URL = "http://localhost:3000";

export const getWord = async (searchWord) => {
  try {
    const response = await fetch(`${API_BASE_URL}/words/${searchWord}`);
    const words = await response.json();
    return words;
  } catch (error) {
    console.error("Error fetching word", error);
  }
};

// Backend funktio tarvitsee JSON-objectin, joka sisältää sanan ja käännöksen
export const addNewWord = async (wordString) => {
  const settings = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: wordString,
  };
  try {
    const response = await fetch(`${API_BASE_URL}/words`, settings);

    return response.json();
  } catch (error) {
    console.error("Error adding word", error);
    throw error;
  }
};
