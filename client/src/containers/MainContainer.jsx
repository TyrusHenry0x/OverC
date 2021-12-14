import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from 'react-router-dom'

import Constellations from "../components/Constellations/Constellations";
import Tasks from "../components/Tasks/Tasks";
import { getAllConstellations } from "../services/constellations";

export default function MainContainer() {
  const [constellations, setConstellations] = useState([]);

  useEffect(() => {
    const fetchConstellations = async () => {
      const Constellationlist = await getAllConstellations();
      setConstellations(Constellationlist)
    };
    fetchConstellations()
  }, []);

  return (
    <Constellations constellations={constellations} />
  )
}