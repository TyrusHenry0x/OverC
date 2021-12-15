import './ConstellationDetails.css'
import { useState, useEffect } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { getOneConstellation } from "../../services/constellations";
import { PostTask } from '../../services/tasks';
import { deleteTask } from "../../services/tasks";
import CreateTask from '../CreateTask/CreateTask';

export default function ConstellationDetail({ setTasks }) {
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
    navigate(`/constellations`)
  };

  return (

    <div className="detail-background">
      <CreateTask constellation={constellation} setConstellation={setConstellation} />
      <div>
        <h3>{constellation?.name}</h3>
        {constellation?.tasks.map((task) => (
          <div key={task.id}>
            <p key={`list${task.id}`}>{task.name}</p>
            <button onClick={() => handleTaskDelete(task.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}