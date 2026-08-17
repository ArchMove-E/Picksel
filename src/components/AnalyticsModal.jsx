import React from 'react';
import { X, BarChart3, TrendingUp, DollarSign, Clock } from 'lucide-react';

const AnalyticsModal = ({ onClose }) => {
  const stats = [
    { label: 'Total Requests', value: '1,247', change: '+12%', icon: BarChart3 },
    { label: 'Avg. Latency', value: '1.2s', change: '-8%', icon: Clock },
    { label: 'Tokens Used', value: '2.4M', change: '+24%', icon: TrendingUp },
    { label: 'Est. Cost', value: '$18.42', change: '+5%', icon: DollarSign },
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '700px' }}>
        <div className="modal-header">
          <h2 className="modal-title">Analytics Dashboard</h2>
          <button className="close-modal" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {/* Stats Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)', 
            gap: '16px', 
            marginBottom: '24px' 
          }}>
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="glass-card"
                style={{ padding: '20px' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <stat.icon size={20} color="var(--accent-primary)" />
                  <span style={{ 
                    fontSize: '0.75rem', 
                    color: stat.change.startsWith('+') ? 'var(--accent-primary)' : '#ef4444',
                    background: stat.change.startsWith('+') ? 'rgba(0, 220, 130, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                    padding: '2px 8px',
                    borderRadius: '4px',
                  }}>
                    {stat.change}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '4px' }}>
                  {stat.value}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Chart Placeholder */}
          <div className="glass-card" style={{ padding: '24px', marginBottom: '24px' }}>
            <h4 style={{ fontWeight: 600, marginBottom: '16px' }}>Usage Over Time</h4>
            <div style={{ 
              height: '200px', 
              display: 'flex', 
              alignItems: 'flex-end', 
              gap: '8px',
              paddingBottom: '12px',
              borderBottom: '1px solid var(--border-subtle)',
            }}>
              {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((height, index) => (
                <div 
                  key={index}
                  style={{ 
                    flex: 1, 
                    height: `${height}%`,
                    background: 'var(--accent-gradient)',
                    borderRadius: '4px 4px 0 0',
                    opacity: 0.8,
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                    e.currentTarget.style.transform = 'scaleY(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0.8';
                    e.currentTarget.style.transform = 'scaleY(1)';
                  }}
                />
              ))}
            </div>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              marginTop: '8px',
              fontSize: '0.75rem',
              color: 'var(--text-tertiary)',
            }}>
              <span>Jan</span>
              <span>Dec</span>
            </div>
          </div>

          {/* Model Breakdown */}
          <div className="glass-card" style={{ padding: '20px' }}>
            <h4 style={{ fontWeight: 600, marginBottom: '16px' }}>Model Usage Breakdown</h4>
            {[
              { model: 'GPT-5.6 Terra', percentage: 45, color: '#00dc82' },
              { model: 'Gemini 3.7 Flash', percentage: 30, color: '#3b82f6' },
              { model: 'Claude 3.7 Sonnet', percentage: 15, color: '#8b5cf6' },
              { model: 'GPT-5.6 Sol', percentage: 10, color: '#fbbf24' },
            ].map((item, index) => (
              <div key={index} style={{ marginBottom: index < 3 ? '12px' : 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>{item.model}</span>
                  <span style={{ color: 'var(--text-tertiary)' }}>{item.percentage}%</span>
                </div>
                <div style={{ 
                  height: '8px', 
                  background: 'rgba(255, 255, 255, 0.05)', 
                  borderRadius: '4px',
                  overflow: 'hidden',
                }}>
                  <div style={{ 
                    width: `${item.percentage}%`,
                    height: '100%',
                    background: item.color,
                    borderRadius: '4px',
                    transition: 'width 0.5s ease-out',
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary">Export Report</button>
          <button className="btn btn-primary" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsModal;
