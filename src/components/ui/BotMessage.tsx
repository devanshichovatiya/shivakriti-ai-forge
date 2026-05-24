
import { useTypingEffect } from '../hooks/use-typing-effect';

interface BotMessageProps {
  text: string;
}

const BotMessage = ({ text }: BotMessageProps) => {
  const displayedText = useTypingEffect(text, 30);

  return <>{displayedText}</>;
};

export default BotMessage;
