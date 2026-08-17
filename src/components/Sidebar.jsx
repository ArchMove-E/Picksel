import React from 'react';
import { MessageSquare, Trash2, Edit2 } from 'lucide-react';

const Sidebar = ({ isOpen, onClose, onNewChat }) => {
  const chatHistory = [
    { id: 1, title: 'React Component Help', date: 'Today' },
    { id: 2, title: 'Python Data Analysis', date: 'Yesterday' },
    { id: 3, title: 'API Integration Guide', date: 'Last 7 days' },
  ];

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="brand">
            <div className="brand-icon">⚡</div>
            <span>ChatBYOK</span>
          </div>
        </div>

        <button className="new-chat-btn" onClick={onNewChat}>
          <MessageSquare size={18} />
          New Chat
        </button>

        <div className="chat-history">
          {chatHistory.map((chat) => (
            <div key={chat.id} className="chat-history-item">
              <MessageSquare size={16} />
              <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {chat.title}
              </span>
            </div>
          ))}
        </div>

        <div className="sidebar-footer">
          <div className="chat-history-item">
            <Edit2 size={16} />
            <span>Custom Instructions</span>
          </div>
          <div className="chat-history-item">
            <Trash2 size={16} />
            <span>Clear Conversations</span>
          </div>
        </div>
      </div>

      {isOpen && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 99,
          }}
          onClick={onClose}
        />
      )}
    </>
  );
};

export default Sidebar;
