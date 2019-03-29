import { combineReducers } from 'redux';
import galleryReducer from './gallery';
import queryReducer from './query';

const rootReducer = combineReducers({
  gallery: galleryReducer,
  query: queryReducer,
});

export default rootReducer;