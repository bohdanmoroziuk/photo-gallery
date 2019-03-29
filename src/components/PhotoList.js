import React from 'react';

import PhotoItem from './PhotoItem';

const PhotoList = ({ photos }) => {
  const renderPhoto = (photo) => (
    <div className="col-md-3" key={photo.id}>
      <PhotoItem photo={photo} />
    </div>
  );

  return (
    <div className="row">
      {photos && photos.map(renderPhoto)}
    </div>
  );
};

export default PhotoList;