//data layout before doing anything
export const initialState = {
  user: null,
};

//action to push information to data
export const actionTypes = {
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state, //keep everything that was in there
        user: action.user, //change user to whatever we dispatch
      };

    default:
      return state;
  }
};

export default reducer;
