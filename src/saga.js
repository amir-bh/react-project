import { takeEvery, put, call } from 'redux-saga/effects';

import { REQUEST_POSTS, RECEIVE_ADD_POST } from './constants';
import { receivePosts } from './actions';

export function* getPosts() {
  try {
    const response = yield call(fetch, 'http://localhost:5000/api/posts');
    const posts = yield call([response, 'json']);
    yield put(receivePosts(posts));
  } catch (e) {
    console.log(e);
  }
}

export function* putPost(action) {
  try {
    console.log(action.value);
    const body = JSON.stringify(action.value);
    yield call(fetch, 'http://localhost:5000/api/posts', {
      method: 'PUT',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body
    });
  } catch (e) {
    console.log(e);
  }
}

export default function* watchFetchPosts() {
  yield takeEvery(REQUEST_POSTS, getPosts);
  yield takeEvery(RECEIVE_ADD_POST, putPost);
}
