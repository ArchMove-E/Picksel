import React from 'react';
import { X, FolderOpen, Plus, Users } from 'lucide-react';

const ProjectsModal = ({ onClose }) => {
  const projects = [
    { 
      name: 'Web Development', 
      description: 'React, Next.js, and full-stack projects',
      chats: 24,
      members: 3,
      color: '#00dc82'
    },
    { 
      name: 'Data Science', 
      description: 'Python analysis and ML experiments',
      chats: 18,
      members: 2,
      color: '#3b82f6'
    },
    { 
      name: 'Content Writing', 
      description: 'Blog posts, articles, and copywriting',
      chats: 42,
      members: 1,
      color: '#8b5cf6'
    },
    { 
      name: 'Research', 
      description: 'Academic papers and deep research',
      chats: 15,
      members: 4,
      color: '#fbbf24'
    },
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '700px' }}>
        <div className="modal-header">
          <h2 className="modal-title">Projects</h2>
          <button className="close-modal" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
            Organize your conversations into dedicated project workspaces with custom instructions and shared context.
          </p>

          <button className="btn btn-primary" style={{ width: '100%', marginBottom: '24px', justifyContent: 'center' }}>
            <Plus size={18} />
            Create New Project
          </button>

          <div style={{ display: 'grid', gap: '16px' }}>
            {projects.map((project, index) => (
              <div 
                key={index}
                className="glass-card"
                style={{ 
                  padding: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  borderLeft: `3px solid ${project.color}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(4px)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.background = 'var(--glass-bg)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ 
                      width: '48px', 
                      height: '48px', 
                      borderRadius: '12px',
                      background: `${project.color}20`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <FolderOpen size={24} color={project.color} />
                    </div>
                    
                    <div>
                      <h3 style={{ fontWeight: 600, marginBottom: '4px' }}>{project.name}</h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>
                      <Users size={14} />
                      <span>{project.members}</span>
                    </div>
                    <div style={{ 
                      fontSize: '0.85rem', 
                      color: 'var(--text-secondary)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      padding: '4px 12px',
                      borderRadius: '6px',
                    }}>
                      {project.chats} chats
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card" style={{ padding: '20px', marginTop: '24px' }}>
            <h4 style={{ fontWeight: 600, marginBottom: '12px' }}>Project Features</h4>
            <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.9rem' }}>
              <li>Dedicated system instructions per project</li>
              <li>Shared file context and knowledge base</li>
              <li>Team collaboration with member management</li>
              <li>Isolated conversation history</li>
              <li>Custom model configurations</li>
            </ul>
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

export default ProjectsModal;
