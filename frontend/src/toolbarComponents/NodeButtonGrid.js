// NodeButtonGrid.js
import { DraggableNode } from '../draggableNode';
import { NODE_ICONS, NODE_TITLES } from '../nodes/nodeConfig';

const nodeConfigs = [
  // Default nodes
  { key: 'customInput', label: NODE_TITLES.input, icon: NODE_ICONS.input, category: 'default' },
  { key: 'llm', label: NODE_TITLES.llm, icon: NODE_ICONS.llm, category: 'default' },
  { key: 'customOutput', label: NODE_TITLES.output, icon: NODE_ICONS.output, category: 'default' },
  { key: 'text', label: NODE_TITLES.text, icon: NODE_ICONS.text, category: 'default' },
  // New nodes
  { key: 'calculation', label: NODE_TITLES.calculation, icon: NODE_ICONS.calculation, category: 'new' },
  { key: 'switch', label: NODE_TITLES.switch, icon: NODE_ICONS.switch, category: 'new' },
  { key: 'delay', label: NODE_TITLES.delay, icon: NODE_ICONS.delay, category: 'new' },
  { key: 'comment', label: NODE_TITLES.comment, icon: NODE_ICONS.comment, category: 'new' },
  { key: 'apitrigger', label: NODE_TITLES.apitrigger, icon: NODE_ICONS.apitrigger, category: 'new' },
];

const NodeButtonGrid = ({ search, category }) => {
  let visibleNodes = nodeConfigs;
  if (category === 'default') visibleNodes = nodeConfigs.filter(n => n.category === 'default');
  else if (category === 'new') visibleNodes = nodeConfigs.filter(n => n.category === 'new');

  if (search)
    visibleNodes = visibleNodes.filter(n => n.label.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={{
      display: 'flex', flexWrap: 'wrap', gap: 14, marginBottom: 10
    }}>
      {visibleNodes.map(n => (
        <DraggableNode key={n.key} type={n.key} label={n.label} icon={n.icon} />
      ))}
      {visibleNodes.length === 0 && (
        <div style={{ color: '#AAA', fontStyle: 'italic', marginLeft: 14 }}>No nodes found</div>
      )}
    </div>
  );
};

export default NodeButtonGrid;
