import { useState } from 'react';
import cx from 'classnames';
import styles from './index.module.scss'

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div className={styles.openToggle} onClick={toggle}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={isOpen ? 'menu active' : 'menu '}>
        <button onClick={toggle}>Close me</button>
        Menu
      </div>
    </>
  );
}

export default MobileNav
