import React, { useEffect, useRef, useState } from "react";

const BotResponse = ({ response }) => {
  const [botResponse, setBotResponse] = useState("");
  const containerRef = useRef(null);

  useEffect(() => {
    let index = 1;
    let msg = setInterval(() => {
      setBotResponse(response.slice(0, index));
      if (index >= response.length) {
        clearInterval(msg);
      }
      index++;
    }, 100);
  }, [response]);

  
  const scrollToBottom = () => {
    containerRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [botResponse]);

  return (
    <pre ref={containerRef}>
      {botResponse}
      {botResponse === response ? "" : "|"}
    </pre>
  );
};

export default BotResponse;
