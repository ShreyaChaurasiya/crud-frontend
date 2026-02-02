import axios from "axios";

const API_URL = "https://crud-backend-u4hc.onrender.com/users";

// Add user
export const addUser = async (data) => {
  return axios.post(API_URL, data);
};

// Get all users
export const getUsers = async () => {
  return axios.get(API_URL);
};

// Get user by id
export const getUser = async (id) => {
  return axios.get(`${API_URL}/${id}`);
};

// Update user
export const editUser = async (data, id) => {
  return axios.put(`${API_URL}/${id}`, data);
};

// Delete user
export const deleteUser = async (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
