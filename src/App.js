
import React from 'react'
import { useState } from "react"
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';


function App() {
  const [tasks, setTasks] = useState([

    {
        id:1,
        text: 'Meeting with nitesh',
        day: '30 March 2023 at 9:00 AM',
        reminder: true
    },
    {
        id:2,
        text: 'Reading book',
        day: '30 March 2023 at 8:30 PM',
        reminder: true
    },
    

])

  // delete task

  const deleteTask = (id) => {
    // updating the state...which excludes item whose id is passed
      setTasks(tasks.filter((task) => task.id !== id))
  }



  return (
    <div className="container">
      <Header/>
      {tasks.length > 0 ? 
      <Tasks tasks={tasks} onDelete={deleteTask}/>
      : 'No Tasks Available for Today'}
    </div>
  );
}

export default App;
