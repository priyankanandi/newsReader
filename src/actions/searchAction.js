export default (dispatch) => ({
    updateSearchFields: ({ search }) => {
      return dispatch({ type: 'SEARCH_UPDATE_FIELDS', search });
    },
  });
  