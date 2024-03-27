import { FC } from 'react';
import styles from './List.module.scss';
import { IRepositorie } from '../../types/repositories.ts';

type Props = {
  repositories: IRepositorie[];
};

export const List: FC<Props> = ({ repositories }) => {
  return (
    <div className={styles.repositories}>
      {repositories.map(({ id, name, description, html_url }) => (
        <a
          href={html_url}
          target="_blank"
          key={id}
          className={styles.repositoriItem}
        >
          <h2 className={styles.title}>{name}</h2>
          {description && (
            <span className={styles.description}>{description}</span>
          )}
        </a>
      ))}
    </div>
  );
};
