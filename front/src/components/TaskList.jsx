  import React, { useEffect, useState } from "react";
  import { getAllTasks } from "../api/task.api";
  import { TaskCard } from "./TaskCard";
  import { Link } from "react-router-dom";

  export function TaskList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
      async function loadTasks() {
        try {
          const res = await getAllTasks();
          setTasks(res.data);
        } catch (error) {
          console.error("Error al cargar las tareas:", error);
        }
      }
      loadTasks();
    }, []);

    const addNewTask = (newTask) => {
      setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    return (
      <div className="container">
        <h1 className="title">Tus tareas!</h1>
        <Link to="/task-new">
          <button className="buttonList">+</button>
        </Link>
        {tasks.length === 0 ? (
          <p className="message">Aún no tienes tareas. Crea una!</p>
        ) : (
          <table className="task-table">
            <thead>
              <tr>
                <th className="table-header">Título</th>
                <th className="table-header">Descripción</th>
                <th className="table-header">Completado</th>
                <th className="table-header">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <TaskCard key={task.id} task={task} addNewTask={addNewTask} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
