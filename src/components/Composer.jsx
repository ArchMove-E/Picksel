import React from 'react';
import { Send, Paperclip, Globe, Mic, Sparkles } from 'lucide-react';

const Composer = ({ input, onInputChange, onSend, isLoading, onStop }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="composer-container">
      <div className="composer-wrapper">
        <div className="composer">
          <button className="composer-btn" title="Attach file">
            <Paperclip size={18} />
          </button>
          
          <button className="composer-btn" title="Web search">
            <Globe size={18} />
          </button>

          <textarea
            className="composer-input"
            placeholder="Message ChatBYOK..."
            value={input}
            onChange={(e) => onInputChange(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={1}
            style={{ minHeight: '24px' }}
          />

          <div className="composer-actions">
            {!isLoading ? (
              <button 
                className="send-btn" 
                onClick={onSend}
                disabled={!input.trim()}
                title="Send message"
              >
                <Send size={18} />
              </button>
            ) : (
              <button 
                className="composer-btn" 
                onClick={onStop}
                title="Stop generating"
                style={{ background: 'rgba(239, 68, 68, 0.2)', color: '#ef4444' }}
              >
                <Sparkles size={18} />
              </button>
            )}
          </div>
        </div>
        
        <p style={{ 
          textAlign: 'center', 
          fontSize: '0.75rem', 
          color: 'var(--text-tertiary)', 
          marginTop: '12px' 
        }}>
          ChatBYOK can make mistakes. Verify important information.
        </p>
      </div>
    </div>
  );
};

export default Composer;
