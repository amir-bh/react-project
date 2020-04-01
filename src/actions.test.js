import { receivePosts, requestPosts, receiveAddPost } from './actions';

describe('receivePosts', () => {
  test('returns an action with type `RECEIVE_POSTS`', () => {
    const action = receivePosts();
    expect(action).toEqual({ type: 'RECEIVE_POSTS' });
  });
});

describe('requestPosts', () => {
  test('returns an action with type `REQUEST_POSTS`', () => {
    const action = requestPosts();
    expect(action).toEqual({ type: 'REQUEST_POSTS' });
  });
});

describe('receiveAddPost', () => {
  test('returns an action with type `RECEIVE_ADD_POST`', () => {
    const post = {
      title: 'facebook',
      link: 'www.facebook.com'
    };
    const action = receiveAddPost(post);
    expect(action).toEqual({ type: 'RECEIVE_ADD_POST', value: post });
  });
});
