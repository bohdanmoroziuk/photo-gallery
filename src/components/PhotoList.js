import React from 'react';
import PropTypes from 'prop-types';

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

PhotoList.propTypes = {
  photos: PropTypes.array.isRequired,
  addTag: PropTypes.func.isRequired,
};

export default PhotoList;