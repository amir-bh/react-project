import React from 'react';
import Provider from 'react-redux';
import { shallow } from 'enzyme';

import { getPostList } from '../selectors';
import { findByTestAttr, storeFactory } from '../test/testUtils';
import PostList from './PostList';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(fn => fn()),
  useDispatch: () => jest.fn()
}));

jest.mock('../selectors', () => ({
  getPostList: jest.fn()
}));

const setup = () => {
  return shallow(<PostList />);
};

describe('rendering', () => {
  const wrapper = setup();
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-post-list');
    expect(component.length).toBe(1);
  });
  test('renders post table', () => {
    const component = findByTestAttr(wrapper, 'component-post-table');
    expect(component.length).toBe(1);
  });
});
