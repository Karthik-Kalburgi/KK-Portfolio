import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
    <h2 className="text-4xl font-bold text-gray-800 mb-4">404 — Page Not Found</h2>
    <Link to="/" className="text-indigo-600 hover:underline">
      Go back home
    </Link>
  </div>
);

export default NotFound;
