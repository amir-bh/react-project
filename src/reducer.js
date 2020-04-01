import { RECEIVE_POSTS, RECEIVE_ADD_POST } from './constants';
const initialState = {
  posts: []
};

const reducer = (state = initialState, { type, value }) => {
  switch (type) {
    case RECEIVE_ADD_POST:
      return {
        ...state,
        posts: [...state.posts, value]
      };
    case RECEIVE_POSTS:
      return {
        ...state,
        posts: value
      };
    default:
      return state;
  }
};
export default reducer;
