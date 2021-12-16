import { useState, useEffect } from "react";
import { useParams } from 'react-router'
import { getOneConstellation } from '../../services/constellations'
// import { postTask } from "../../services/tasks";

const CreateTask = ({ handleTaskCreate, setToggle }) => {
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
    const fetchConst = async () => {
      const solo = await getOneConstellation(id);
      setTask(solo);

    }
    fetchConst();
  }, [id]);

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
        handleTaskCreate(formData);
      }}>
        <input type="text" name='name' value={name} onChange={handleChange} placeholder='What are you working on today?' />
        <input type="text" name='time' value={time} onChange={handleChange} placeholder='Time' />

        <input type="submit" />
      </form>
    </div>
  )
}

export default CreateTask;