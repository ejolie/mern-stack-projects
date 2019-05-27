export const initialState = {
  isLoggedIn: false,
  user: null
};

export const LOG_IN = "LOG_IN"; // action의 이름
export const LOG_OUT = "LOG_OUT";

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

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: true,
        user: action.data
      };
    }
    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: null
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};
