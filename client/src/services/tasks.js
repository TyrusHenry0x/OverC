import api from "./apiConfig";

export const getAllTasks = async () => {
  const resp = await api.get('/tasks');
  return resp.data;
};

export const getOneTask = async (id) => {
  const resp = await api.get(`/tasks/${id}`);
  return resp.data;
};

export const postTask = async (taskData) => {
  const resp = await api.post('/tasks', { task: taskData });
  return resp.data;
};

export const putTask = async (id, taskData) => {
  const resp = await api.put(`/foods/${id}`, { task: taskData });
  return resp.data
}

export const deleteTask = async (id) => {
  await api.delete(`/tasks/${id}`);
}

export const AddTask = async (idData) => {
  const resp = await api.post('/constellations/:id', { task: idData });
  return resp.data;
}