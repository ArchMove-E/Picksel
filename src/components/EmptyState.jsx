import React from 'react';
import { Sparkles, Zap, Brain, Code } from 'lucide-react';

const EmptyState = ({ suggestions, onSuggestionClick }) => {
  return (
    <div className="empty-state">
      <div className="empty-state-logo">⚡</div>
      <h1>Welcome to ChatBYOK</h1>
      <p>
        The ultimate BYOK AI chat interface. Bring your own API keys and chat with 
        any model from any provider in a beautiful, privacy-focused environment.
      </p>

      <div className="suggestion-grid">
        {suggestions.map((suggestion, index) => (
          <div 
            key={index} 
            className="suggestion-card"
            onClick={() => onSuggestionClick(suggestion)}
          >
            <h3>{suggestion.title}</h3>
            <p>{suggestion.desc}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '48px', display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div className="glass-card" style={{ padding: '12px 20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Brain size={16} color="#8b5cf6" />
          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Deep Reasoning</span>
        </div>
        <div className="glass-card" style={{ padding: '12px 20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Zap size={16} color="#00dc82" />
          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Lightning Fast</span>
        </div>
        <div className="glass-card" style={{ padding: '12px 20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Code size={16} color="#3b82f6" />
          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Code Execution</span>
        </div>
        <div className="glass-card" style={{ padding: '12px 20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Sparkles size={16} color="#00ff88" />
          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Multi-Model</span>
        </div>
      </div>
    </div>
  );
};

export default EmptyState;
