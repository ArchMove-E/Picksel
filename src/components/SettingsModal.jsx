import React, { useState } from 'react';
import { X, Key, Database, Shield, Globe, Zap } from 'lucide-react';

const SettingsModal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('api-keys');
  
  const [apiKeys, setApiKeys] = useState({
    openai: '',
    anthropic: '',
    google: '',
    groq: '',
    deepseek: '',
    ollama: '',
  });

  const handleSaveKey = (provider, key) => {
    setApiKeys(prev => ({ ...prev, [provider]: key }));
    localStorage.setItem(`chatbyok_${provider}_key`, key);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Settings</h2>
          <button className="close-modal" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {/* Tabs */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '12px' }}>
            <button 
              className={`btn ${activeTab === 'api-keys' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setActiveTab('api-keys')}
              style={{ padding: '8px 16px', fontSize: '0.85rem' }}
            >
              <Key size={16} style={{ marginRight: '6px' }} />
              API Keys
            </button>
            <button 
              className={`btn ${activeTab === 'privacy' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setActiveTab('privacy')}
              style={{ padding: '8px 16px', fontSize: '0.85rem' }}
            >
              <Shield size={16} style={{ marginRight: '6px' }} />
              Privacy
            </button>
            <button 
              className={`btn ${activeTab === 'data' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setActiveTab('data')}
              style={{ padding: '8px 16px', fontSize: '0.85rem' }}
            >
              <Database size={16} style={{ marginRight: '6px' }} />
              Data
            </button>
          </div>

          {/* API Keys Tab */}
          {activeTab === 'api-keys' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="form-group">
                <label className="form-label">OpenAI API Key</label>
                <input
                  type="password"
                  className="form-input"
                  placeholder="sk-..."
                  value={apiKeys.openai}
                  onChange={(e) => handleSaveKey('openai', e.target.value)}
                />
                <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', marginTop: '6px' }}>
                  Required for GPT-5.6 Sol/Terra/Luna models
                </p>
              </div>

              <div className="form-group">
                <label className="form-label">Anthropic API Key</label>
                <input
                  type="password"
                  className="form-input"
                  placeholder="sk-ant-..."
                  value={apiKeys.anthropic}
                  onChange={(e) => handleSaveKey('anthropic', e.target.value)}
                />
                <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', marginTop: '6px' }}>
                  Required for Claude 3.7 Sonnet
                </p>
              </div>

              <div className="form-group">
                <label className="form-label">Google API Key</label>
                <input
                  type="password"
                  className="form-input"
                  placeholder="AIza..."
                  value={apiKeys.google}
                  onChange={(e) => handleSaveKey('google', e.target.value)}
                />
                <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', marginTop: '6px' }}>
                  Required for Gemini 3.7 Flash
                </p>
              </div>

              <div className="form-group">
                <label className="form-label">Groq API Key</label>
                <input
                  type="password"
                  className="form-input"
                  placeholder="gsk_..."
                  value={apiKeys.groq}
                  onChange={(e) => handleSaveKey('groq', e.target.value)}
                />
                <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', marginTop: '6px' }}>
                  For ultra-fast Llama inference
                </p>
              </div>

              <div className="glass-card" style={{ padding: '16px', marginTop: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <Globe size={20} color="var(--accent-primary)" />
                  <span style={{ fontWeight: 600 }}>Custom Endpoints</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                  Configure custom Ollama or vLLM endpoints for local model hosting.
                </p>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="http://localhost:11434"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Privacy Tab */}
          {activeTab === 'privacy' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: '4px' }}>Data Training Opt-Out</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>
                    Prevent your conversations from being used for model training
                  </p>
                </div>
                <div className="toggle active"></div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: '4px' }}>Local Storage Only</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>
                    Store all data locally in your browser
                  </p>
                </div>
                <div className="toggle active"></div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: '4px' }}>End-to-End Encryption</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>
                    Encrypt all API keys and sensitive data
                  </p>
                </div>
                <div className="toggle active"></div>
              </div>
            </div>
          )}

          {/* Data Tab */}
          {activeTab === 'data' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                <Database size={18} />
                Export All Data
              </button>
              
              <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                <Zap size={18} />
                Clear Conversation History
              </button>
              
              <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center', borderColor: '#ef4444' }}>
                Delete Account
              </button>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button className="btn btn-primary" onClick={onClose}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
