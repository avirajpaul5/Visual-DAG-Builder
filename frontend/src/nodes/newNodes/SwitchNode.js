import { useState } from 'react';
import { BaseNode } from '../BaseNode';
import { NODE_ICONS, NODE_TITLES } from '../nodeConfig';

export const SwitchNode = ({ id, data }) => {
  const [state, setState] = useState({
    switch: data?.switch || 'on',
  });

  return (
    <BaseNode
      id={id}
      icon={NODE_ICONS.switch}
      title={NODE_TITLES.switch}
      description="Branch workflow based on switch state."
      fields={[
        {
          type: 'select',
          label: 'Switch',
          stateKey: 'switch',
          options: [
            { label: 'On', value: 'on' },
            { label: 'Off', value: 'off' },
          ],
        },
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
