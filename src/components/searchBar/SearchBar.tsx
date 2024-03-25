import styles from './searchBar.module.scss';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useSearch } from '../../hooks/useSearch.ts';
import { useDebounce } from '../../hooks/useDebounce.tsx';
import { IUser } from '../../types/user.ts';
import { IRepositorie } from '../../types/repositories.ts';
import SearchImge from '../../assets/search.svg';

type Props = {
  setUserData: (value: IUser | null) => void;
  setRepositories: (value: IRepositorie[]) => void;
};

export const SearchBar: FC<Props> = ({ setUserData, setRepositories }) => {
  const [userName, setUserName] = useState('');
  const debounceValue = useDebounce(userName.trim(), 500);
  const { data } = useSearch(debounceValue);

  useEffect(() => {
    if (!data) return;
    setUserData(data[0] ?? null);
    setRepositories(data[1]);
  }, [data]);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setUserName(target.value);
  };

  return (
    <form className={styles.searchBar}>
      <img className={styles.searchImage} src={SearchImge} />
      <input
        type="text"
        placeholder="Enter GitHub username"
        className={styles.input}
        value={userName}
        onChange={handleChange}
      />
    </form>
  );
};
