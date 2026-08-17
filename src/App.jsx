import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, Plus, Menu, Settings, Sparkles, Code, Globe, 
  Mic, Paperclip, StopCircle, ChevronDown, Zap, Brain,
  MessageSquare, FolderOpen, BarChart3, Plug
} from 'lucide-react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import EmptyState from './components/EmptyState';
import Composer from './components/Composer';
import MessageItem from './components/MessageItem';
import SettingsModal from './components/SettingsModal';
import ModelArenaModal from './components/ModelArenaModal';
import McpModal from './components/McpModal';
import AnalyticsModal from './components/AnalyticsModal';
import ProjectsModal from './components/ProjectsModal';
import GptStoreModal from './components/GptStoreModal';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentModel, setCurrentModel] = useState('GPT-5.6 Terra');
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [arenaOpen, setArenaOpen] = useState(false);
  const [mcpOpen, setMcpOpen] = useState(false);
  const [analyticsOpen, setAnalyticsOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [gptStoreOpen, setGptStoreOpen] = useState(false);
  const [thinkingData, setThinkingData] = useState(null);
  const chatContainerRef = useRef(null);

  const models = [
    { name: 'GPT-5.6 Sol', provider: 'OpenAI', tier: 'flagship' },
    { name: 'GPT-5.6 Terra', provider: 'OpenAI', tier: 'balanced' },
    { name: 'GPT-5.6 Luna', provider: 'OpenAI', tier: 'fast' },
    { name: 'Gemini 3.7 Flash', provider: 'Google', tier: 'fast' },
    { name: 'Claude 3.7 Sonnet', provider: 'Anthropic', tier: 'balanced' },
    { name: 'o3-mini', provider: 'OpenAI', tier: 'reasoning' },
    { name: 'Llama 3.3 70B', provider: 'Meta', tier: 'open' },
  ];

  const suggestions = [
    { title: 'Build a React App', desc: 'Create a modern web application with components' },
    { title: 'Analyze Data', desc: 'Process and visualize datasets with Python' },
    { title: 'Research Topic', desc: 'Deep dive into any subject with citations' },
    { title: 'Write Content', desc: 'Generate articles, emails, or creative writing' },
  ];

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: input,
      timestamp: new Date().toISOString(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate thinking process
    setThinkingData({
      isThinking: true,
      steps: [
        'Analyzing request...',
        'Searching knowledge base...',
        'Formulating response...',
      ],
      elapsed: 0,
    });

    // Simulate API call with streaming
    setTimeout(() => {
      const assistantMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: `This is a simulated response from **${currentModel}**. \n\nTo get real AI responses, configure your API keys in the settings. This demo showcases the beautiful UI and smooth interactions.\n\n\`\`\`javascript\n// Example code block\nconst greeting = "Hello from ChatBYOK!";\nconsole.log(greeting);\n\`\`\`\n\nYou can:\n- Bring your own API keys (BYOK)\n- Compare models in the Arena\n- Use Canvas for collaborative work\n- Enable MCP integrations`,
        timestamp: new Date().toISOString(),
        model: currentModel,
      };

      setThinkingData(null);
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 2000);
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(`${suggestion.title} - ${suggestion.desc}`);
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="app-container">
      <Sidebar 
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onNewChat={() => setMessages([])}
      />
      
      <main className="main-content">
        <Header 
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
          currentModel={currentModel}
          onModelClick={() => setArenaOpen(true)}
          onSettingsClick={() => setSettingsOpen(true)}
          onMcpClick={() => setMcpOpen(true)}
          onAnalyticsClick={() => setAnalyticsOpen(true)}
          onProjectsClick={() => setProjectsOpen(true)}
          onGptStoreClick={() => setGptStoreOpen(true)}
        />

        <div className="chat-container" ref={chatContainerRef}>
          {messages.length === 0 ? (
            <EmptyState 
              suggestions={suggestions}
              onSuggestionClick={handleSuggestionClick}
            />
          ) : (
            messages.map((message) => (
              <MessageItem 
                key={message.id} 
                message={message}
                thinkingData={thinkingData}
              />
            ))
          )}
          
          {isLoading && !thinkingData && (
            <div className="message assistant">
              <div className="message-avatar">
                <Sparkles size={18} />
              </div>
              <div className="message-content">
                <div className="thinking-spinner" style={{ display: 'inline-block', marginRight: '8px' }}></div>
                Thinking...
              </div>
            </div>
          )}
        </div>

        <Composer 
          input={input}
          onInputChange={setInput}
          onSend={handleSend}
          isLoading={isLoading}
          onStop={() => setIsLoading(false)}
        />
      </main>

      {/* Modals */}
      {settingsOpen && (
        <SettingsModal onClose={() => setSettingsOpen(false)} />
      )}
      
      {arenaOpen && (
        <ModelArenaModal 
          onClose={() => setArenaOpen(false)}
          models={models}
        />
      )}
      
      {mcpOpen && (
        <McpModal onClose={() => setMcpOpen(false)} />
      )}
      
      {analyticsOpen && (
        <AnalyticsModal onClose={() => setAnalyticsOpen(false)} />
      )}
      
      {projectsOpen && (
        <ProjectsModal onClose={() => setProjectsOpen(false)} />
      )}
      
      {gptStoreOpen && (
        <GptStoreModal onClose={() => setGptStoreOpen(false)} />
      )}
    </div>
  );
}

export default App;
