import React from 'react';
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

export default AlbumItem;