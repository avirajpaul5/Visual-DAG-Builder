````markdown
# Visual DAG Builder – VectorShift Frontend Assessment

This is my implementation of the frontend technical assessment assigned by **VectorShift**. The project showcases both frontend development skills and fullstack integration using **React** and **FastAPI**.

---

## 🔧 Features

### 1. ♻️ Node Abstraction
- Built a reusable `BaseNode` component to standardize logic across node types.
- Created 5+ demo nodes using this system to showcase scalability and modularity.

### 2. 🎨 Custom Styling
- Designed a clean, cohesive UI from scratch.
- Ensured consistency and clarity across node types and interactions.

### 3. 📝 Smart Text Node
- Dynamically resizes based on user input for better visibility.
- Parses `{{variable}}` syntax and auto-generates input Handles accordingly.

### 4. 🔁 Backend Integration
- Frontend submits node graph to backend via `/pipelines/parse`.
- FastAPI backend returns:
  - Total nodes and edges
  - Whether the graph is a **Directed Acyclic Graph (DAG)**
- Results displayed via UI alert.

---

## 🚀 Tech Stack

- **Frontend**: React, React Flow, JavaScript
- **Backend**: FastAPI (Python)
- **Tooling**: Vite, Git, REST APIs

---

## 📦 Getting Started

### Frontend
```bash
cd frontend
npm install
npm run dev
````

### Backend

```bash
cd backend
uvicorn main:app --reload
```

---

## 📸 Screenshots

*Add UI screenshots here to showcase your nodes, text input, and alert popup.*

---

## ✍️ Notes

This repo was initially committed as a full submission due to a time-sensitive job application. Commit history will be restructured shortly to reflect step-by-step development and better clarity.

---

## 📫 Contact

Feel free to reach out at [avirajpaul5@gmail.com](mailto:avirajpaul5@gmail.com) or connect via [LinkedIn](https://www.linkedin.com/in/avirajpaul).

```
