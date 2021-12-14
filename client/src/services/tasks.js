import api from "./apiConfig";

export const getAllTasks = async () => {
  const resp = await api.get('/tasks');
  return resp.data;
};

export const getOneTask = async (id) => {
  const resp = await api.get(`/tasks/${id}`);
  return resp.data;
};

export const postTask = async (id, taskData) => {
  const resp = await api.put(`/foods/${id}`, { task: taskData });
  return resp.data
}