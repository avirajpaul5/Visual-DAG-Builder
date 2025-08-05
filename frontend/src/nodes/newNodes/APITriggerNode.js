import { useState } from 'react';
import { BaseNode } from '../BaseNode';
import { NODE_ICONS, NODE_TITLES } from '../nodeConfig';

export const APITriggerNode = ({ id, data }) => {
  const [state, setState] = useState({
    endpoint: data?.endpoint || 'https://api.example.com',
    method: data?.method || 'GET',
  });

  return (
    <BaseNode
      id={id}
      icon={NODE_ICONS.apitrigger}
      title={NODE_TITLES.apitrigger}
      description="Trigger workflow with an API call."
      fields={[
        { type: 'text', label: 'Endpoint', stateKey: 'endpoint' },
        {
          type: 'select',
          label: 'Method',
          stateKey: 'method',
          options: [
            { label: 'GET', value: 'GET' },
            { label: 'POST', value: 'POST' },
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
