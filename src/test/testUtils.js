import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducer';

export const storeFactory = initialState => {
  const sagaMiddleware = createSagaMiddleware();
  return createStore(reducer, initialState, applyMiddleware(sagaMiddleware));
};

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};
