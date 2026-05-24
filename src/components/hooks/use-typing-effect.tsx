import { useState, useEffect, useRef } from 'react';

export const useTypingEffect = (text: string, speed: number) => {
  const [displayedText, setDisplayedText] = useState('');
  const indexRef = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setDisplayedText('');
    indexRef.current = 0;

    const type = () => {
      if (indexRef.current < text.length) {
        // 1. Capture the current index in a local variable
        const currentIndex = indexRef.current;
        
        // 2. Use the local variable inside the setter
        setDisplayedText((prev) => prev + text.charAt(currentIndex));
        
        // 3. Increment the ref for the next cycle
        indexRef.current++;
        timeoutRef.current = setTimeout(type, speed);
      }
    };

    timeoutRef.current = setTimeout(type, speed);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text, speed]);

  return displayedText;
};