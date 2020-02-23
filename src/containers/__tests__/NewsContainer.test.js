import React from 'react';
import { renderWithRouter, wait, cleanup, fireEvent, getAllByPlaceholderText } from '../../../tests/utils';
import NewsContainer from '../NewsContainer';
import news, {newsList, searchList} from '../../api/news';
jest.mock('../../api/news');

describe('<NewsContainer />', () => {
  beforeEach(() => {
    news.fetchNews.mockClear();
    news.searchList.mockClear();
  });
  test('renders without crush', () => {
    renderWithRouter(<NewsContainer />);
  });

  describe('on initial', () => {
    test('Render loader', () => {
      const { getByText } = renderWithRouter(<NewsContainer />);
      expect(getByText('Loading...')).toBeInTheDocument();
    });
  });

  describe('on success',  () => {
    describe('on empty data',  () => {
      beforeEach(() => {
        news.fetchNews.mockResolvedValue({res: {response: []}});
      });
      test('Render no news',async () => {
        const { getByText } = renderWithRouter(<NewsContainer />);
        await wait();
        expect(getByText('No news sorry!')).toBeInTheDocument();
      });
    });
    describe('on data',  () => {
      beforeEach(() => {
        news.fetchNews.mockResolvedValue({
          data: newsList
        });
      });
      test('Render news list',async () => {
        const { getAllByText } = renderWithRouter(<NewsContainer />);
        await wait();
        expect(getAllByText('Sportwatch: AFLW, A-League, W-League and more – live!')).toHaveLength(2);
        expect(getAllByText('The big picture: at home with Mr and Mrs Picasso')).toHaveLength(2);
      });
    });
    describe('on data for search',  () => {
      beforeEach(() => {
        news.searchList.mockResolvedValue({
          data: searchList
        });
      });
      test('Render search list as keyword button in all the news cards',async () => {
        const { getAllByText, container } = renderWithRouter(<NewsContainer />);
        await wait();
        expect(container.querySelectorAll('.btn-outline-secondary')).toHaveLength(100);
        expect(getAllByText('2019 family gift guide')).toHaveLength(10);
      });
      test('after change in search value render search list',async () => {
        const { getAllByText, container } = renderWithRouter(<NewsContainer />);
        await wait();
        const searchInput = container.querySelector('input[name="search"');
        fireEvent.change(searchInput, {
          target: { name: 'search', value: 'Modi' },
        });
        fireEvent.keyUp(searchInput, { key: 'Enter', value:'Modi' });
        await wait();
        expect(news.searchList).toBeCalled();
        expect(getAllByText('2019 family gift guide')).toHaveLength(10);
        expect(getAllByText('About')).toHaveLength(10);
      });
      test('on key enter with search input box fetch news list',async () => {
        const { getAllByText, container } = renderWithRouter(<NewsContainer />);
        await wait();
        const searchInput = container.querySelector('input[name="search"');
        fireEvent.change(searchInput, {
          target: { name: 'search', value: 'Modi' },
        });
        fireEvent.keyUp(searchInput, { key: 'Enter', value:'Modi' });
        await wait();
        expect(news.fetchNews).toBeCalled();
      });
    });
  });
  
  describe('on failure',  () => {
    beforeEach(() => {
      news.fetchNews.mockRejectedValue({
        response : {data: { message: 'No API key found in request'}}
      });
    });
    test('Render error message',async () => {
      const { getByText } = renderWithRouter(<NewsContainer />);
      await wait();
      expect(getByText('No API key found in request')).toBeInTheDocument();
    });
  });
});
