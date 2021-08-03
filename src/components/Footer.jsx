import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800">
      <div className="mx-auto w-[fit-content] py-4">
        &copy; Shoaib Sharif {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
