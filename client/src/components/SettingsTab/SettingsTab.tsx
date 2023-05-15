import { FC, useState } from "react";

import styles from './SettingsTab.module.css'
import Options from "./Options/Options";
import Filters from "./Filters/Filters";

const WheelSettings: FC = () => {
  const [active, setActive] = useState('options');

  const openTab = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {name} = e.currentTarget;
    setActive(name);
  }

  return (
    <div className={styles.settings}>
      <div>
        <button
          className={`${styles.tablink} ${active === 'options' ? styles.tablinkActive : ''}`}
          onClick={openTab}
          name={'options'}
          value='Варинаты'
        >
          Варианты
        </button>
        <button
          className={`${styles.tablink} ${active === 'filters' ? styles.tablinkActive : ''}`}
          onClick={openTab}
          name={'filters'}
        >
          Фильтры
        </button>
      </div>

      {
        active === 'options'
          ? <Options />
          : <Filters />
      }
    </div>
  );
}

export default WheelSettings;
