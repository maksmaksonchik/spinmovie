import { FC } from 'react';

import styles from './Collections.module.css';
import Button from '../Button/Button';
import { replaceWheelLisByIds } from '../../store/movieSlice/actionCreators';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import deleteIcon from '../../img/delete-icon.svg';
import { collectionApi } from '../../services/collectionApi/collectionsApi';
import { TCollection } from '../../models/TCollection';

type Props = {
  type: 'team' | 'user',
}

const Collections: FC<Props> = ({ type }) => {
  const dispatch = useAppDispatch();

  const { teamCollections } = useAppSelector(state => state.collectionsReducer);
  const { userCollections } = useAppSelector(state => state.collectionsReducer);

  const [deleteCollection] = collectionApi.useDeleteMutation();

  const collections = (type === 'user') ? userCollections : teamCollections;

  return (
    <div className={styles.collections}>
      {collections && collections.map(({ id, title, description, items }: TCollection) => (
        <div className={styles.item} key={id}>
          <div className={styles.info}>
            <h3 className={styles.title}>{title}</h3>
            {description && <div className={styles.description}>{description}</div>}
          </div>
          <div className={styles.buttons}>
            {(type === 'user')
              && <button
                className={styles.delete}
                onClick={() => deleteCollection(id)}
              >
                <img
                  className={styles.deleteIcon}
                  src={deleteIcon}
                  alt="Удалить подборку"
                />
              </button>}
            <Button
              className={styles.select}
              onClick={() => dispatch(replaceWheelLisByIds(items))}
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
