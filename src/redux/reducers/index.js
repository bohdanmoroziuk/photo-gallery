import { combineReducers } from 'redux';
import galleryReducer from './gallery';

const rootReducer = combineReducers({
  gallery: galleryReducer,
});

export default rootReducer;