import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle } from 'reactstrap';

const AlbumItem = ({ album, fetchPhotos }) => (
  <Card className="m-3">
    <CardBody>
      <CardTitle>{album.title}</CardTitle>
      <Link 
        className="btn btn-secondary" 
        onClick={fetchPhotos} 
        to="/photos"
      >
        See photos
      </Link>
    </CardBody>
  </Card>
);

AlbumItem.propTypes = {
  album: PropTypes.object.isRequired,
  fetchPhotos: PropTypes.func.isRequired,
};

export default AlbumItem;