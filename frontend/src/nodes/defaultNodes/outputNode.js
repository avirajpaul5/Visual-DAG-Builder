import { useState } from 'react';
import { BaseNode } from '../BaseNode';
import { NODE_ICONS, NODE_TITLES } from '../nodeConfig';

export const OutputNode = ({ id, data }) => {
  const [state, setState] = useState({
    outputName: data?.outputName || id.replace('customOutput-', 'output_'),
    outputType: data?.outputType || 'Text',
  });

  return (
    <BaseNode
      id={id}
      icon={NODE_ICONS.output}
      title={NODE_TITLES.output}
      description="Final node to output data from workflow."
      fields={[
        { type: 'text', label: 'Name', stateKey: 'outputName' },
        {
          type: 'select',
          label: 'Type',
          stateKey: 'outputType',
          options: [
            { label: 'Text', value: 'Text' },
            { label: 'Image', value: 'File' },
          ],
        },
      ]}
      handles={[
        { type: 'target', position: 'left', id: `${id}-value` },
      ]}
      state={state}
      setState={setState}
      data={data}
    />
  );
};
