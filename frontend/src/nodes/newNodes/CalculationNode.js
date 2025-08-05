import { useState } from 'react';
import { BaseNode } from '../BaseNode';
import { NODE_ICONS, NODE_TITLES } from '../nodeConfig';

export const CalculationNode = ({ id, data }) => {
  const [state, setState] = useState({
    formula: data?.formula || 'a + b',
  });

  return (
    <BaseNode
      id={id}
      icon={NODE_ICONS.calculation}
      title={NODE_TITLES.calculation}
      description="Perform mathematical operations on inputs."
      fields={[
        { type: 'text', label: 'Formula', stateKey: 'formula' },
      ]}
      handles={[
        { type: 'target', position: 'left', id: `${id}-input` },
        { type: 'source', position: 'right', id: `${id}-output` },
      ]}
      state={state}
      setState={setState}
      data={data}
    />
  );
};
