import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { useState } from "react";
import { AddTask } from "./components/AddTask";
function App() {
  const [showAddTask,setShowAddTask] = useState(false);
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      reminder: true,
      day: "Monday 1 PM",
    },
    {
      id: 2,
      text: "Meeting at school",
      reminder: true,
      day: "Monday 5 PM",
    },
    {
      id: 3,
      text: "Food shopping",
      reminder: false,
      day: "Monday 12 PM",
    },
    {
      id: 4,
      text: "Doctors Appointment",
      reminder: true,
      day: "Monday 05 PM",
    },
  ]);

  //Add task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    console.log(id);
    const newTask = { id, ...task };
    setTask([...tasks, newTask]);
  };

  //Delete task
  const deleteTask = (id) => {
    setTask(tasks.filter((tasks) => tasks.id !== id));
    //console.log(id);
  };

  //Toggle reminder
  const toggleReminder = (id) => {
    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
    //console.log(id);
  };

  return (
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd = {showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No task to show"
      )}
    </div>
  );
}

export default App;
