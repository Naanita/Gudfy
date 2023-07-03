import axios from "axios";

const TasksApi = axios.create({
  baseURL: "http://localhost:8000/tasks/api/v1tasks/",
});

export const getAllTasks = () => {
  return TasksApi.get("/");
};

export const createTask = (task) => {
  return TasksApi.post("/", task);
};
export const deleteTask = (id) => {
    return TasksApi.delete(`/${id}/`);
  };

export const completeTask = (id, task) => {
  return TasksApi.patch(`/${id}/`, task);
};


export const updateTask = (id, task) => {
  return TasksApi.patch(`/${id}/`, task);
};

export const getTask = (id) => {
    return TasksApi.get(`/${id}/`);
}