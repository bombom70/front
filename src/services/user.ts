import { IRepositorie } from '../types/repositories';
import { IUser } from '../types/user';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const TOKEN = import.meta.env.VITE_TOKEN;

export const fetchUser = async (userName: string): Promise<IUser | null> => {
  const res = await fetch(`${BASE_URL}/${userName}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  if (!res.ok) {
    return null;
  }

  return res.json();
};

export const fetchRepositories = async (
  userName: string,
): Promise<IRepositorie[]> => {
  const res = await fetch(`${BASE_URL}/${userName}/repos?sort=Des`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  if (!res.ok) {
    return [];
  }

  return res.json();
};
