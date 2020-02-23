import axios from 'axios';

export const newsService = axios.create({
    baseURL: 'http://content.guardianapis.com',
});

newsService.interceptors.request.use((config) => {
    const headers = {
        Accept: 'application/json',
    };
    return { ...config, headers };
});
  