import { useQuery } from '@tanstack/react-query';
import { fetchRepositories, fetchUser } from '../services/user.ts';

export const useSearch = (userName: string) => {
  return useQuery({
    queryKey: ['searchUser', userName],
    queryFn: () => {
      return Promise.all([fetchUser(userName), fetchRepositories(userName)]);
    },
  });
};
