import { all, fork, takeLatest, call, put, take } from "@redux-saga/core/effects";
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE } from "../reducers/user";

const HELLO_SAGA = 'HELLO_SAGA';

function loginAPI() {
  // 서버에 요청을 보내는 부분
}

function* login() {
  try {
    yield call(loginAPI);
    yield put({
      // put = dispatch (특정 action 실행)
      type: LOG_IN_SUCCESS
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOG_IN_FAILURE
    });
  }
}

function* watchLogin() {
  // takeLatest: LOG_IN 액션이 dispatch되길 기다렸다가
  // dispatch될 때 login 제너레이터를 호출한다.
  yield takeLatest(LOG_IN, login);
}

function* helloSaga() {
  console.log('before saga');
  while (true) {
    yield take(HELLO_SAGA);
    console.log('hello saga');
    // 비동기 요청 or 타이머 가능
  }
}

export default function* userSaga() {
  // yield all([fork(watchLogin)]);
  yield helloSaga();
}
