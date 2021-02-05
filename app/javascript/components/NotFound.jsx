import React from 'react';
import NotFoundImage from '../assets/images/404.jpeg';

const NotFound = () => {
  return (
    <div className="not-found">
      <img src={NotFoundImage} alt="Not Found" />
    </div>
  );
}

export default NotFound;
