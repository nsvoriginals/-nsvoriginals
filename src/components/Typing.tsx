import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin'; // Import the text plugin

// Register the TextPlugin
gsap.registerPlugin(TextPlugin);

type TypingEffectProps = {
  text: string;
  typingSpeed: number;
};

const TypingEffect: React.FC<TypingEffectProps> = ({ text, typingSpeed }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const fullText = useRef<string>('');

  useEffect(() => {
    fullText.current = text; // Store the full text
    typeText(); // Start typing effect

    // Cleanup function to reset the text on component unmount
    return () => {
      if (textRef.current) {
        textRef.current.textContent = '';
      }
    };
  }, [text]);

  const typeText = () => {
    const totalLength = fullText.current.length;

    // Create a typing effect using GSAP
    gsap.to(textRef.current, {
      text: fullText.current, // Set the final text directly
      duration: totalLength * (typingSpeed / 1000), // Move duration here
      ease: 'none',
      onStart: () => {
        // Optional: Start with an empty text
        if (textRef.current) {
          textRef.current.textContent = '';
        }
      },
    });
  };

  return (
    <div ref={textRef} className="text" />
  );
};

export default TypingEffect;
