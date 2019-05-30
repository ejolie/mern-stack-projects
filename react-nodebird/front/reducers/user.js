export const dummyUser = {
  nickname: "박은정",
  Post: [],
  Followings: [],
  Followers: [],
  isLoggedIn: false,
  signUpData: {}
};

export const initialState = {
  isLoggedIn: false,
  user: null
};

export const LOG_IN = "LOG_IN"; // action의 이름
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";
export const LOG_OUT = "LOG_OUT";
export const SIGN_UP = "SIGN_UP";

export const loginAction = {
  // 실제 action - action의 이름과 데이터
  type: LOG_IN,
  data: {
    nickname: "박은정"
  }
};

export const logoutAction = {
  type: LOG_OUT
};

// action에 넣을 데이터가 동적인 경우 , 하드코딩 X action을 돌려주는 함수 생성
export const signUpAction = (data) => {
  return {
    type: SIGN_UP,
    data: data
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: true,
        // user: action.data
        user: dummyUser
      };
    }
    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: null
      };
    }
    case SIGN_UP: {
      return {
        ...state,
        signUpData: action.data
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};
