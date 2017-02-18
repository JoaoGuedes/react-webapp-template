/* eslint-env jest */

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { ACTION } from 'constants';
import { doAction, doAsyncAction } from '~/actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

beforeEach(() => {});

afterEach(() => {});

test('Async action should dispatch expected actions', () => {
  const expectedActions = [
  /*{ type: ACTION_REQUEST },
    { type: ACTION_RECEIVE, data: { collection: [] } },*/
  ];

  const store = mockStore({ collection: [] });

  global.fetch = () => new Promise(resolve => resolve({
    json: () => ({}),
  }));

  return store.dispatch(doAsyncAction())
    .then(() => { // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
});

test('action should dispatch expected actions', () => {
  const expectedActions = [
    { type: ACTION },
  ];

  const store = mockStore({});
  store.dispatch(doAction());
  expect(store.getActions()).toEqual(expectedActions);
});
