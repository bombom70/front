import { FC, useState } from 'react';
import { SearchBar } from './components/searchBar/SearchBar.tsx';
import { IUser } from './types/user.ts';
import { IRepositorie } from './types/repositories.ts';
import styles from './app.module.scss';
import { UserCard } from './components/userCard/UserCard.tsx';

const App: FC = () => {
  const [userData, setUserData] = useState<IUser | null>(null);
  const [repositories, setRepositories] = useState<IRepositorie[]>([]);

  return (
    <>
      <header className={styles.header}>
        <SearchBar
          setUserData={setUserData}
          setRepositories={setRepositories}
        />
      </header>
      <main className={styles.main}>
        {!userData && !repositories?.length && (
          <div className={styles.startScreen}>
            <h1>Start with searching a GitHub user</h1>
          </div>
        )}
        {userData && <UserCard userData={userData} />}
      </main>
    </>
  );
};

export default App;
