import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const faqs: FAQ[] = [
    {
      question: "What is alternative credit scoring?",
      answer: "Alternative credit scoring uses non-traditional data points like rent payments, utility bills, employment history, and banking behavior to assess creditworthiness. This approach helps people with limited credit history or thin credit files access fair lending opportunities.",
      category: "general"
    },
    {
      question: "Why is my score low?",
      answer: "A low score typically results from factors like irregular payment history, high expense-to-income ratio, short employment duration, or limited savings. The good news is that these factors can be improved over time with consistent financial habits.",
      category: "scoring"
    },
    {
      question: "How can I improve my approval chances?",
      answer: "Focus on: 1) Making all rent and utility payments on time, 2) Maintaining stable employment, 3) Keeping expenses below 70% of income, 4) Building an emergency fund, and 5) Documenting all income sources consistently.",
      category: "improvement"
    },
    {
      question: "How is this different from traditional credit scores?",
      answer: "Traditional credit scores focus mainly on credit card and loan payment history. We consider rent payments, utility bills, employment stability, income trends, and expense management - giving a more complete picture of your financial responsibility.",
      category: "general"
    },
    {
      question: "Will checking my score affect my credit?",
      answer: "No! Our alternative credit scoring system doesn't perform hard credit checks. We use banking data, payment history, and employment information to calculate your score without impacting your traditional credit score.",
      category: "general"
    },
    {
      question: "How quickly can I improve my score?",
      answer: "You can see improvements within 1-3 months by consistently paying bills on time and managing expenses well. Major improvements typically occur over 3-6 months of sustained good financial habits.",
      category: "improvement"
    }
  ];

  const suggestions = [
    "What is alternative credit scoring?",
    "How can I improve my score?",
    "Why is my score low?",
    "How is this different from FICO?"
  ];

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add welcome message when chat opens for the first time
      const welcomeMessage: Message = {
        id: Date.now(),
        text: "Hi! I'm here to help you understand alternative credit scoring. Ask me anything about how our system works, how to improve your score, or what makes us different from traditional credit scoring!",
        isBot: true,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const findBestAnswer = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // Find FAQ that best matches the user's question
    const matchedFAQ = faqs.find(faq => {
      const questionWords = faq.question.toLowerCase().split(' ');
      const inputWords = input.split(' ');
      
      // Check if user input contains key words from the FAQ question
      const matchCount = inputWords.filter(word => 
        questionWords.some(qWord => qWord.includes(word) || word.includes(qWord))
      ).length;
      
      return matchCount >= 2; // Require at least 2 matching words
    });

    if (matchedFAQ) {
      return matchedFAQ.answer;
    }

    // Keyword-based responses for common queries
    if (input.includes('improve') || input.includes('better') || input.includes('increase')) {
      return faqs.find(f => f.category === 'improvement')?.answer || 
        "To improve your score, focus on consistent rent and utility payments, maintain stable employment, and keep your expenses manageable. Small consistent improvements make a big difference over time!";
    }

    if (input.includes('low') || input.includes('bad') || input.includes('poor')) {
      return faqs.find(f => f.question.includes('low'))?.answer ||
        "Low scores usually indicate areas for improvement like payment consistency, employment stability, or expense management. The good news is these can all be improved with time and consistent habits!";
    }

    if (input.includes('different') || input.includes('traditional') || input.includes('fico')) {
      return faqs.find(f => f.question.includes('different'))?.answer ||
        "Unlike traditional credit scores that mainly look at credit cards and loans, we consider rent payments, utility bills, employment history, and overall financial behavior for a more complete picture.";
    }

    if (input.includes('what') || input.includes('how') || input.includes('explain')) {
      return faqs[0].answer; // Default to explanation of alternative credit scoring
    }

    // Default response for unmatched queries
    return "I'd be happy to help! I can explain how alternative credit scoring works, why your score might be low, how to improve it, or how it's different from traditional credit scoring. What would you like to know more about?";
  };

  const handleSendMessage = async (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: messageText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setShowSuggestions(false);
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = findBestAnswer(messageText);
      const botMessage: Message = {
        id: Date.now() + 1,
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // 1-2 second delay
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 ${
          isOpen ? 'hidden' : 'flex'
        } items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300`}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-96 max-w-[90vw] h-[500px] bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 dark:border-slate-700/20 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Credit Assistant</h3>
                  <p className="text-xs text-blue-100">Ask me anything!</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-start space-x-2 ${
                    message.isBot ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {message.isBot && (
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="w-3 h-3 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.isBot
                        ? 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200'
                        : 'bg-gradient-to-r from-blue-600 to-blue-500 text-white'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                  {!message.isBot && (
                    <div className="w-6 h-6 bg-slate-300 dark:bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <User className="w-3 h-3 text-slate-600 dark:text-slate-300" />
                    </div>
                  )}
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-start space-x-2"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="w-3 h-3 text-white" />
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Suggestions */}
              {showSuggestions && messages.length <= 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-2"
                >
                  <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
                    Quick questions you can ask:
                  </p>
                  {suggestions.map((suggestion, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      onClick={() => handleSendMessage(suggestion)}
                      className="block w-full p-2 text-left text-xs bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 rounded-lg transition-colors text-slate-700 dark:text-slate-300"
                    >
                      {suggestion}
                    </motion.button>
                  ))}
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-700">
              <div className="flex items-end space-x-2">
                <div className="flex-1">
                  <textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me about alternative credit scoring..."
                    className="w-full px-3 py-2 bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-sm"
                    rows={1}
                    style={{ minHeight: '40px', maxHeight: '80px' }}
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim() || isTyping}
                  className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg flex items-center justify-center hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;