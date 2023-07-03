import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { createTask,  updateTask, getTask } from "../api/task.api";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/Tasklist.css"
export function TaskForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  const onsubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateTask(params.id, data)
    }else {
        await createTask(data);
    }
    navigate("/tasks");
  });

  useEffect(() => {
    async function loadTasks() {
      if (params.id) {
        const res = await getTask(params.id);
        setValue("title", res.data.title);
        setValue("description", res.data.description);
      }
    }
    loadTasks();
  }, );
  return (
    <div className="formpage">
      <div className="card-form">
      <form className="form" onSubmit={onsubmit}>
        <input
          type="text"
          placeholder="Titulo"
          className="imput-form"
          {...register("title", { required: true })}
        />
        {errors.title && <span>El titulo es requerido</span>}

        <textarea
          name=""
          id=""
          cols="50"
          rows="10"
          placeholder="Descripción"
          className="imput-form"
          {...register("description", { required: true })}
        ></textarea>
        {errors.description && <span>la descripción es requerida</span>}
        <button className="formbutton">Guardar</button>
      </form>
      </div>
    </div>
  );
}
