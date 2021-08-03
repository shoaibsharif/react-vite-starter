import React from "react";

const Header = () => {
  return (
    <header className=" h-[72px] bg-gray-900 text-white">
      <div className="flex justify-between max-w-7xl mx-auto  items-center py-5 xl:px-8 px-5">
        <ul className="flex space-x-3">
          <li className="text-underline">Home</li>
          <li className="text-underline">Blogs</li>
          <li className="text-underline">Tech Co.</li>
          <li className="text-underline">Jobs</li>
          <li className="text-underline">Events</li>
        </ul>
        <div className="flex space-x-2">
          <a href="#">Login</a>
          <a href="">Register</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
