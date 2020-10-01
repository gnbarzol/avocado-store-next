import React, { ReactNode } from "react";
import Navbar from '../../componets/Navbar/Navbar'

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer>This is the footer</footer>
    </div>
  );
};

export default Layout;
