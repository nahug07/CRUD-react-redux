import TasksList from "./components/TasksList/TasksList";
import TaskForm from "./components/TaskForm/TaskForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className="flex flex-col items-center justify-center h-full">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TasksList />} />
            <Route path="/create-task" element={<TaskForm />} />
            <Route path="/edit-task/:id" element={<TaskForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
