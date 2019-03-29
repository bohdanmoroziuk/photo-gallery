import { createSelector } from 'reselect'; 

export const selectAlbums = state => state.gallery.albums;

export const selectPhotos = state => state.gallery.photos;