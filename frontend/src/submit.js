import { useStore } from './store';
import submitPipeline from './submitPipeline';

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleClick = () => {
    submitPipeline(nodes, edges);
  };

  return (
    <button
      style={{
        margin: "24px",
        padding: "12px 28px",
        fontSize: "16px",
        fontWeight: 700,
        background: "#0060DF",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      Submit Pipeline
    </button>
  );
};
