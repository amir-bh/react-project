import reducer from './reducer';
import { RECEIVE_POSTS, RECEIVE_ADD_POST } from './constants';

test('return default empty array when no action is passed', () => {
  const newState = reducer(undefined, {});
  expect(newState).toEqual({ posts: [] });
});

test('returns non-empty array upon receiving an action', () => {
  const newState = reducer(undefined, {
    type: RECEIVE_POSTS,
    value: {}
  });
  expect(newState.length).not.toBe(0);
});
