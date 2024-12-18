import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-primary shadow-lg text-white">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-2xl font-bold">
          Mon Océan
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-indigo-400">Accueil</Link>
          </li>
          <li>
            <Link to="/ActionPage" className="text-white hover:text-indigo-400">Actions</Link>
          </li>
          <li>
            <Link to="/ExplorePage" className="text-white hover:text-indigo-400">Explore</Link>
          </li>
          <li>
            <Link to="/Podcast" className="text-white hover:text-indigo-400">Podcast</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
