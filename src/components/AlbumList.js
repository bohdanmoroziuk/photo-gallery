import React from 'react';

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

export default AlbumList;