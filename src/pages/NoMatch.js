import React from 'react';
import { Alert } from 'reactstrap';
import { Link } from 'react-router-dom';

const NoMatch = () => (
  <div className="container mt-5">
    <Alert color="light">
      <h4 className="alert-heading">Page not found</h4>
      <p>Please, go back to the home page</p>
      <hr />
      <Link className="btn btn-dark btn-sm" to="/">
        Home page
      </Link>
    </Alert>
  </div>
);

export default NoMatch;