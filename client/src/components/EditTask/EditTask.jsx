import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './EditTask.css'

const EditTask = ({ handleTaskUpdate }) => {
  const { id } = useParams()
  const [task] = useState([])
  const [formData, setFormData] = useState({
    name: "",
    time: "",
    constellation_id: id
  });

  const { name, time } = formData

  useEffect(() => {
    const prefillFormData = async () => {
      const taskData = task.find((task) => task.id === Number(id));
      setFormData({ name: taskData.name, time: taskData.time });
    }
    if (task.length) prefillFormData();
  }, [task, id]);

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  console.log(formData)
  return (
    <div className="edit-background">
      <div className='edit-form-box'>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleTaskUpdate(id, formData)
        }}>
          <input className='name-input' type="text" name='name' value={name} onChange={handleChange} placeholder='What are you working on today?' />
          <input className='time-input' type="text" name='time' value={time} onChange={handleChange} placeholder='Time' />
          <input className='submit-input' type="submit" />
        </form>
      </div>
    </div>
  )
}

export default EditTask;
