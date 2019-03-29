import ACTION_TYPES from './types';

import { buildUrl } from '../../utils';

export const setLoading = () => ({
  type: ACTION_TYPES.SET_LOADING,
});

export const fetchAlbums = () => (dispatch) => {
  dispatch(setLoading());

  fetch(buildUrl('albums?_limit=10'))
    .then(response => response.json())
    .then(albums => dispatch({
      type: ACTION_TYPES.FETCH_ALBUMS,
      payload: { albums },
    }));
};

export const fetchPhotos = (albumId) => (dispatch) => {
  dispatch(setLoading());

  fetch(buildUrl(`photos?albumId=${albumId}&_limit=10`))
    .then(response => response.json())
    .then(photos => dispatch({
      type: ACTION_TYPES.FETCH_PHOTOS,
      payload: { photos },
    }))
};