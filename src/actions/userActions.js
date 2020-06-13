import { DELETE_USER, ADD_USER } from "./actionTypes";

export function deleteUser(id) {
  return function (dispatch) {
    dispatch({
      type: DELETE_USER,
      payload: id,
    });
  };
}

export function addUser(data) {
  return function (dispatch) {
    dispatch({
      type: ADD_USER,
      payload: data,
    });
  };
}
