import api from "./api";

export const addSpot = async (spotData) => {
  const response = await api.post("/spots/add", spotData);
  return response.data;
};

export const getPendingSpots = async () => {
  const response = await api.get("/spots/pending");
  return response.data;
};

export const getApprovedSpots = async () => {
  const response = await api.get("/spots/approved");
  return response.data;
};

export const approveSpot = async (id) => {
  const response = await api.put(`/spots/approve/${id}`);
  return response.data;
};

export const rejectSpot = async (id) => {
  const response = await api.put(`/spots/reject/${id}`);
  return response.data;
};