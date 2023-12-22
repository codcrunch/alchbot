"use client";

import { useState } from "react";
import axios from "axios";

const ChatInterface = () => {
  const [inputText, setInputText] = useState("");
  const [response, setResponse] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Sending message:", inputText);

    const postmessage = {
      message: inputText,
    };

    try {
      const url = "https://alchbot-fmaprfvioa-de.a.run.app";
      const { data } = await axios.post(url, postmessage);
      console.log("Response:", data);
      setResponse(data.response);
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
      {response && <p>Response: {response}</p>}
    </div>
  );
};

export default ChatInterface;
