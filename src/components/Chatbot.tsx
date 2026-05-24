
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Paperclip, Send, X, Loader2, User, Sparkles } from 'lucide-react';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import BotMessage from './ui/BotMessage';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setMessages([
          {
            text: "Hi, I'm the Shivakriti Assistant.",
            sender: 'bot',
          },
        ]);
      }, 1000);
    }
  }, [isOpen]);

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage: Message = { text: input, sender: 'user' };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: input,
          history: messages.map((msg) => ({
            role: msg.sender === "user" ? "user" : "model",
            parts: [{ text: msg.text }],
          })),
        }),

      });

      if (!res.ok) {
        throw new Error('API request failed');
      }

      const data = await res.json();
      const botMessage: Message = { text: data.text, sender: 'bot' };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error fetching bot response:', error);
      const errorMessage: Message = {
        text: 'Sorry, I am having trouble connecting. Please try again later.',
        sender: 'bot',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-8 right-8 z-50">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9, rotate: -5 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <div
            onClick={toggleChat}
            className="rounded-full w-12 h-12 shadow-xl
             bg-white/30 backdrop-blur-xl 
             border border-white/90
             focus:ring-4 focus:ring-primary/30 
             cursor-pointer flex items-center justify-center"
          >
            <motion.div
              className="flex items-center justify-center"
              animate={{
                scale: isOpen ? [1, 0.85, 1] : [1, 1.05, 1],
                rotate: isOpen ? [0, 90, 0] : 0,
              }}
              transition={{
                duration: isOpen ? 0.3 : 1.5,
                repeat: isOpen ? 0 : Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              {isOpen ? (
                <X size={26} className="text-white" />
              ) : (
                <img
                  src="/shivakriti_logo.png"
                  alt="Chatbot"
                  className="w-10 h-10 object-contain"
                  draggable="false"
                />
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>


      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{ perspective: '1000px' }}
            className="fixed bottom-20 right-1 z-50"
          >
            <motion.div
              className="w-96 h-[70vh] flex flex-col"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Card className="w-full h-full flex flex-col shadow-2xl rounded-3xl bg-background/80 backdrop-blur-xl border-border">
                <CardHeader className="flex flex-row items-center justify-between p-4 border-b">
                  <div className="flex items-center gap-3">
                    <img src="/shivakriti_logo.png" alt="Chatbot" className="w-12 h-12 rounded-full" />
                    <div>
                      <CardTitle className="text-lg font-semibold">Shivakriti Assistant</CardTitle>
                      <p className="text-xs text-green-500 flex items-center gap-1">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Online
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" onClick={toggleChat}>
                    <X className="w-5 h-5" />
                  </Button>
                </CardHeader>
                <CardContent className="flex-grow overflow-y-auto p-4">
                  <div className="space-y-6">
                    {messages.map((msg, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : ''
                          }`}
                      >
                        {msg.sender === 'bot' && (
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <img src="/shivakriti_logo.png" alt="Chatbot" className="w-5 h-5" />
                          </div>
                        )}
                        <div
                          className={`max-w-xs rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-md ${msg.sender === 'user'
                              ? 'bg-primary text-primary-foreground rounded-br-none'
                              : 'bg-muted rounded-bl-none'
                            }`}
                        >
                          {msg.sender === 'bot' ? <BotMessage text={msg.text} /> : msg.text}
                        </div>
                        {msg.sender === 'user' && (
                          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0">
                            <User className="w-5 h-5" />
                          </div>
                        )}
                      </motion.div>
                    ))}
                    {isLoading && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <img src="/shivakriti_logo.png" alt="Chatbot" className="w-5 h-5" />
                        </div>
                        <div className="max-w-xs rounded-2xl px-4 py-3 bg-muted shadow-md flex items-center gap-3">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Thinking...</span>
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </CardContent>
                <div className="p-4 border-t bg-background/20 rounded-b-3xl">
                  <div className="relative">
                    <Input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                      placeholder="Ask about our services..."
                      className="pr-28 rounded-full bg-muted focus-visible:ring-1 focus-visible:ring-primary"
                    />
                    <div className="absolute top-1/2 right-2 transform -translate-y-1/2 flex gap-1">
                      {/* <Button variant="ghost" size="icon" className="rounded-full">
                        <Paperclip className="w-5 h-5" />
                      </Button> */}
                      <Button onClick={handleSend} disabled={isLoading} className="rounded-full bg-primary hover:bg-primary/90">
                        <Send className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                  <p className="text-xs text-center text-muted-foreground mt-3 flex items-center justify-center gap-1">
                    <Sparkles size={12} className="text-primary" /> Powered by Shivakriti AI
                  </p>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
