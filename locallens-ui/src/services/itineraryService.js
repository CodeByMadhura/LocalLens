import api from "./api";

export const generateItinerary = async (data) => {
  const response = await api.post("/itinerary/generate", data);
  return response.data;
};