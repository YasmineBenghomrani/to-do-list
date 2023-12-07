import React from "react";

export default function TaskItem({ task, setTask }) {
  return (
    <div className="task-Item">
      <p>{task}</p>
      <div className="actions">
        <input className="check" type="checkbox" />
        <input
          className="Delet"
          onClick={() => {
            //on est entrain dire que je souhaite filter "lastvalue" qui est l'encien tableau que je recuêre grace a setTask et recuperer lelement(e) qui est different "!==" de task
            setTask((lastValue) => {
              return lastValue.filter((e) => e !== task);
            });
          }}
          type="button"
          value="x"
        />
      </div>
    </div>
  );
}
