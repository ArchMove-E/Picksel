import React from 'react';
import { X, Plug, GitFork, ListTodo, FileText } from 'lucide-react';

const McpModal = ({ onClose }) => {
  const integrations = [
    { 
      name: 'GitHub', 
      icon: GitFork, 
      description: 'Access repositories, issues, and pull requests',
      status: 'available'
    },
    { 
      name: 'Linear', 
      icon: ListTodo, 
      description: 'Manage tasks and project tracking',
      status: 'available'
    },
    { 
      name: 'Notion', 
      icon: FileText, 
      description: 'Connect to your Notion workspace',
      status: 'coming_soon'
    },
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">MCP Integrations</h2>
          <button className="close-modal" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
            Model Context Protocol (MCP) servers enhance ChatBYOK with external tool integrations.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {integrations.map((integration, index) => (
              <div 
                key={index}
                className="glass-card"
                style={{ 
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: '12px',
                  background: integration.status === 'available' 
                    ? 'rgba(0, 220, 130, 0.15)' 
                    : 'rgba(161, 161, 170, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <integration.icon 
                    size={24} 
                    color={integration.status === 'available' ? 'var(--accent-primary)' : 'var(--text-tertiary)'} 
                  />
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <h3 style={{ fontWeight: 600 }}>{integration.name}</h3>
                    {integration.status === 'available' && (
                      <span style={{ 
                        fontSize: '0.7rem', 
                        padding: '2px 8px', 
                        borderRadius: '4px',
                        background: 'rgba(0, 220, 130, 0.2)',
                        color: 'var(--accent-primary)',
                      }}>
                        AVAILABLE
                      </span>
                    )}
                    {integration.status === 'coming_soon' && (
                      <span style={{ 
                        fontSize: '0.7rem', 
                        padding: '2px 8px', 
                        borderRadius: '4px',
                        background: 'rgba(161, 161, 170, 0.2)',
                        color: 'var(--text-secondary)',
                      }}>
                        COMING SOON
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>
                    {integration.description}
                  </p>
                </div>

                <button 
                  className={`btn ${integration.status === 'available' ? 'btn-primary' : 'btn-secondary'}`}
                  disabled={integration.status === 'coming_soon'}
                  style={{ opacity: integration.status === 'coming_soon' ? 0.5 : 1 }}
                >
                  {integration.status === 'available' ? 'Connect' : 'Notify Me'}
                </button>
              </div>
            ))}
          </div>

          <div className="glass-card" style={{ padding: '20px', marginTop: '24px' }}>
            <h4 style={{ fontWeight: 600, marginBottom: '12px' }}>What is MCP?</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              The Model Context Protocol (MCP) is an open standard that allows AI assistants to securely connect 
              to external tools and data sources. By enabling MCP integrations, ChatBYOK can access your GitHub 
              repositories, Linear projects, and more - all while maintaining privacy and security.
            </p>
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

export default McpModal;
