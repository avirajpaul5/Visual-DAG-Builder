// draggableNode.js

export const DraggableNode = ({ type, label, icon }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={type}
      onDragStart={event => onDragStart(event, type)}
      onDragEnd={event => (event.target.style.cursor = 'grab')}
      style={{
        cursor: 'grab',
        minWidth: '100px',
        minHeight: '40px',
        maxHeight: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        backgroundColor: '#F9FAFB',
        border: '1.5px solid #E5E7EB',
        color: '#363842',
        gap: 10,
        fontWeight: 500,
        fontSize: 15,
        padding: '0px 8px',
        boxShadow: '0 2px 8px rgba(99,102,241,0.08)',
        transition: 'border-color 0.22s, box-shadow 0.18s',
      }}
      draggable
      onMouseOver={e => {
        e.currentTarget.style.borderColor = '#6366F1';
        e.currentTarget.style.boxShadow = '0 2px 14px rgba(99,102,241,0.16)';
      }}
      onMouseOut={e => {
        e.currentTarget.style.borderColor = '#E5E7EB';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(99,102,241,0.08)';
      }}
    >
      {icon && <span style={{ fontSize: 20 }}>{icon}</span>}
      <span>{label}</span>
    </div>
  );
};
