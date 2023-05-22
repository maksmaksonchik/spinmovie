import { FC } from 'react';

import styles from './Collections.module.css';
import Button from '../Button/Button';
import { collectionApi } from '../../services/collectionApi/collectionsApi';
// import { useAppDispatch, useAppSelector } from '../../hooks/redux';
// import { fetchCollectionMovies } from '../../store/slices/ActionCreators';
// import type {TCollection} from '../../models/TCollection'
// import { movieApi } from '../../services/movieApi/movieApi';

type Props = {
  type: 'team' | 'user',
}

const Collections: FC<Props> = ({ type }) => {
  const { data: collections } = collectionApi.useFetchTeamCollectionsQuery('');

  // const [focusItems, setFocusItems] = useState([] as number[])

  // const dispatch = useAppDispatch(); 
  // const { moviList } = useAppSelector(state => state.collectionReducer)

  // const chooseCollection = (collection: TCollection) => {
  //   console.log('add')
  //   dispatch(movieApi.util.updateQueryData('fetchTopTen', '', (draft) => {
  //     dispatch(fetchCollectionMovies(collection.items))
  //     moviList.forEach((movie, i) => {
  //       draft[i] = movie
  //     })
  //     // draft = moviList;
  //     console.log(moviList);
  //   }))
  // }

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
              // onClick={() => chooseCollection(collection)}
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
