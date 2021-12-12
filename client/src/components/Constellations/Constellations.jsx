import { useState, useEffect, axios } from "react";
import Layout from "../Layout/Layout";

const BASE_URL = "http://localhost:3000"

const Constellations = (props) => {
  const [constellations, setConstellations] = useState([]);

  const getAllConstellations = async () => {
    const response = await axios.get(`${BASE_URL}/constellations`)
    return response.data;
  }

  useEffect(() => {
    const fetchConstellations = async () => {
      const theConstellations = await getAllConstellations();
      setConstellations(theConstellations)
    }
    fetchConstellations()
  }, [])

  return (
    <div>
      {constellations.map}
    </div>
  )
}

export default Constellations;