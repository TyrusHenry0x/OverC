import { useState, useEffect } from "react";
import { Switch, Route, Routes, useNavigate } from 'react-router-dom'
import ConstellationDetail from "../components/ConstellationDetails/ConstellationDetails";

import Constellations from "../components/Constellations/Constellations";
import Tasks from "../components/Tasks/Tasks";
import { getAllConstellations, getOneConstellation } from "../services/constellations";
import { getAllTasks } from "../services/tasks";
import { postTask } from "../services/tasks";
import { putTask } from "../services/tasks"
import { deleteTask } from "../services/tasks";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Layout from "../components/Layout/Layout";

export default function MainContainer() {
  const [constellations, setConstellations] = useState([]);
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

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

  const handleTaskCreate = async (id, formData) => {
    const newTask = await postTask(id, formData);
    setTasks((prevState) => [...prevState, newTask]);
    navigate.push('/tasks');
  };

  const handleConstellationUpdate = async (id, formData) => {
    const newTask = await putTask(id, formData);
    setConstellations((prevState) =>
      prevState.map((task) => {
        return task.id === Number(id) ? newTask : task;
      })
    );
    navigate.push('/tasks');
  };

  // const handleTaskDelete = async (id) => {
  //   await deleteTask(id);
  //   setTasks((prevState) => prevState.filter((task) => task.id !== id));
  // };

  return (

    <div>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/constellations" element={<Constellations constellations={constellations} />} />
          <Route path="/constellations/:id"
            element={<ConstellationDetail setTasks={setTasks} />}
          // handleTaskDelete={<handleTaskDelete />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </div>
    // <Tasks tasks={tasks} />
  )
}