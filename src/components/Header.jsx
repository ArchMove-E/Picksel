import React from 'react';
import { Menu, Sparkles, Settings, Plug, BarChart3, FolderOpen, MessageSquare, Globe } from 'lucide-react';

const Header = ({ 
  onMenuClick, 
  currentModel, 
  onModelClick, 
  onSettingsClick,
  onMcpClick,
  onAnalyticsClick,
  onProjectsClick,
  onGptStoreClick
}) => {
  return (
    <header className="header">
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button className="icon-btn" onClick={onMenuClick} style={{ display: 'flex' }}>
          <Menu size={20} />
        </button>
        
        <div className="model-selector" onClick={onModelClick}>
          <Sparkles size={18} />
          <span className="model-name">{currentModel}</span>
          <Globe size={16} style={{ opacity: 0.6 }} />
        </div>
      </div>

      <div className="header-actions">
        <button className="icon-btn" onClick={onGptStoreClick} title="GPT Store" style={{ display: 'flex' }}>
          <MessageSquare size={18} />
        </button>
        <button className="icon-btn" onClick={onProjectsClick} title="Projects" style={{ display: 'flex' }}>
          <FolderOpen size={18} />
        </button>
        <button className="icon-btn" onClick={onAnalyticsClick} title="Analytics" style={{ display: 'flex' }}>
          <BarChart3 size={18} />
        </button>
        <button className="icon-btn" onClick={onMcpClick} title="MCP Integrations" style={{ display: 'flex' }}>
          <Plug size={18} />
        </button>
        <button className="icon-btn" onClick={onSettingsClick} title="Settings" style={{ display: 'flex' }}>
          <Settings size={18} />
        </button>
      </div>
    </header>
  );
};

export default Header;
