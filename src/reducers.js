const reducer = (state = {}, action) => {
  switch (action.type) {
    case "FILTER_USERNAMES":
      return { ...state, filteredUsers: action.usernames };
    case "SET_USER_SELECTED":
      return { ...state, userSelected: action.json };
    default:
      return state;
  }
};
export default reducer;
