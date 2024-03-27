import { FC, useEffect, useState } from 'react';
import { SearchBar } from './components/searchBar/SearchBar.tsx';
import { IUser } from './types/user.ts';
import { IRepositorie } from './types/repositories.ts';
import styles from './app.module.scss';
import { UserCard } from './components/userCard/UserCard.tsx';
import { List } from './components/List/List.tsx';
import ReactPaginate from 'react-paginate';

const ITEMS_PER_PAGE = 3;

const App: FC = () => {
  const [userData, setUserData] = useState<IUser | null>(null);
  const [repositories, setRepositories] = useState<IRepositorie[]>([]);
  const [currentItems, setCurrentItems] = useState<IRepositorie[]>([]);

  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + ITEMS_PER_PAGE;
    setCurrentItems(repositories.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(repositories.length / ITEMS_PER_PAGE));
  }, [itemOffset, repositories]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * ITEMS_PER_PAGE) % repositories.length;
    setItemOffset(newOffset);
  };

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
        <div className={styles.mainWrapper}>
          {userData && <UserCard userData={userData} />}
          {currentItems && <List repositories={currentItems} />}
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName={styles.pagination}
          pageLinkClassName={styles.paginationItem}
          previousLinkClassName={styles.paginationItem}
          nextLinkClassName={styles.paginationItem}
          activeLinkClassName={styles.active}
        />
      </main>
    </>
  );
};

export default App;
