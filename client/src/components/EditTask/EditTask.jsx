import { useState, useState } from "react";
import { useParams } from "react-router-dom";

const EditTask = (handleTaskUpdate) => {
  const { id } = useParams()
  const [task, setTask] = useState([])
  const [formData, setFormData] = useState({
    name: "",
    time: "",
    constellation_id: id
  });


  console.log(id)

  const { name, time } = formData


  // useEffect(() => {
  //   const e = { target: { name: 'constellation_id', value: constellation_id } }
  //   handleChange(e)
  // }, [])

  useEffect(() => {
    const prefillFormData = async () => {
      const taskData = tasks.find((task) => task.id === Number(id));
      setFormData({ name: taskData.name, time: taskData.time });
    }
    if (tasks.length) prefillFormData();
  }, [tasks, id]);

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
  console.log(formData)
  return (
    <div className='form-box'>

      <form onSubmit={(e) => {
        e.preventDefault();
        handleTaskCreate(formData)
      }}>
        <input type="text" name='name' value={name} onChange={handleChange} placeholder='What are you working on today?' />
        <input type="text" name='time' value={time} onChange={handleChange} placeholder='Time' />

        <input type="submit" />
      </form>
    </div>
  )
}
