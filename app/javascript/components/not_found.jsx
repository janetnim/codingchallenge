import React, { Fragment } from 'react';
import NotFoundImage from '../assets/images/404.jpeg';

const NotFound = () => {
  return (
    <Fragment>
      <img src={NotFoundImage} />
    </Fragment>
  );
};

export default NotFound;
