import { FC } from 'react';

import styles from './Collections.module.css';
import Button from '../Button/Button';
import { collectionApi } from '../../services/collectionApi/collectionsApi';
import { replaceWheelLisByIds } from '../../store/movieSlice/actionCreators';
import { useAppDispatch } from '../../hooks/redux';

type Props = {
  type: 'team' | 'user',
}

const Collections: FC<Props> = ({ type }) => {
  const dispatch = useAppDispatch();

  const { data: teamCollections } = collectionApi.useFetchTeamCollectionsQuery();
  const { data: userCollections } = collectionApi.useFetchUserCollectiosQuery();

  const collections = (type === 'user') ? userCollections : teamCollections;

  return (
    <div className={styles.collections}>
      {collections && collections.map((collection, i) => (
        <div className={styles.item} key={i}>
          <div className={styles.info}>
            <h3 className={styles.title}>{collection.title}</h3>
            {collection.description && <div className={styles.description}>{collection.description}</div>}
          </div>
          <div className={styles.buttons}>
            <Button
              className={styles.select}
              onClick={() => dispatch(replaceWheelLisByIds(collection.items))}
            >
              Выбрать
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Collections;
