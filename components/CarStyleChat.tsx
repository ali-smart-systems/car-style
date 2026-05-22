// components/CarStyleChat.tsx
'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
    sender: 'user' | 'bot';
    text: string;
}

export default function CarStyleChat() {
    const [messages, setMessages] = useState<Message[]>([
        { sender: 'bot', text: 'يا هلا بك يا غالي في مركز كار ستايل! أنا مساعدك الذكي، كيف أقدر أخدمك اليوم؟ ( سمكرة، رش مطاطي، رش مطفي، نانو سيراميك...)' }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!input.trim() || loading) return;

        const userMessage = input.trim();
        setInput('');
        setMessages((prev) => [...prev, { sender: 'user', text: userMessage }]);
        setLoading(true);

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMessage }),
            });

            const data = await res.json();
            setMessages((prev) => [...prev, { sender: 'bot', text: data.reply }]);
        } catch (error) {
            setMessages((prev) => [...prev, { sender: 'bot', text: 'أبشر بسعدك يا غالي، حالياً عندي ضغط رسايل، شرفنا بالزيارة أو اتصل بنا مباشرة!' }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed bottom-5 right-5 z-50 font-sans" dir="rtl">
            {/* زر فتح وإغلاق الشات */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
            >
                {isOpen ? (
                    <span className="text-xl px-1">✕</span>
                ) : (
                    <span className="flex items-center gap-2">💬 شات ذكي</span>
                )}
            </button>

            {/* صندوق المحادثة */}
            {isOpen && (
                <div className="absolute bottom-16 right-0 w-80 md:w-96 h-[450px] bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300">
                    {/* الهيدر */}
                    <div className="bg-zinc-800 p-4 border-b border-zinc-700 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                            <h3 className="text-white font-bold text-sm">مساعد محمد الرباحي الذكي</h3>
                        </div>
                    </div>

                    {/* منطقة الرسائل */}
                    <div className="flex-1 p-4 overflow-y-auto space-y-3 flex flex-col">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user'
                                    ? 'bg-yellow-500 text-black font-semibold self-start rounded-tr-none'
                                    : 'bg-zinc-800 text-zinc-100 self-end rounded-tl-none'
                                    }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                        {loading && (
                            <div className="bg-zinc-800 text-zinc-400 text-xs p-3 rounded-2xl self-end rounded-tl-none animate-pulse">
                                محمد الرباحي يكتب...
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    shadow-inner
                    {/* صندوق الإدخال */}
                    <div className="p-3 bg-zinc-800 border-t border-zinc-700 flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="اسأل عن الأسعار، الرش المطفي، أو التلميع..."
                            className="flex-1 bg-zinc-950 text-white text-sm rounded-xl px-3 py-2 border border-zinc-700 focus:outline-none focus:border-yellow-500"
                        />
                        <button
                            onClick={handleSend}
                            disabled={loading}
                            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-4 py-2 rounded-xl text-sm transition-colors"
                        >
                            إرسال
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
