import TaskItem from "./taskItem";

export default function MainContainer({ setVisible, task, setTask }) {
  return (
    <div className="main-container">
      <h2>All tasks</h2>
      {/* // lenght: la taille du tableau // === pour comparé // ? vérifier la
      condition //: pour dire sinon */}
      {task.length === 0 ? (
        <p>You dont have tasks for the moment</p>
      ) : (
        task.map((e) => {
          return <TaskItem setTask={setTask} task={e} />;
        })
      )}
      <input
        onClick={() => {
          setVisible(true);
        }}
        className="add-button"
        type="button"
        value="+"
      />
    </div>
  );
}
