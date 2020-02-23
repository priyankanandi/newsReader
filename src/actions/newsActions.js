import newsApi from '../api/news';
import get from 'lodash/get';

export default (dispatch) => ({

  fetchNewsAction: (params) => {
    dispatch({ type: 'NEWS_FETCH' });
    return newsApi
      .fetchNews(params)
      .then((res) => {
        const response = res && res.data && res.data.response;
        dispatch({ type: 'NEWS_FETCHED', payload: { newsList :response } });
      })
      .catch((err) => {
        const resp = err.response
          ? get(err,'response.data.message') :  get(err, 'response.statusText' ,'No Data');
        dispatch({ type: 'NEWS_ERROR', payload: resp });
      });
  },
  searchListAction: (params) => {
    dispatch({ type: 'SEARCH_LIST_FETCH' });
    return newsApi
      .searchList(params)
      .then((res) => {
        const response = res && res.data && res.data.response;
        dispatch({ type: 'SEARCH_LIST_FETCHED', payload: { searchList: response } });
      })
      .catch((err) => {
        const resp = err.response
          ? err.response.data.message :  get(err, 'response.statusText' ,'No Data');
        dispatch({ type: 'SEARCH_LIST_ERROR', payload: resp });
       
      });
  },
});


