import { BaseNode } from '../BaseNode';
import { NODE_ICONS, NODE_TITLES } from '../nodeConfig';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      icon={NODE_ICONS.llm}
      title={NODE_TITLES.llm}
      description="Leverage large language models in your workflow."
      fields={[]}
      handles={[
        { type: 'target', position: 'left', id: `${id}-system`, style: { top: '33%' } },
        { type: 'target', position: 'left', id: `${id}-prompt`, style: { top: '66%' } },
        { type: 'source', position: 'right', id: `${id}-response` },
      ]}
      data={data}
    >
      <span>This is a LLM.</span>
    </BaseNode>
  );
};
