import { FC } from 'react';
import { TCollection } from '../../models/TCollection';
import styles from './CollectionsItem.module.css';
import Button from '../Button/Button';
import { useAppDispatch } from '../../hooks/redux';
import { collectionApi } from '../../services/collectionApi/collectionsApi';
import deleteIcon from '../../img/delete-icon.svg';
import { replaceWheelLisByIds } from '../../store/movieSlice/actionCreators';

type Props = {
  type: 'team' | 'user',
  collection: TCollection,
}

const CollectionsItem: FC<Props> = ({ collection, type }) => {
  const {id, title, description, items } = collection;

  const dispatch = useAppDispatch();
  const [deleteCollection] = collectionApi.useDeleteMutation();

  return (
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
  );
}

export default CollectionsItem;
