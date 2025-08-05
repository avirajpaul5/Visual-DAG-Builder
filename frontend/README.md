# VectorShift Frontend Technical Assessment

**Features:**  
- Node abstraction  
- Unified, custom-styled UI across all components  
- Auto-resizing TextNode with dynamic handle creation for variables  
- Seamless backend integration
- Pipeline DAG detection  


**How to run:**  
1. `cd backend && pip install fastapi uvicorn`  
   `uvicorn main:app --reload`  
2. `cd frontend && npm install && npm start`

**Key files:**  
- `/src/nodes/BaseNode.js` (abstraction)  
- `/src/nodes/` (core node types)  
- `/src/nodes/newNodes/` (all 5 new nodes)  
- `/src/submitPipeline.js` (integration)  
- `/backend/main.py` (DAG logic)

**Contact:**  
Aviraj Paul  
[Portfolio](https://avirajpaul.vercel.app)  
[GitHub](https://github.com/avirajpaul5)
