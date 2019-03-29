import React from 'react';
import PropTypes from 'prop-types';
import AlbumItem from './AlbumItem';

const AlbumList = ({ albums, fetchPhotos }) => {
  const renderAlbum = (album) => (
    <div 
      className="col-md-6" 
      key={album.id}
    >
      <AlbumItem 
        album={album} 
        fetchPhotos={() => fetchPhotos(album.id)} 
      />
    </div>
  );

  return (
    <div className="row">
      {albums && albums.map(renderAlbum)}  
    </div>
  );
};

AlbumList.propTypes = {
  albums: PropTypes.array.isRequired,
  fetchPhotos: PropTypes.func.isRequired,
};

export default AlbumList;