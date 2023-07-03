import React, { useState } from "react";
import "../styles/Reverse.css";

const ReverseText = () => {
  const [inputText, setInputText] = useState("");
  const [reversedText, setReversedText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleReverse = () => {
    const words = inputText.split(" ");
    const reversedWords = words.reverse();
    const reversedText = reversedWords.join(" ");
    setReversedText(reversedText);
    setInputText(""); // Borra el texto en el input
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleReverse();
    }
  };

  return (
    <div className="reverse-container">
      <div className="input-container">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Escribe lo que quieras!"
          className="inputverse"
        />
        <button  className="reverse-button" onClick={handleReverse}>🔄</button>
      </div>
      <p className="reversed-text">Texto Invertido:<p className="resultreverse">{reversedText}</p> </p>
    </div>
  );
};

export default ReverseText;
