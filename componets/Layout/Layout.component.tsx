import React, { ReactNode } from "react";
import Navbar from '../Navbar/Navbar';

import styles from './Layout.module.css';

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
      <footer>This is the footer</footer>
    </div>
  );
};

export default Layout;
