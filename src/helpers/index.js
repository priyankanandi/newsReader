
import qs from 'qs';

export const queryParse = (str) => {
  return qs.parse(str, { ignoreQueryPrefix: true });
};

export const stringify = (obj, options = {}) => {
  return qs.stringify(obj, { indices: false, ...options });
};