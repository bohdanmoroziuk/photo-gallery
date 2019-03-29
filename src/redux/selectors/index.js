import { createSelector } from 'reselect'; 

export const selectAlbums = state => state.gallery.albums;

export const selectPhotos = state => state.gallery.photos;

export const selectQuery = state => state.query.value;

export const selectPhotosByTagName = createSelector(
  [ selectPhotos, selectQuery ],
  (photos, tagName) => {
    return (tagName === '')
      ? photos
      : photos.filter(photo => photo.tags && photo.tags.some(tag => tag.includes(tagName)));
  },
);