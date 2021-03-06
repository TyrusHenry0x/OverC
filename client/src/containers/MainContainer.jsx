import { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom'
import ConstellationDetail from "../components/ConstellationDetails/ConstellationDetails";
import Constellations from "../components/Constellations/Constellations";
import { getAllConstellations } from "../services/constellations";
import { getAllTasks } from "../services/tasks";
import { postTask } from "../services/tasks";
import { putTask } from "../services/tasks"
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Layout from "../components/Layout/Layout";
import CreateTask from "../components/CreateTask/CreateTask";
import EditTask from "../components/EditTask/EditTask";

export default function MainContainer() {
  const [constellations, setConstellations] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [setToggle] = useState(false);
  useEffect(() => {
    const fetchConstellations = async () => {
      const constellationlist = await getAllConstellations();
      setConstellations(constellationlist)
    };
    fetchConstellations()
  }, []);

  useEffect(() => {
    const fetchTasks = async () => {
      const taskList = await getAllTasks();
      setTasks(taskList);
    };
    fetchTasks();
  }, []);

  const handleTaskCreate = async (formData) => {
    const newTask = await postTask(formData);
    setTasks((prevState) => [...prevState, newTask]);
  };

  const handleTaskUpdate = async (id, formData) => {
    const updatedTask = await putTask(id, formData);
    setTasks(prevState => prevState.map(task => {
      return task.id === Number(id) ? updatedTask : task;
    }));
  };

  return (
    <div>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/constellations" element={<Constellations constellations={constellations} />} />
          <Route path="/constellations/:id"
            element={<ConstellationDetail setTasks={setTasks} handleTaskCreate={handleTaskCreate} setToggle={setToggle} />}
          />
          <Route path="/tasks/:id/edit" element={<EditTask tasks={tasks} handleTaskUpdate={handleTaskUpdate} />} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<CreateTask handleTaskCreate={handleTaskCreate} setToggle={setToggle} />} />
        </Routes>
      </Layout>
    </div>
  )
}