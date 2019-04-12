import React from 'react';

export const withProps = (Component) => (props) => (
  <Component {...props} />
);