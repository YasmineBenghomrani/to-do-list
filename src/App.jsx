import logo from "./logo.svg";
import "./App.css";
import MainContainer from "./components/mainContainer";
import Modal from "./components/modal";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//gestion liste de tâches

function App() {
  const [visible, setVisible] = useState(false);
  const [task, setTask] = useState([]);
  return (
    <main>
      <MainContainer setTask={setTask} task={task} setVisible={setVisible} />
      <Modal
        task={task}
        setTask={setTask}
        visible={visible}
        setVisible={setVisible}
      />
      <ToastContainer />
    </main>
  );
}

export default App;
