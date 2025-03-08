/* eslint-disable react/prop-types */
import  { useState, useEffect } from 'react';

export const TypewriterEffect = ({ text, speed = 100, wordsPerLine = 3 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
//   const [currentLine, setCurrentLine] = useState(0);
  const [line, setLine] = useState(1); // Track the current line

  // Split the text into words
  const words = text.split(' ');

  useEffect(() => {
    if (index < words.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + (index > 0 ? ' ' : '') + words[index]);
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else {
      // After finishing a line, start a new line after a delay
      const nextLineDelay = setTimeout(() => {
        if (line * wordsPerLine < words.length) {
          setLine(line + 1);
          setIndex(line * wordsPerLine);
          setDisplayedText('');
        } else {
          setIndex(0); // Reset to start typing from the first word
          setLine(1); // Reset line counter
        }
      }, speed * 1); // Delay before starting the next line

      return () => clearTimeout(nextLineDelay);
    }
  }, [index, line, words, speed, wordsPerLine]);

  return (
    <div className="typewriter">
      <textarea className="typewriter-textarea" value={displayedText} rows={20} cols={50} />
      {/* {displayedText} */}
      <br />
    </div>
  );
};

// export default TypewriterEffect;
