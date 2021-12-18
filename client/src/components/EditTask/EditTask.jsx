import './EditTask.css'
import { useState, useEffect } from "react";
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom';

const EditTask = ({ tasks, handleTaskUpdate }) => {
  const [task] = useState([])
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    time: "",
  });

  const { name, time } = formData
  const { id } = useParams()

  useEffect(() => {
    const prefillFormData = () => {
      const taskItem = task.find((task) => task.id === Number(id));
      setFormData({ name: taskItem.name, time: taskItem.time });
    };
    if (task.length) prefillFormData();
  }, [tasks]);

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className="edit-background">
      <div className='edit-form-box'>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleTaskUpdate(id, formData)
          navigate('/constellations')
        }}>
          <input className='name-input' type="text" name='name' value={name} onChange={handleChange} placeholder='What are you working on today?' autocomplete="off" />
          <input className='time-input' type="text" name='time' value={time} onChange={handleChange} placeholder='Time' autocomplete="off" />
          <input className='submit-input' type="submit" />
        </form>
      </div>
    </div>
  )
}

export default EditTask;