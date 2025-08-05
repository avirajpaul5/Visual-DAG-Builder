import axios from 'axios';
import { toast } from 'sonner';

const submitPipeline = async (nodes, edges) => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/pipelines/parse', {
      nodes,
      edges,
    });

    const { num_nodes, num_edges, is_dag } = response.data;

    toast.success(
      <div>
        <div style={{ fontWeight: 600, fontSize: 17 }}>Pipeline Analysis</div>
        <div style={{ fontSize: 15, margin: '8px 0 2px 0' }}>
          📦 Nodes: {num_nodes}<br />
          🔗 Edges: {num_edges}<br />
          🔄 DAG: {is_dag ? 'Yes' : 'No'}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error submitting pipeline:', error);
    toast.error('❌ Failed to submit pipeline. Check console for details.');
  }
};

export default submitPipeline;
