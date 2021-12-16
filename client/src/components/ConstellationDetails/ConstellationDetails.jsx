import './ConstellationDetails.css'
import { useState, useEffect } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { getOneConstellation } from "../../services/constellations";
import { deleteTask } from "../../services/tasks";
import CreateTask from '../CreateTask/CreateTask';

export default function ConstellationDetail({ setTasks, handleTaskCreate }) {
  const [constellation, setConstellation] = useState(null)


  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchConstellation = async () => {
      const constellationItem = await getOneConstellation(id);
      setConstellation(constellationItem);
    };
    fetchConstellation();
  }, [id]);

  const handleTaskDelete = async (id) => {
    await deleteTask(id);
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
    navigate(0)
  };

  return (

    <div className="detail-background">
      <CreateTask handleTaskCreate={handleTaskCreate} />
      <div className='task-box'>
        <h3 className='constellation-name'>{constellation?.name}</h3>
        {constellation?.tasks.map((task) => (
          <div key={task.id}>
            <p key={`list${task.id}`}>{task.name}</p>
            <p key={`list${task.id}`}>{task.time} minutes</p>
            <NavLink to="Edit">
              <button>
                Edit
              </button>
            </NavLink>
            <button onClick={() => handleTaskDelete(task.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}