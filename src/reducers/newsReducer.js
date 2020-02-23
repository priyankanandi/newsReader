const initialState = {
    newsList: [],
    errorNews: '',
    loadingNews: '',
    searchList: [],
    loadingSearch: '',
    errorSearch: '',
};
  
const newsReducer = (state = initialState, action)=> {
    switch (action.type) {
        case 'NEWS_FETCH':
        return {
            ...state,
            loadingNews: true
        };
        case 'NEWS_FETCHED':
        return {
            ...state,
            loadingNews: false,
            newsList: action.payload.newsList,
        };
        case 'NEWS_ERROR':
        return {
            ...state,
            loadingNews: false,
            errorNews: action.payload,
        };
        case 'SEARCH_LIST_FETCH':
        return {
            ...state,
            loadingSearch: true
        };
        case 'SEARCH_LIST_FETCHED':
        return {
            ...state,
            loadingSearch: false,
            searchList: action.payload.searchList,
        };
        case 'SEARCH_LIST_ERROR':
        return {
            ...state,
            loadingSearch: false,
            errorSearch: action.payload,
        }; 
        default:
            return state;
    }
}

export default newsReducer; 