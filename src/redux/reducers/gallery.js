import ACTION_TYPES from '../actions/types';

const initialState = {
  albums: [],
  photos: [],
  loading: false,
};

const galleryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.ADD_TAG:
      return {
        ...state,
        photos: state.photos.map(photo => {
          return photo.id === payload.photoId
            ? { 
                ...photo, 
                tags: [ payload.tag, ...photo.tags || [] ] 
              }
            : photo;
        }),
      };
    case ACTION_TYPES.FETCH_ALBUMS:
      return {
        ...state,
        loading: false,
        albums: payload.albums,
      };
    case ACTION_TYPES.FETCH_PHOTOS:
      return {
        ...state,
        loading: false,
        photos: payload.photos,
      };
    case ACTION_TYPES.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default galleryReducer;