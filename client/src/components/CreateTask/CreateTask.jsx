
import { useState, useEffect } from "react";
// import { postTask } from "../../services/tasks";

const CreateTask = ({ id, handleTaskCreate }) => {
  const [formData, setFormData] = useState({
    name: '',
    time: '',
    // constellation_id: '',
  });

  const { name, time } = formData


  // useEffect(() => {
  //   const e = { target: { name: 'constellation_id', value: constellation_id } }
  //   handleChange(e)
  // }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const newTasks = await postTask(formData);
  //   setConstellation((prevState) => ({ ...prevState, tasks: newTasks }))
  //   newTasks();
  // };


  return (
    <div className='form-box'>

      <form onSubmit={(e) => {
        e.preventDefault();
        handleTaskCreate(id, formData)
      }}>
        <input type="textarea" name='name' value={name} onChange={handleChange} placeholder='What are you working on today?' />
        <input type="textarea" name='time' value={time} onChange={handleChange} placeholder='Time' />

        <input type="submit" />
      </form>
    </div>
  )
}

export default CreateTask;