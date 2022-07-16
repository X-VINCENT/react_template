import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 Not Found</h1>
      <Link to="/">
        <button type="button">Back to home</button>
      </Link>
    </div>
  )
}

export default NotFound;