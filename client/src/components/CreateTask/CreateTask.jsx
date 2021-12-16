import { useState, useEffect } from "react";
import { useParams } from 'react-router'
import { getOneConstellation } from '../../services/constellations'
import { useNavigate } from "react-router-dom";

const CreateTask = ({ handleTaskCreate, setToggle }) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [task, setTask] = useState([])
  const [formData, setFormData] = useState({
    name: "",
    time: "",
    constellation_id: id
  });

  const { name, time } = formData
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

  console.log(formData)
  return (
    <div className='form-box'>

      <form onSubmit={(e) => {
        e.preventDefault();
        handleTaskCreate(formData);
        navigate(0)
      }}>
        <input type="text" name='name' value={name} onChange={handleChange} placeholder='What are you working on today?' />
        <input type="text" name='time' value={time} onChange={handleChange} placeholder='Time' />
        <input type="submit" />
      </form>
    </div>
  )
}

export default CreateTask;