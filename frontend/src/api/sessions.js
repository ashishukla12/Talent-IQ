import axiosInstance from "../lib/axios";

export const sessionApi = {
  createSession: async (data) => {
    return (await axiosInstance.post("/api/session", data)).data;
  },

  getActiveSessions: async () => {
    return (await axiosInstance.get("/api/session/active")).data;
  },

  getMyRecentSessions: async () => {
    return (await axiosInstance.get("/api/session/my-recent")).data;
  },

  getSessionById: async (id) => {
    return (await axiosInstance.get(`/api/session/${id}`)).data;
  },

  joinSession: async (id) => {
    return (await axiosInstance.post(`/api/session/${id}/join`)).data;
  },

  endSession: async (id) => {
    return (await axiosInstance.post(`/api/session/${id}/end`)).data;
  },

  getStreamToken: async () => {
    return (await axiosInstance.get("/api/chat/token")).data;
  },
};