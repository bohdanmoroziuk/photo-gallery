import ACTION_TYPES from './types';

import { apiPrefix } from '../../utils';

export const setLoading = () => ({
  type: ACTION_TYPES.SET_LOADING,
});

export const addTag = (photoId, tag) => ({
  type: ACTION_TYPES.ADD_TAG,
  payload: {
    photoId,
    tag,
  }
});

export const setQuery = (value) => ({
  type: ACTION_TYPES.SET_QUERY,
  payload: { value },
});

export const fetchAlbums = () => (dispatch) => {
  dispatch(setLoading());

  fetch(apiPrefix('albums?_limit=10'))
    .then(response => response.json())
    .then(albums => dispatch({
      type: ACTION_TYPES.FETCH_ALBUMS,
      payload: { albums },
    }));
};

export const fetchPhotos = (albumId) => (dispatch) => {
  dispatch(setLoading());

  fetch(apiPrefix(`photos?albumId=${albumId}&_limit=10`))
    .then(response => response.json())
    .then(photos => dispatch({
      type: ACTION_TYPES.FETCH_PHOTOS,
      payload: { photos },
    }))
};