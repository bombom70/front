import { FC } from 'react';
import { IUser } from '../../types/user.ts';
import styles from './UserCard.module.scss';
import { generateString } from '../../shared/generateString.ts';

type Props = {
  userData: IUser;
};

export const UserCard: FC<Props> = ({ userData }) => {
  const { name, login, avatar_url, html_url, followers, following } = userData;
  return (
    <div className={styles.userCard}>
      <img className={styles.avatar} src={avatar_url} alt="аватар" />
      <span className={styles.userName}>{name}</span>
      <a className={styles.userLogin} href={html_url} target="_blank">
        {login}
      </a>
      <div className={styles.userSub}>
        <span className={styles.userSubItem}>
          {generateString(followers, 'Followers')}
        </span>
        <span className={styles.userSubItem}>
          {generateString(following, 'Following')}
        </span>
      </div>
    </div>
  );
};
