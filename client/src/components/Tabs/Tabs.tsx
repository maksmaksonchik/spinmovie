import { FC, useState } from "react";

import styles from './Tabs.module.css'

type Props = {
  tabNames: string[];
  tabComponents: React.ReactNode[];
}

const Tabs: FC<Props> = ({ tabNames, tabComponents }) => {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.container}>
      <div>
        {tabNames.map((name, i) => (
          <button
            className={`${styles.tablink} ${active === i ? styles.tablinkActive : ''}`}
            onClick={() => setActive(i)}
            value='name'
            key={i}
          >
            {name}
          </button>
        ))}
      </div>
      <div className={styles.content}>
        {tabComponents[active]}
      </div>

    </div>
  );
}

export default Tabs;
