import { takeLatest, put, all } from "redux-saga/effects";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* fetchData({ payload }) {
  yield delay(100);
  const json = yield fetch(
    `https://jsonplaceholder.typicode.com/users?q=${payload}`
  ).then((response) => response.json());
  const usernames = payload !== "" && json.map((user) => user.username);
  yield put({ type: "FILTER_USERNAMES", usernames });
}

function* watchFetchData() {
  yield takeLatest("FETCH_REQUESTED", fetchData);
}

function* setUserInfo({ payload }) {
  yield delay(100);
  const json = yield fetch(
    `https://jsonplaceholder.typicode.com/users?q=${payload}`
  ).then((response) => response.json());
  yield put({ type: "SET_USER_SELECTED", json });
}

function* watchUpdateUser() {
  yield takeLatest("USER_SELECTED", setUserInfo);
}

export default function* rootSaga() {
  yield all([watchFetchData(), watchUpdateUser()]);
}
