import React, { useState } from "react";
import { MessageCircle, Send, Sparkles, X } from "lucide-react";
import { getFunctions, httpsCallable } from "firebase/functions";
import app from "./firebase";

const askStellarOneAI = httpsCallable(getFunctions(app, "asia-south1"), "askStellarOneAI");
const starters = ["What does StellarOne Health do?", "Tell me about EasyMed.", "How can you help with RCM?"];

export default function StellarOneChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([{ role: "assistant", content: "Hi! I'm the StellarOne Health AI assistant. I can answer questions about our company, services, EasyMed, healthcare technology, RCM, integrations, and more. How can I help?" }]);

  async function sendMessage(text = input) {
    const question = text.trim();
    if (!question || loading) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", content: question }]);
    setLoading(true);
    try {
      const conversation = [...messages, { role: "user", content: question }].slice(-8);
      const result = await askStellarOneAI({ messages: conversation });
      setMessages((m) => [...m, { role: "assistant", content: result?.data?.answer || "I couldn't complete that request right now. Please contact our team." }]);
    } catch (error) {
      console.error(error);
      setMessages((m) => [...m, { role: "assistant", content: "I'm having trouble connecting right now. Please try again or use our Contact Us page." }]);
    } finally { setLoading(false); }
  }

  return <>
    {open && <div className="sh-ai-chat-panel" role="dialog" aria-label="StellarOne Health AI assistant">
      <div className="sh-ai-chat-header">
        <div className="sh-ai-chat-title"><span><Sparkles size={17}/></span><div><strong>StellarOne AI</strong><small>Health technology assistant</small></div></div>
        <button onClick={() => setOpen(false)} aria-label="Close"><X size={18}/></button>
      </div>
      <div className="sh-ai-chat-messages">
        {messages.map((m, i) => <div key={i} className={`sh-ai-message ${m.role}`}>{m.content}</div>)}
        {loading && <div className="sh-ai-message assistant">Thinking…</div>}
      </div>
      {messages.length === 1 && <div className="sh-ai-starters">{starters.map((s) => <button key={s} onClick={() => sendMessage(s)}>{s}</button>)}</div>}
      <form className="sh-ai-chat-form" onSubmit={(e) => { e.preventDefault(); sendMessage(); }}>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask StellarOne AI…" maxLength={2000}/>
        <button type="submit" disabled={loading || !input.trim()} aria-label="Send"><Send size={17}/></button>
      </form>
      <p className="sh-ai-disclaimer">Please don't share patient health information or sensitive medical data.</p>
    </div>}
    <button className={`sh-ai-launcher ${open ? "open" : ""}`} onClick={() => setOpen(!open)} aria-label="Open StellarOne AI">
      {open ? <X size={21}/> : <MessageCircle size={21}/>} {!open && <span><Sparkles size={13}/> Ask StellarOne AI</span>}
    </button>
    <style>{` .sh-ai-launcher{position:fixed;right:24px;bottom:24px;z-index:1400;min-height:48px;display:flex;align-items:center;gap:8px;padding:0 17px;border:0;border-radius:999px;background:linear-gradient(135deg,#2457d6,#1745b7);color:#fff;box-shadow:0 18px 42px -18px rgba(36,87,214,.72);font:700 12px Manrope,sans-serif}.sh-ai-launcher.open{width:48px;padding:0;justify-content:center}.sh-ai-launcher span{display:flex;align-items:center;gap:6px}.sh-ai-chat-panel{position:fixed;right:24px;bottom:84px;z-index:1399;width:min(390px,calc(100vw - 32px));height:min(620px,calc(100vh - 115px));display:flex;flex-direction:column;overflow:hidden;border:1px solid rgba(148,163,184,.28);border-radius:20px;background:#fff;box-shadow:0 28px 80px -30px rgba(9,20,38,.55);font-family:Manrope,sans-serif}.sh-ai-chat-header{display:flex;align-items:center;justify-content:space-between;padding:16px 17px;background:#091426;color:#fff}.sh-ai-chat-title{display:flex;align-items:center;gap:10px}.sh-ai-chat-title>span{width:34px;height:34px;display:grid;place-items:center;border-radius:10px;background:#2457d6}.sh-ai-chat-title strong,.sh-ai-chat-title small{display:block}.sh-ai-chat-title strong{font-size:13px}.sh-ai-chat-title small{margin-top:2px;color:#b8c4d7;font-size:9px}.sh-ai-chat-header button{width:34px;height:34px;border:1px solid rgba(255,255,255,.16);border-radius:9px;background:transparent;color:#fff}.sh-ai-chat-messages{flex:1;overflow-y:auto;padding:17px;background:#f6f8fc}.sh-ai-message{max-width:86%;margin-bottom:10px;padding:10px 12px;border-radius:13px;font-size:12px;line-height:1.55;white-space:pre-wrap}.sh-ai-message.assistant{margin-right:auto;background:#fff;border:1px solid rgba(148,163,184,.22);color:#101a2f;border-bottom-left-radius:5px}.sh-ai-message.user{margin-left:auto;background:#2457d6;color:#fff;border-bottom-right-radius:5px}.sh-ai-starters{display:grid;gap:6px;padding:0 14px 12px;background:#f6f8fc}.sh-ai-starters button{padding:8px 10px;border:1px solid rgba(36,87,214,.18);border-radius:9px;background:#fff;color:#2457d6;font:600 10px Manrope,sans-serif;text-align:left}.sh-ai-chat-form{display:flex;gap:7px;padding:11px;border-top:1px solid rgba(148,163,184,.22);background:#fff}.sh-ai-chat-form input{min-width:0;flex:1;height:40px;padding:0 12px;border:1px solid rgba(148,163,184,.35);border-radius:10px;outline:0;font:500 11px Manrope,sans-serif}.sh-ai-chat-form button{width:40px;height:40px;border:0;border-radius:10px;background:#2457d6;color:#fff}.sh-ai-chat-form button:disabled{opacity:.45}.sh-ai-disclaimer{margin:0;padding:0 13px 10px;color:#718097;background:#fff;font-size:8px;line-height:1.4;text-align:center}@media(max-width:640px){.sh-ai-launcher{right:16px;bottom:16px}.sh-ai-chat-panel{right:12px;bottom:76px;width:calc(100vw - 24px);height:min(650px,calc(100vh - 95px));border-radius:17px}}`}</style>
  </>;
}
