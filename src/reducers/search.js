
export const initialSearchTypeState = {
  search: '',
};

const search = (state = initialSearchTypeState, action) => {
  switch (action.type) {
    case "SEARCH_UPDATE_FIELDS":
      return {
        ...state,
        search: action.search,
      };
    default:
      return state;
  }
};

export default search;
