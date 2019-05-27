export const initialState = {
  mainPosts: []
};

const ADD_POST = "ADD_POST";
const ADD_DUMMY = "ADD_DUMMY";

const addPost = {
  type: ADD_POST
};

const addDummy = {
  type: ADD_DUMMY,
  data: {
    content: "hello",
    userId: 1,
    user: {
      nicname: "박은정"
    }
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state
      };
    }
    case ADD_DUMMY: {
      return {
        ...state,
        mainPosts: [...state.mainPosts, action.data]
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};
