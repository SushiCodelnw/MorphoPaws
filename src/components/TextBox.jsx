import { useState, useEffect, useRef } from "react";

export default function TextBox({ word, speaker, hide, nextList, onClick }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!word) return;
    let index = -1;
    setDisplayedText("");
    setIsTyping(true);

    intervalRef.current = setInterval(() => {
      if (index < word.length - 1) {
        setDisplayedText((prev) => prev + word[index]);
        index++;
      } else {
        clearInterval(intervalRef.current);
        setIsTyping(false);
      }
    }, 30);

    return () => clearInterval(intervalRef.current);
  }, [word]);

  const handleClick = () => {
    if (isTyping) {
      clearInterval(intervalRef.current);
      setDisplayedText(word);
      setIsTyping(false);
    } else {
      onClick();
      nextList();
    }
  };

  return (
    <div className="text-box" onClick={handleClick}>
      <h1 className="-speaker">{speaker}</h1>
      <p className="-text">{displayedText}</p>
    </div>
  );
}
