
import { useState, useEffect } from "react";
import { PostTask } from "../../services/tasks";

const CreateTask = ({ constellation, setConstellation }) => {
  const [formData, setFormData] = useState({
    name: '',
    time: '',
    constellation_id: '',
  });

  const { name, time, constellation_id } = formData


  useEffect(() => {
    const e = { target: { name: 'constellation_id', value: constellation?.id } }
    handleChange(e)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTasks = await PostTask(formData);
    setConstellation((prevState) => ({ ...prevState, tasks: newTasks }))
    newTasks();
  };


  return (
    <div className='form-box'>

      <form onSubmit={handleSubmit}>
        <input type="textarea" name='name' value={name} onChange={handleChange} placeholder='What are you working on today?' />
        <input type="textarea" name='time' value={time} onChange={handleChange} placeholder='Time' />

        <input type="submit" />
      </form>
    </div>
  )
}

export default CreateTask;