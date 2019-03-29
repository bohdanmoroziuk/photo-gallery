import ACTION_TYPES from '../actions/types';

const initialState = {
  value: '',
};

const queryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.SET_QUERY:
      return {
        ...state,
        value: payload.value,
      };
    default:
      return state;
  }
};

export default queryReducer;