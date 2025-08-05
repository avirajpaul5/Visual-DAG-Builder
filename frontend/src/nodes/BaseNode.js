import { useState } from "react";
import { Handle, Position } from "reactflow";
import { Minimize2, Maximize2, Settings, X, Info, Pencil } from "lucide-react";

const handlePositions = {
  left: Position.Left,
  right: Position.Right,
  top: Position.Top,
  bottom: Position.Bottom,
};

export const BaseNode = ({
  id,
  icon,
  title: initialTitle,
  description,
  fields = [],
  handles = [],
  state = {},
  setState = () => {},
  style = {},
  children,
  onClose,
  onSettings,
}) => {
  const [minimized, setMinimized] = useState(false);
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(initialTitle);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      style={{
        border: `2px solid ${minimized ? "#C7D2FE" : "#6366F1"}`,
        background: "#F9FAFB",
        borderRadius: 16,
        boxShadow: minimized ? "0 0 0 #0000" : "0 2px 12px rgba(99,102,241,0.11)",
        opacity: minimized ? 0.88 : 1,
        transition: "box-shadow .16s, border-color .16s, opacity .24s",
        marginBottom: 8,
        position: "relative",
        padding: "0",
      }}
    >
      {/* React Flow Handles */}
      {handles.map((h, idx) => (
        <Handle
          key={h.id || idx}
          type={h.type}
          position={handlePositions[h.position]}
          id={h.id || `${id}-${h.type}-${h.position}`}
          style={h.style}
        />
      ))}

      {/* Node Header */}
      <div style={{
        display: "flex", alignItems: "center", gap: 12,
        background: "#EEF2FF", borderRadius: "14px 14px 0 0",
        padding: "12px 24px 12px 24px",
        borderBottom: "1.5px solid #E0E7FF",
        position: "relative",
        minHeight: 36,
      }}>
        <span style={{ fontSize: 17, color: "#6366F1", marginRight: 3 }}>{icon}</span>
        {!editing ? (
          <span
            style={{
              fontWeight: 600,
              color: "#6366F1",
              fontSize: 20,
              cursor: "pointer",
              display: "flex",
              alignItems: "center"
            }}
            onDoubleClick={() => setEditing(true)}
          >
            {title}
            <Pencil size={18}
              style={{
                fontSize: 18,
                marginLeft: 10,
                verticalAlign: "middle",
                opacity: 0.7,
                cursor: "pointer"
              }}
              title="Edit node name"
              onClick={() => setEditing(true)}
            />
          </span>
        ) : (
          <input
            autoFocus
            value={title}
            onChange={e => setTitle(e.target.value)}
            onBlur={() => setEditing(false)}
            onKeyDown={e => e.key === "Enter" && setEditing(false)}
            style={{
              fontWeight: 600, fontSize: 14, color: "#6366F1",
              border: "1px solid #A5B4FC", borderRadius: 5, padding: "1px 4px", marginLeft: 2, width: 82
            }}
          />
        )}
        {/* Info icon with tooltip */}
        <span
          style={{ marginLeft: 70, color: "#6366F1", cursor: "pointer", fontSize: 13, position: "relative" }}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <Info size={20} />
          {showTooltip && (
            <span style={{
              position: "absolute", top: -65, left: -100, zIndex: 10,
              background: "#fff", color: "#6366F1", border: "1px solid #A5B4FC", borderRadius: 8,
              boxShadow: "0 2px 10px #A5B4FC44", padding: "7px 15px",
              fontSize: 15, fontWeight: 500, whiteSpace: "nowrap"
            }}>
              {description}
            </span>
          )}
        </span>
        <span style={{ flex: 1 }} />
        {/* Minimize/expand button */}
        <button
          style={{
            background: "none", border: "none", cursor: "pointer", marginRight: 3,
            color: "#6366F1", fontSize: 14, padding: 2
          }}
          title={minimized ? "Expand node" : "Minimize node"}
          onClick={() => setMinimized(m => !m)}
        >
          {minimized ? <Maximize2 size={20} /> : <Minimize2 size={20} />}
        </button>
        {/* Settings button */}
        <button style={{
          background: "none", border: "none", cursor: "pointer", marginRight: 3, color: "#6366F1", fontSize: 14, padding: 2
        }} title="Settings" onClick={onSettings}>
          <Settings size={20} />
        </button>
        {/* Close/delete button */}
        <button style={{
          background: "none", border: "none", cursor: "pointer", color: "#6366F1", fontSize: 15, padding: 2
        }} title="Delete node"
          onClick={() => onClose && onClose(id)}
        >
          <X size={20} />
        </button>
      </div>
      {/* Minimized: only header shown */}
      {!minimized && (
        <div style={{ padding: "12px 14px 7px 14px" }}>
          {description && (
            <div style={{ color: "#6366F1", fontSize: 12, marginBottom: 7 }}>{description}</div>
          )}
          {/* Fields */}
          <div>
            {fields.map((field, i) => {
              if (field.type === "text") {
                return (
                  <label key={i} style={{ display: "block", marginBottom: 4, fontSize: 13 }}>
                    {field.label}:
                    <input
                      type="text"
                      value={state[field.stateKey] ?? ""}
                      onChange={e =>
                        setState(s => ({
                          ...s,
                          [field.stateKey]: e.target.value,
                        }))
                      }
                      style={{ marginLeft: 8, fontSize: 13 }}
                    />
                  </label>
                );
              }
              if (field.type === "select") {
                return (
                  <label key={i} style={{ display: "block", marginBottom: 4, fontSize: 13 }}>
                    {field.label}:
                    <select
                      value={state[field.stateKey] ?? field.options[0].value}
                      onChange={e =>
                        setState(s => ({
                          ...s,
                          [field.stateKey]: e.target.value,
                        }))
                      }
                      style={{ marginLeft: 8, fontSize: 13 }}
                    >
                      {field.options.map(opt => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </label>
                );
              }
              return null;
            })}
          </div>
          {children}
        </div>
      )}
    </div>
  );
};
