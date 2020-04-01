import { put, call, takeEvery } from 'redux-saga/effects';

import watchFetchPosts, { getPosts, putPost } from './saga';
import { REQUEST_POSTS, RECEIVE_ADD_POST } from './constants';
import { receivePosts } from './actions';

describe('waiting for dispatched actions', () => {
  let generator = null;
  beforeAll(() => {
    generator = watchFetchPosts();
  });
  test('should wait for the action REQUEST_POSTS', () => {
    put({ type: REQUEST_POSTS });
    const actual = generator.next();
    expect(actual.value).toEqual(takeEvery(REQUEST_POSTS, getPosts));
  });
  test('should wait for the action RECEIVE_ADD_POST', () => {
    put({ type: RECEIVE_ADD_POST });
    const actual = generator.next();
    expect(actual.value).toEqual(takeEvery(RECEIVE_ADD_POST, putPost));
  });
});

describe('action "receivePosts" dispatched', () => {
  const generator = getPosts();
  test('should fetch posts from server', () => {
    expect(generator.next().value).toEqual(
      call(fetch, 'http://localhost:5000/api/posts')
    );
  });
});
