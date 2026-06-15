'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const SUGGESTIONS = [
  'How do I start budgeting?',
  'What is compound interest?',
  'How do I spot a scam?',
  'What is a credit score?',
];

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  async function send(text: string) {
    const userMsg: Message = { role: 'user', content: text };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      });

      if (!res.ok || !res.body) throw new Error('Request failed');

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let reply = '';
      setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        reply += decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: 'assistant', content: reply };
          return updated;
        });
      }
    } catch {
      setMessages((prev) => [...prev, { role: 'assistant', content: 'Sorry, something went wrong. Please try again.' }]);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (input.trim() && !loading) send(input.trim());
  }

  return (
    <>
      {/* Bubble */}
      <button
        onClick={() => setOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#0a1628] rounded-full shadow-xl flex items-center justify-center hover:bg-[#1a2d4f] transition-all duration-200 ${open ? 'opacity-0 pointer-events-none scale-75' : 'opacity-100 scale-100'}`}
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6 text-[#f5a623]" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#f5a623] rounded-full text-[10px] font-bold text-[#0a1628] flex items-center justify-center">AI</span>
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-24px)] bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden transition-all duration-300 ${open ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4 pointer-events-none'}`}
        style={{ height: '520px' }}>

        {/* Header */}
        <div className="bg-[#0a1628] px-5 py-4 flex items-center gap-3">
          <div className="w-9 h-9 bg-[#f5a623] rounded-full flex items-center justify-center shrink-0">
            <Bot className="w-5 h-5 text-[#0a1628]" />
          </div>
          <div className="flex-1">
            <p className="text-white font-semibold text-sm">Centsible Assistant</p>
            <p className="text-gray-400 text-xs">Your financial literacy guide</p>
          </div>
          <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {messages.length === 0 && (
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-7 h-7 bg-[#f5a623] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-4 h-4 text-[#0a1628]" />
                </div>
                <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-gray-700 max-w-[260px]">
                  Hi! I&apos;m your Centsible financial assistant. Ask me anything about budgeting, investing, credit, or staying safe from scams! 👋
                </div>
              </div>
              <div className="space-y-2 pl-10">
                <p className="text-xs text-gray-400 font-medium">Try asking:</p>
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="block w-full text-left text-xs bg-white border border-gray-200 rounded-xl px-3 py-2 hover:border-[#f5a623] hover:text-[#0a1628] transition-colors text-gray-600"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${msg.role === 'user' ? 'bg-[#0a1628]' : 'bg-[#f5a623]'}`}>
                {msg.role === 'user'
                  ? <User className="w-4 h-4 text-white" />
                  : <Bot className="w-4 h-4 text-[#0a1628]" />}
              </div>
              <div className={`rounded-2xl px-4 py-3 text-sm max-w-[260px] whitespace-pre-wrap leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-[#0a1628] text-white rounded-tr-sm'
                  : 'bg-gray-100 text-gray-700 rounded-tl-sm'
              }`}>
                {msg.content || <Loader2 className="w-4 h-4 animate-spin text-gray-400" />}
              </div>
            </div>
          ))}

          {loading && messages[messages.length - 1]?.role === 'user' && (
            <div className="flex gap-3">
              <div className="w-7 h-7 bg-[#f5a623] rounded-full flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4 text-[#0a1628]" />
              </div>
              <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3">
                <Loader2 className="w-4 h-4 animate-spin text-gray-400" />
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="border-t border-gray-100 px-4 py-3 flex gap-2">
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            disabled={loading}
            className="flex-1 text-sm border border-gray-200 rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#0a1628] disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="w-10 h-10 bg-[#0a1628] rounded-full flex items-center justify-center hover:bg-[#1a2d4f] disabled:opacity-40 disabled:cursor-not-allowed transition-colors shrink-0"
          >
            <Send className="w-4 h-4 text-[#f5a623]" />
          </button>
        </form>
      </div>
    </>
  );
}
