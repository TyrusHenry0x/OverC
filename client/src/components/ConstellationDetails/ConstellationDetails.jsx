import './ConstellationDetails.css'
import { useState, useEffect } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { getOneConstellation } from "../../services/constellations";
import { deleteTask } from "../../services/tasks";
import CreateTask from '../CreateTask/CreateTask';
import Fonts from '../../assets/fonts/Fonts';

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
      <Fonts />
      <div className='task-box'>
        <div className='spacer-div'>
          <h3 className='constellation-name'>{constellation?.name}</h3>
          <CreateTask handleTaskCreate={handleTaskCreate} />
        </div>
        {constellation?.tasks.map((task) => (
          <div className='task-div' key={task.id}>
            <p className='task-name' key={`list${task.id}`}>{task.name}</p>
            <p className='task-time' key={`list${task.id}`}>{task.time} minutes</p>
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