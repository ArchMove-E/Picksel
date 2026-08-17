import React from 'react';
import { X, Sparkles, Search, Code, PenTool, Briefcase } from 'lucide-react';

const GptStoreModal = ({ onClose }) => {
  const gpts = [
    { 
      name: 'Full-Stack Architect', 
      description: 'Expert in React, Node.js, and modern web development',
      icon: Code,
      category: 'Programming',
      color: '#00dc82'
    },
    { 
      name: 'Research Scholar', 
      description: 'Deep research with citations and comprehensive analysis',
      icon: Search,
      category: 'Research',
      color: '#3b82f6'
    },
    { 
      name: 'Creative Writer', 
      description: 'Craft compelling stories, articles, and marketing copy',
      icon: PenTool,
      category: 'Writing',
      color: '#8b5cf6'
    },
    { 
      name: 'Business Consultant', 
      description: 'Strategic advice for startups and enterprises',
      icon: Briefcase,
      category: 'Business',
      color: '#fbbf24'
    },
    { 
      name: 'Canvas UI Designer', 
      description: 'Create beautiful interfaces with live previews',
      icon: Sparkles,
      category: 'Design',
      color: '#ec4899'
    },
    { 
      name: 'Data Analyst Pro', 
      description: 'Python data analysis and visualization expert',
      icon: Search,
      category: 'Data',
      color: '#14b8a6'
    },
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '800px' }}>
        <div className="modal-header">
          <h2 className="modal-title">GPT Store</h2>
          <button className="close-modal" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {/* Search Bar */}
          <div style={{ marginBottom: '24px' }}>
            <input
              type="text"
              className="form-input"
              placeholder="Search GPTs..."
              style={{ padding: '12px 16px' }}
            />
          </div>

          {/* Categories */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
            {['All', 'Programming', 'Writing', 'Research', 'Business', 'Design', 'Data'].map((cat, index) => (
              <button
                key={cat}
                className={`btn ${index === 0 ? 'btn-primary' : 'btn-secondary'}`}
                style={{ padding: '8px 16px', fontSize: '0.85rem' }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* GPT Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
            {gpts.map((gpt, index) => (
              <div 
                key={index}
                className="glass-card"
                style={{ 
                  padding: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
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
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: '12px',
                  background: `${gpt.color}20`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}>
                  <gpt.icon size={24} color={gpt.color} />
                </div>
                
                <h3 style={{ fontWeight: 600, marginBottom: '8px' }}>{gpt.name}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', marginBottom: '16px', lineHeight: 1.6 }}>
                  {gpt.description}
                </p>
                
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    padding: '4px 10px', 
                    borderRadius: '6px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: 'var(--text-secondary)',
                  }}>
                    {gpt.category}
                  </span>
                  <button className="btn btn-primary" style={{ padding: '6px 14px', fontSize: '0.8rem' }}>
                    Try
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card" style={{ padding: '20px', marginTop: '24px' }}>
            <h4 style={{ fontWeight: 600, marginBottom: '12px' }}>Create Your Own GPT</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: 1.7 }}>
              Build custom AI assistants tailored to your specific needs. Add custom instructions, upload knowledge files, 
              and configure API actions - all through natural language.
            </p>
            <button className="btn btn-secondary" style={{ width: 'auto' }}>
              <Sparkles size={16} style={{ marginRight: '8px' }} />
              Open GPT Builder
            </button>
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

export default GptStoreModal;
