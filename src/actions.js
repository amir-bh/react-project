import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  REQUEST_ADD_POST,
  RECEIVE_ADD_POST
} from './constants';

export const receiveAddPost = post => {
  return {
    type: RECEIVE_ADD_POST,
    value: post
  };
};
export const requestAddPost = post => {
  return {
    type: REQUEST_ADD_POST,
    value: post
  };
};

export const requestPosts = () => {
  return {
    type: REQUEST_POSTS
  };
};

export const receivePosts = posts => {
  return {
    type: RECEIVE_POSTS,
    value: posts
  };
};
