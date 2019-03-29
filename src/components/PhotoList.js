import React from 'react';

import PhotoItem from './PhotoItem';

const PhotoList = ({ photos, addTag }) => {
  const renderPhoto = (photo) => (
    <div className="col-md-3" key={photo.id}>
      <PhotoItem 
        photo={photo} 
        addTag={addTag}  
      />
    </div>
  );

  return (
    <div className="row">
      {photos && photos.map(renderPhoto)}
    </div>
  );
};

export default PhotoList;