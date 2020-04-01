import React from 'react';
import Provider, { useDispatch } from 'react-redux';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import { findByTestAttr } from '../test/testUtils';
import AddPost from './AddPost';
import { receiveAddPost } from '../actions';

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn()
}));

jest.mock('react-router-dom', () => ({
  useHistory: jest.fn()
}));

const mockStore = configureStore([]);

describe('rendering', () => {
  const wrapper = shallow(<AddPost />);
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-add-post');
    expect(component.length).toBe(1);
  });
  test('renders title input box', () => {
    const component = findByTestAttr(wrapper, 'component-input-title');
    expect(component.length).toBe(1);
  });
  test('renders link input box', () => {
    const component = findByTestAttr(wrapper, 'component-input-link');
    expect(component.length).toBe(1);
  });
  test('renders submit button', () => {
    const component = findByTestAttr(wrapper, 'component-submit-button');
    expect(component.length).toBe(1);
  });
});

describe('adding post', () => {
  const wrapper = shallow(<AddPost />);
  let store;
  beforeEach(() => {
    store = mockStore({
      posts: []
    });
    store.dispatch = jest.fn();
  });
  test('dispaatches "RECEIVE_ADD_POST" action', () => {
    const button = findByTestAttr(wrapper, 'component-submit-button');
    button.simulate('click');
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(
      receiveAddPost({ value: { title: '', link: '' } })
    );
  });
});
