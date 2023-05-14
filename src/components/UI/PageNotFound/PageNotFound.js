import React from "react";
import "./PageNotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-text">Oops! The page you're looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
