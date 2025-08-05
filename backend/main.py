from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any

app = FastAPI()

# Allow frontend to talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, lock this down
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define request schema
class PipelineData(BaseModel):
    nodes: List[Dict[str, Any]]
    edges: List[Dict[str, Any]]

@app.post("/pipelines/parse")
async def parse_pipeline(data: PipelineData):
    num_nodes = len(data.nodes)
    num_edges = len(data.edges)

    # Build graph
    graph = {}
    indegree = {}

    for node in data.nodes:
        node_id = node["id"]
        graph[node_id] = []
        indegree[node_id] = 0

    for edge in data.edges:
        src = edge["source"]
        tgt = edge["target"]
        graph[src].append(tgt)
        indegree[tgt] += 1

    # Kahn’s algorithm to check if DAG
    queue = [node for node in indegree if indegree[node] == 0]
    visited = 0

    while queue:
        node = queue.pop(0)
        visited += 1
        for neighbor in graph[node]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                queue.append(neighbor)

    is_dag = (visited == num_nodes)

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag
    }
