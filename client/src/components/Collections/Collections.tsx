import { FC } from 'react';
import styles from './Collections.module.css';
import { useAppSelector } from '../../hooks/redux';
import CollectionsItem from '../CollectionsItem/CollectionsItem';

type Props = {
  type: 'team' | 'user',
}

const Collections: FC<Props> = ({ type }) => {
  const { teamCollections } = useAppSelector(state => state.collectionsReducer);
  const { userCollections } = useAppSelector(state => state.collectionsReducer);
  const { isAuth } = useAppSelector(state => state.userReducer);
  

  const collections = (type === 'user') ? userCollections : teamCollections;
  const placeholderText = isAuth ? 'Самое время создать свою первую подборку!' : 'Войдите в свой профиль, чтобы создавать свои подборки.'

  return (
    <div className={styles.collections}>
      {collections.length > 0 || type === 'team'
        ? collections.map((collection) => (
          <CollectionsItem
            collection={collection}
            type={type}
            key={collection.id}
          />
        ))
        : (
          <div className={styles.placeholder}>
            <div className={styles.placeholderHeader}>Тут пусто :(</div>
            <div className={styles.placeholderText}>{placeholderText}</div>
          </div>
        )}
    </div>
  );
}

export default Collections;
