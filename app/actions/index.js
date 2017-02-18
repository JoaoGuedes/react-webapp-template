import { ACTION } from './constants';

/**
 * @desc Encapsulates action
 * @returns {Object} reducer type for action
 */
export const doAction = () => ({ type: ACTION });

/**
 * @desc Thunk
 */
export const doAsyncAction = () => (dispatch) => {
  dispatch(doAction());
  /* someAsyncAction
      .then((result) => dispatch(ACTION_SUCCESS))
      .catch(err => dispatch(ACTION_ERROR)) */
};
