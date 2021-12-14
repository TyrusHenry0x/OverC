import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneConstellation } from "../../services/constellations";
import { AddTask } from "../../services/tasks";

export default function ConstellationDetail({ tasks }) {
  const [constellation, setConstellation] = useState(null)
  const [taskId, setTaskId] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const fetchConstelllation = async () => {
      const constellationItem = await getOneConstellation(id);
      setConstellation(constellationItem);
    };
    fetchConstelllation();
  }, [id]);

  const handleChange = (e) => {
    const { value } = e.target;
    setTaskId(value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTasks = await AddTask({ task_id: taskId, constellation_id: id });
    setConstellation((prevState) => ({ ...prevState, tasks: newTasks }))
  };

  return (
    <div>
      <h3>{constellation?.name}</h3>
      {constellation?.tasks.map((task) => (
        <p key={`list${task.id}`}>{task.name}</p>
      ))}
    </div>
  )
}