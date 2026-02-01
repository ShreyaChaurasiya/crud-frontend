import axios from "axios";

// Backend URL from environment variable
const API_URL = process.env.REACT_APP_API_URL;

// Add user
export const addUser = async (data) => {
  return await axios.post(API_URL, data);
};

// Get all users
export const getUsers = async () => {
  return await axios.get(API_URL);
};

// Get user by id
export const getUser = async (id) => {
  return await axios.get(`${API_URL}/${id}`);
};

// Update user
export const editUser = async (data, id) => {
  return await axios.put(`${API_URL}/${id}`, data);
};

// Delete user
export const deleteUser = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
