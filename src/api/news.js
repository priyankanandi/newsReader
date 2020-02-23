import { newsService } from '../helpers/axios';
import URL from '../constants/URL';
import get from 'lodash/get';

export default {
  fetchNews: (params) => {
    const payload = {
      'api-key' : '264645a1-bfbc-4959-b406-e4606502eca4',
      'show-fields': get(params, 'showFields'),
      page:  get(params, 'page'),
      'page-size': get(params, 'pageSize'),
      q:  get(params, 'searchKey'),
      'show-tags':  get(params, 'showTags'),
    };
    return newsService.get(URL.FETCH_NEWS(), { params: { ...payload } });
  },
  searchList: (params) => {
    const payload = {
      'api-key' : '264645a1-bfbc-4959-b406-e4606502eca4',
      'show-references': 'all',
    };
   return newsService.get(URL.SEARCH_LIST(), { params: { ...payload } })
  },
};
