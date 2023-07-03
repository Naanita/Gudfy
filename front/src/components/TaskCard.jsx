import React, { useState, useEffect } from 'react';
import { completeTask, deleteTask } from '../api/task.api';
import { useNavigate } from 'react-router-dom';
import Joyride from 'react-joyride';
import Swal from 'sweetalert2';
import '../styles/Table.css';

export function TaskCard({ task, addNewTask }) {
  const [completed, setCompleted] = useState(task.completed);
  const navigate = useNavigate();
  const [deleted, setDeleted] = useState(false);
  const [joyrideSteps, setJoyrideSteps] = useState([]);

  useEffect(() => {
    const steps = [
      {
        target: '.task-title',
        content: 'Haz clic aquí para editar las tareas.',
      },
      {
        target: '.checkbox-label',
        content: 'Marca esta casilla cuando hayas completado la tarea.',
      },
      {
        target: '.delete-button',
        content: 'Haz clic aquí para eliminar la tarea.',
      },
    ];

    setJoyrideSteps(steps);
  }, []);

  const handleCheckboxChange = () => {
    const newCompleted = !completed;
    setCompleted(newCompleted);

    if (!deleted) {
      completeTask(task.id, { completed: newCompleted })
        .then(response => {
          console.log('Tarea actualizada:', response.data);
        })
        .catch(error => {
          console.error('Error al actualizar la tarea:', error);
        });
    }
  };

  const handleClick = () => {
    if (!deleted) {
      navigate(`/task/${task.id}`);
    }
  };

  const handleDelete = async () => {
    Swal.fire({
      title: '¿Estás seguro que quieres eliminar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then(async result => {
      if (result.isConfirmed) {
        try {
          await deleteTask(task.id);
          setDeleted(true);
          window.location.reload(); // Recargar la página después de eliminar
        } catch (error) {
          console.error('Error al eliminar la tarea:', error);
        }
        navigate("/tasks");
      }
    });
  };

  return (
    <>
      <Joyride steps={joyrideSteps} continuous={true} run={true} showSkipButton={true} />
      <tr className={`${deleted ? 'deleted' : ''}`}>
        <td onClick={handleClick} className="task-title">
          {task.title}
        </td>
        <td>{task.description}</td>
        <td>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={completed}
              onChange={handleCheckboxChange}
              disabled={deleted}
            />
          </label>
        </td>
        <td>
          {!deleted && (
            <button className="delete-button" onClick={handleDelete}>
              Eliminar
            </button>
          )}
        </td>
      </tr>
    </>
  );
}
