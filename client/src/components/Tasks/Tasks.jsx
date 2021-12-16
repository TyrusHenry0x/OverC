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
    // <div className="tasks">
    //   <h1>Tasks</h1>
    //   {tasks.map((task) => (
    //     <div key={task.id}>
    //       <Link to={`/tasks/${task.id}`}>
    //         <p>{task.name}</p>
    //       </Link>
    //       <>
    //         <Link to={`/tasks/${task.id}/edit`}>
    //           <button>edit</button>
    //         </Link>
    //         <button onClick={() => handleTaskDelete(task.id)}>Delete</button>
    //       </>
    //     </div>
    //   ))}
    //   <Link to="/tasks/new">
    //     <button>Create</button>
    //   </Link>
    // </div>
  );
}