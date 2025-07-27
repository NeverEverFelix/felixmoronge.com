import React, { useEffect, useState, useRef } from 'react';
import '../styles/ChatModal.css';

const ChatModal = ({ onClose }: { onClose: () => void }) => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const controllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    const root = document.getElementById('root');
    if (root) root.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      if (root) root.style.overflow = '';
    };
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const el = e.target;
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;
    setQuestion(el.value);
  };

  const handleSubmit = async () => {
    if (!question.trim()) return;
    setResponse('');
    setIsLoading(true);
    controllerRef.current = new AbortController();

    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
        signal: controllerRef.current.signal,
      });

      if (!res.body) throw new Error('No response body');

      const reader = res.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let fullText = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value);
        fullText += chunk;
        setResponse(prev => prev + chunk);
      }
    } catch (err) {
      console.error('Streaming error:', err);
      setResponse('❌ Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="chat-modal-overlay">
      <div className="chat-modal">
        <h1>Learn More</h1>
        <textarea
          className="chat-input"
          placeholder='Ask anything: “why kaniko over DinD?”'
          rows={1}
          value={question}
          onInput={handleInput}
          onKeyDown={handleKeyDown}
        />
        <p className="ai-response">
          {isLoading ? '🔄 Generating answer...' : response}
        </p>
        <div className="chat-divider" />
        <button className="close-text-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ChatModal;
