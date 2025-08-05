// NodeSearchBar.js
import { Search } from 'lucide-react';

const NodeSearchBar = ({ search, setSearch }) => (
  <div style={{
    display: 'flex', alignItems: 'center', background: '#fff', borderRadius: 8,
    border: '1.5px solid #E5E7EB', padding: '6px 12px', gap: 8
  }}>
    <Search size={16} style={{ color: '#6366F1' }} />
    <input
      type="search"
      placeholder="Search Nodes"
      value={search}
      onChange={e => setSearch(e.target.value)}
      style={{
        border: 'none',
        outline: 'none',
        background: 'transparent',
        fontSize: 15,
        color: '#363842',
        width: 180
      }}
    />
  </div>
);

export default NodeSearchBar;
