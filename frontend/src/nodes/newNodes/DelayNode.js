import { useState } from 'react';
import { BaseNode } from '../BaseNode';
import { NODE_ICONS, NODE_TITLES } from '../nodeConfig';  

export const DelayNode = ({ id, data }) => {
  const [state, setState] = useState({
    delay: data?.delay || '1000',
  });

  return (
    <BaseNode
      id={id}
      icon={NODE_ICONS.delay}
      title={NODE_TITLES.delay}
      description="Pause the workflow for a specific duration."
      fields={[
        { type: 'text', label: 'Delay (ms)', stateKey: 'delay' },
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
