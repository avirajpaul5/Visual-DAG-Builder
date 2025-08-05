import { useState, useMemo } from 'react';
import { BaseNode } from '../BaseNode';
import { NODE_ICONS, NODE_TITLES } from '../nodeConfig';

const VAR_REGEX = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const variables = useMemo(() => {
    const found = [];
    let match;
    while ((match = VAR_REGEX.exec(currText))) {
      if (!found.includes(match[1])) found.push(match[1]);
    }
    return found;
  }, [currText]);

  return (
    <BaseNode
      id={id}
      icon={NODE_ICONS.text}
      title={NODE_TITLES.text}
      description="Insert and reference variables in text."
      fields={[]}
      handles={[
        ...variables.map((v, i) => ({
          type: 'target',
          position: 'left',
          id: `${id}-${v}`,
          style: { top: 32 + i * 24 },
        })),
        { type: 'source', position: 'right', id: `${id}-output`, style: { top: '50%' } },
      ]}
      data={data}
    >
      <label>
        Text:
        <textarea
          value={currText}
          onChange={e => setCurrText(e.target.value)}
          style={{
            width: Math.min(Math.max(120, currText.length * 7), 320),
            height: Math.min(Math.max(32, currText.split('\n').length * 28), 160),
            fontSize: 14,
            padding: 4,
            resize: 'none',
          }}
          rows={1}
        />
      </label>
    </BaseNode>
  );
};
