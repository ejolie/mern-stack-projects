import {
  all, fork, takeLatest, takeEvery, call, put, take, delay,
} from '@redux-saga/core/effects';
import axios from 'axios';

import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE,
SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE
 } from '../reducers/user';
// race, cancel, select, throttle, debounce

// const HELLO_SAGA = "HELLO_SAGA";

// [method 1.] while true 사용 (모든 take를 watch하고 받아들임)
// - generator: 비동기를 동기처럼, callback hell 해결
// function* watchHello() {
//   console.log("before saga");

//   while (true) {
//     yield take(HELLO_SAGA);
//     console.log("hello saga");
//     // 비동기 요청 or 타이머 가능
//   }

// 최대 5번만 실행되게 함
// for (let i = 0; i < 5; i++) {
//   yield take(HELLO_SAGA);
// }
// }

// [method 2.] takeEvery 사용
// while true와 거의 유사함
// function* watchHello() {
//   yield takeEvery(HELLO_SAGA, function*() {
//     yield put({
//       type: "BYE_SAGA"
//     });
//   });
// }

// [method 3.] takeLatest 사용
// 동시에 여러 번 액션을 실행하면 마지막 것만 받겠다.
// 이전 요청이 끝나지 않은게 있다면 이전 요청을 취소한다. yield delay 안 먹음
// ex) 로그인
// takeEvery vs. takeLatest : 여러 번 클릭하는 게 모두 유효한 동작인가?
// function* watchHello() {
//   yield takeLatest(HELLO_SAGA, function*() {
//     yield put({
//       type: "BYE_SAGA"
//     });
//   });
// }

function loginAPI() {
}

function* login() {
  try {
    // yield call(loginAPI);
    yield delay(2000);
    yield put({
      type: LOG_IN_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOG_IN_FAILURE,
    });
  }
}

function* watchLogin() {
  // takeLatest: LOG_IN 액션이 dispatch 되길 기다렸다가
  // dispatch 될 때 login 제너레이터를 호출한다.
  yield takeEvery(LOG_IN_REQUEST, login);
}

function signUpAPI() {

}

function* signUp() {
  try {
    // yield call(signUpAPI);
    yield delay(2000);
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch(err) {
    console.error(err);
    yield put({
      type: SIGN_UP_FAILURE,
      error: err
    })
  }
}

function* watchSignup() {
  yield takeEvery(SIGN_UP_REQUEST, signUp);
}

// 이벤트 리스너처럼 이벤트가 실행되기를 기다리고 있음
// 여러개의 이벤트를 등록하고 싶을 때 all을 사용
export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchSignup)]);
}

// - 함수 실행
// fork vs. call vs. func()
// fork: 비동기 호출, 응답이 안 와도 다음 코드로 바로 넘어감
// call: 동기 호출, 응답을 받을 때까지 기다림
