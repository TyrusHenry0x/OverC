import api from './apiConfig';

export const getAllConstellations = async () => {
  const resp = await api.get(`/constellations`)
  return resp.data;
};

export const getOneConstellation = async (id) => {
  const resp = await api.get(`/constellations/${id}`);
  return resp.data;
};