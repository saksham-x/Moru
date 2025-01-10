import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-fuchsia-300 p-4 text-center">
      <p>
        &copy; {new Date().getFullYear()} React Dashboard. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
