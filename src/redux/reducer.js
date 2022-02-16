const appState = {
    uId: null,
    uImage: null
};

const appReducer = (state = appState, action) => {
    switch (action.type) {
      case "LOGIN":
          return {
              uId: action.uId,
              uImage: action.uImage
          };
      case "LOGOUT":
          return {
            uId: null,
            uImage: null
        };
      default:
          return state;
    }
};

export default appReducer;