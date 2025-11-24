import { apiClient } from "./client";
import {User} from "../types/user"

export const getUsers = async (): Promise<User[]> => {
  const res = await apiClient.get('/users');
  return res.data; // adjust if your backend wraps in { data: [...] }
};

export const getUser = async (id: number): Promise<User> => {
  const res = await apiClient.get(`/users/${id}`);
  return res.data;
};

export const createUser = async (user: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}): Promise<User> => {
  const res = await apiClient.post('/users', user);
  return res.data;
};

export const updateUser = async (id: number, updates: Partial<User>): Promise<User> => {
  const res = await apiClient.patch(`/users/${id}`, updates);
  return res.data;
};

export const deleteUser = async (id: number): Promise<void> => {
  await apiClient.delete(`/users/${id}`);
};