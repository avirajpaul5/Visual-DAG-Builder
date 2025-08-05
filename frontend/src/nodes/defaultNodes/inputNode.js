import { useState } from 'react';
import { BaseNode } from '../BaseNode';
import { NODE_ICONS, NODE_TITLES } from '../nodeConfig';

export const InputNode = ({ id, data }) => {
  const [state, setState] = useState({
    inputName: data?.inputName || id.replace('customInput-', 'input_'),
    inputType: data?.inputType || 'Text',
  });

  return (
    <BaseNode
      id={id}
      icon={NODE_ICONS.input}
      title={NODE_TITLES.input}
      description="Entry point for data into your workflow."
      fields={[
        { type: 'text', label: 'Name', stateKey: 'inputName' },
        {
          type: 'select',
          label: 'Type',
          stateKey: 'inputType',
          options: [
            { label: 'Text', value: 'Text' },
            { label: 'File', value: 'File' },
          ],
        },
      ]}
      handles={[
        { type: 'source', position: 'right', id: `${id}-value` },
      ]}
      state={state}
      setState={setState}
      data={data}
    />
  );
};
