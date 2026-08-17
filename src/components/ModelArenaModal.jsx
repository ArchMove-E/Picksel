import React from 'react';
import { X, Zap, Brain, Trophy } from 'lucide-react';

const ModelArenaModal = ({ onClose, models }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '800px' }}>
        <div className="modal-header">
          <h2 className="modal-title">Model Arena</h2>
          <button className="close-modal" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
            Compare different AI models side-by-side. Select any model to start chatting.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
            {models.map((model, index) => (
              <div 
                key={index}
                className="glass-card"
                style={{ 
                  padding: '20px', 
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  border: model.tier === 'flagship' ? '1px solid var(--accent-primary)' : undefined,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  {model.tier === 'flagship' && <Trophy size={16} color="#fbbf24" />}
                  {model.tier === 'fast' && <Zap size={16} color="#00dc82" />}
                  {model.tier === 'reasoning' && <Brain size={16} color="#8b5cf6" />}
                  <span style={{ 
                    fontSize: '0.7rem', 
                    padding: '4px 8px', 
                    borderRadius: '4px',
                    background: model.tier === 'flagship' ? 'rgba(251, 191, 36, 0.2)' : 
                                model.tier === 'fast' ? 'rgba(0, 220, 130, 0.2)' : 
                                model.tier === 'reasoning' ? 'rgba(139, 92, 246, 0.2)' : 
                                'rgba(161, 161, 170, 0.2)',
                    color: model.tier === 'flagship' ? '#fbbf24' : 
                           model.tier === 'fast' ? '#00dc82' : 
                           model.tier === 'reasoning' ? '#8b5cf6' : 
                           'var(--text-secondary)',
                  }}>
                    {model.tier.toUpperCase()}
                  </span>
                </div>
                
                <h3 style={{ fontWeight: 600, marginBottom: '4px' }}>{model.name}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', marginBottom: '12px' }}>
                  {model.provider}
                </p>
                
                <div style={{ display: 'flex', gap: '12px', fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                  <span>⚡ {model.tier === 'fast' ? '<100ms' : model.tier === 'flagship' ? '~2s' : '~1s'}</span>
                  <span>🧠 {model.tier === 'reasoning' ? 'High' : model.tier === 'flagship' ? 'Max' : 'Medium'}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card" style={{ padding: '20px', marginTop: '24px' }}>
            <h4 style={{ fontWeight: 600, marginBottom: '12px' }}>How to use Model Arena</h4>
            <ol style={{ paddingLeft: '20px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              <li>Select a model from the grid above</li>
              <li>Send the same prompt to multiple models</li>
              <li>Compare responses side-by-side</li>
              <li>Vote for the best response to improve rankings</li>
            </ol>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelArenaModal;
