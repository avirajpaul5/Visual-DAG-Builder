import { useState } from 'react';
import { BaseNode } from '../BaseNode';
import { NODE_ICONS, NODE_TITLES } from '../nodeConfig';

export const CommentNode = ({ id, data }) => {
  const [state, setState] = useState({
    comment: data?.comment || 'Add your notes...',
  });

  return (
    <BaseNode
      id={id}
      icon={NODE_ICONS.comment}
      title={NODE_TITLES.comment}
      description="Add notes or documentation for your workflow."
      fields={[
        { type: 'text', label: 'Comment', stateKey: 'comment' },
      ]}
      handles={[]}
      state={state}
      setState={setState}
      data={data}
    />
  );
};
