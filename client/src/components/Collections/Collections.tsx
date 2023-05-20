import { FC } from 'react';

import styles from './Collections.module.css';
import Button from '../Button/Button';
import { userApi } from '../../store/userApi/userApi';

type Props = {
  type: 'team' | 'user',
}

const Collections: FC<Props> = ({ type }) => {
  const {data: collections} = userApi.useFetchTeamCollectionsQuery('');
  // const collections = [
  //   {
  //     title: 'Топ-10 Кинопоиска',
  //     description: 'Самая крутая подборка самых культовых фильмов. Если вы хотите поглубже окунуться в прекрасный кинематограф, советую выбрать эту подборку!'
  //   },
  //   {
  //     title: 'Топ-10 самых худших фильмов',
  //     // description: 'Хотите испытать плотного кринжа? Тогда тыкайте сюда - подборка самых худших фильмов за все время!'
  //   },
  //   {
  //     title: 'Самые смешные комедии',
  //     description: 'Вам грустно и одиноко? Самое время посмотреть какую-нибудь комедию, которая обязательно поднимет вам настроение!'
  //   }
  // ];

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
              onClick={() => alert('дада')}>
                Выбрать
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Collections;
