// NodeCategoryToggles.js

const categories = [
    { key: 'all', label: 'All Nodes' },
    { key: 'default', label: 'Default Nodes' },
    { key: 'new', label: 'New Nodes' },
  ];
  
  const NodeCategoryToggles = ({ category, setCategory }) => (
    <div style={{ display: 'flex', gap: 10 }}>
      {categories.map(cat => (
        <button
          key={cat.key}
          onClick={() => setCategory(cat.key)}
          style={{
            padding: '8px 18px',
            borderRadius: 8,
            border: 'none',
            fontWeight: 600,
            fontSize: 15,
            background: category === cat.key ? '#6366F1' : '#fff',
            color: category === cat.key ? '#fff' : '#363842',
            boxShadow: category === cat.key ? '0 2px 8px rgba(99,102,241,0.12)' : 'none',
            cursor: 'pointer',
            transition: 'all .2s'
          }}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
  
  export default NodeCategoryToggles;
  