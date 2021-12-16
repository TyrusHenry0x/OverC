import React from "react";
import { Link } from "react-router-dom";

export default function Tasks({ tasks }) {
  return (
    <div>
      <h3>Tasks</h3>
      {tasks.map((task) => (
        <p key={task.id}>{task.name}</p>
      ))}
    </div>
  );
}