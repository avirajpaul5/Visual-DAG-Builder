import ReactDOM from 'react-dom';
import NodeSearchBar from './NodeSearchBar';
import NodeCategoryToggles from './NodeCategoryToggles';
import NodeButtonGrid from './NodeButtonGrid';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { useStore } from '../store'; 
import submitPipeline from '../submitPipeline';

export const ToolbarContainer = ({
  search,
  setSearch,
  category,
  setCategory,
  isMinimized,
  setIsMinimized,
}) => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = () => {
    submitPipeline(nodes, edges);
  };

  const toolbarContent = (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          zIndex: 120,
          pointerEvents: 'none',  
        }}
      >
        <div
          style={{
            margin: 'auto',
            maxWidth: 1600,
            pointerEvents: 'auto',
          }}
        >
          {/* Toolbar styled container */}
          <div
            style={{
              background: '#F9FAFB',
              boxShadow: '0 2px 8px rgba(99,102,241,0.06)',
              borderBottom: '1.5px solid #E5E7EB',
              position: 'relative',
              padding: isMinimized ? '0' : '18px 32px 18px 32px',
              display: isMinimized ? 'none' : 'flex',
              flexDirection: 'column',
              gap: isMinimized ? 0 : 14,
              maxHeight: isMinimized ? '0px' : '220px',
              overflow: 'visible', 
              transition: 'max-height 0.38s cubic-bezier(0.77, 0, 0.175, 1), padding 0.3s, gap 0.3s',
              minHeight: isMinimized ? '0' : 'unset',
            }}
          >
            {/* Toolbar content */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 28,
                marginBottom: 8,
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
                <NodeSearchBar search={search} setSearch={setSearch} />
                <NodeCategoryToggles category={category} setCategory={setCategory} />
              </div>
              <button
                style={{
                  padding: "11px 28px",
                  fontSize: "15px",
                  fontWeight: 700,
                  background: "#6366F1",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  boxShadow: '0 2px 8px rgba(99,102,241,0.08)',
                  transition: 'background 0.16s',
                  letterSpacing: '0.04em',
                  marginLeft: 24,
                }}
                onClick={handleSubmit}
                onMouseOver={e => e.currentTarget.style.background = "#363842"}
                onMouseOut={e => e.currentTarget.style.background = "#6366F1"}
              >
                Submit Pipeline
              </button>
            </div>
            <NodeButtonGrid search={search} category={category} />

            {/* Minimize button (absolute at bottom left of toolbar) */}
            <button
              style={{
                position: 'absolute',
                left: 20,
                bottom: -19,
                background: '#fff',
                border: '1.5px solid #E5E7EB',
                borderRadius: '8px 8px 16px 16px',
                padding: '3px 18px 3px 18px',
                boxShadow: '0 2px 8px rgba(99,102,241,0.12)',
                zIndex: 125, 
                cursor: 'pointer',
                transition: 'border-color 0.22s, background 0.18s',
                pointerEvents: 'auto', 
              }}
              title="Hide toolbar"
              onClick={() => setIsMinimized(true)}
              onMouseOver={e => {
                e.currentTarget.style.borderColor = '#6366F1';
                e.currentTarget.style.background = '#F2F6FF';
              }}
              onMouseOut={e => {
                e.currentTarget.style.borderColor = '#E5E7EB';
                e.currentTarget.style.background = '#fff';
              }}
            >
              <ChevronUp style={{ color: '#6366F1', fontSize: 20 }} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Maximize button - moved outside the main toolbar container */}
      {isMinimized && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            zIndex: 130, 
            pointerEvents: 'none', 
          }}
        >
          <div
            style={{
              margin: 'auto',
              maxWidth: 1600,
              pointerEvents: 'auto', 
            }}
          >
            <button
              style={{
                position: 'absolute',
                top: 18,
                left: 20,
                background: '#fff',
                border: '1.5px solid #E5E7EB',
                borderRadius: '0 0 16px 16px',
                padding: '8px 14px',
                boxShadow: '0 2px 8px rgba(99,102,241,0.10)',
                zIndex: 135, 
                cursor: 'pointer',
                transition: 'border-color 0.22s, background 0.18s',
                pointerEvents: 'auto', 
              }}
              title="Show toolbar"
              onClick={() => setIsMinimized(false)}
              onMouseOver={e => {
                e.currentTarget.style.borderColor = '#6366F1';
                e.currentTarget.style.background = '#F2F6FF';
              }}
              onMouseOut={e => {
                e.currentTarget.style.borderColor = '#E5E7EB';
                e.currentTarget.style.background = '#fff';
              }}
            >
              <ChevronDown style={{ color: '#6366F1', fontSize: 23 }} />
            </button>
          </div>
        </div>
      )}
    </>
  );

  return ReactDOM.createPortal(
    toolbarContent,
    document.getElementById('toolbar-root')
  );
};
