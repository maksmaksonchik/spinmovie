import styles from './WheelLayout.module.css';
import Wheel from '../Wheel/Wheel';
import WheelSettings from '../SettingsTab/SettingsTab';

const WheelLayout = () => {
  return (
    <div className={styles.layout}>
      <Wheel />
      <WheelSettings />
    </div>
  );
}

export default WheelLayout;
