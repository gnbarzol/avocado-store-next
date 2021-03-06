import React, { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer className="container">This is the footer</footer>

      <style jsx>{`
        .container: {
          background: salmon;
        }
      `}</style>
    </div>
  );
};

export default Layout;
