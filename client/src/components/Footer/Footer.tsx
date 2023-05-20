import { FC } from 'react';

import styles from './Footer.module.css';
import Wrapper from '../Wrapper/Wrapper';

import ghIcon from '../../img/github.svg'
import tgIcon from '../../img/telegram.svg'

const Footer: FC = () => {
  return (
    <Wrapper>
      <div className={styles.footer}>
        <div className={styles.copyrights}>
          © 2023, maksmaksonchik, курсовой проект для Тинькофф.Финтех
        </div>
        <div className={styles.links}>
          <a className={styles.linkItem}
            href="https://t.me/maksmaksonchik"
            target='_blank'
            rel="noreferrer"
          >
            <img className={styles.icon} src={tgIcon} alt="Link to my Telegram" />
          </a>
          <a className={styles.linkItem}
            href="https://github.com/maksmaksonchik"
            target='_blank'
            rel="noreferrer"
          >
            <img className={styles.icon} src={ghIcon} alt="Link to my GitHub" />
          </a>
        </div>
      </div>
    </Wrapper>

  );
}

export default Footer;
