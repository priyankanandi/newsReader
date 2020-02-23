import React , { Component } from 'react';
import { connect } from 'react-redux';
import { stringify, queryParse } from '../helpers/index';
import { withRouter } from 'react-router-dom';

//actions
import newsActions from '../actions/newsActions';
import updateSearchFields from '../actions/searchAction';

//components
import NewsList from '../component/NewsList/NewsList'
import SearchInputTextbox from '../component/SearchInputText/SearchInputTextbox';
import Async from '../component/Async/Async';
import Pagination from '../component/Pagination/Pagination';

class NewsContainer extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        const pageParam = queryParse(this.props.location.search);
        const page = pageParam.page ? pageParam.page : 1
        this.props.fetchNewsAction({
            showFields: 'thumbnail,headline', 
            page: page , 
            pageSize:10
        });
        this.props.searchListAction();
    }

    onSubmit (searchValue) {
        this.props.updateSearchFields({ search: searchValue });
        this.props.fetchNewsAction({
            showFields: 'thumbnail,headline', 
            page: this.props.page, 
            pageSize: 10, 
            searchKey: searchValue
        });
    }

    handleKeyword (value) {
        this.props.updateSearchFields({ search: value });
        this.props.fetchNewsAction({
            showFields: 'thumbnail,headline', 
            page: this.props.page, 
            pageSize: 10, 
            searchKey: value
        });
    }

    handlePagination (page) {
        const queryParams = {
            ...queryParse(this.props.location.search),
            page,
          };
        this.props.history.push(`?${stringify(queryParams)}`);
        this.props.fetchNewsAction({
            showFields: 'thumbnail,headline', 
            page: page, 
            pageSize: 10, 
            searchKey: this.props.search
        });
    }
    

    render() {
        const {newsList, searchList, loadingNews, errorNews, loadingSearch, errorSearch } =this.props;
        const pageParam = queryParse(this.props.location.search);
        return (
            <div className="container">
                <Async
                loading={loadingNews}
                error={errorNews}
                onSuccess={()=> (
                    <>
                        <Async
                            loading={loadingSearch}
                            error={errorSearch}
                            onSuccess={() => (
                                <SearchInputTextbox 
                                    name="search"
                                    onChange={(searchValue) => {
                                    this.onSubmit(searchValue);
                                    }}
                                    updatedSearchKey={this.props.updatedSearchKey}
                                    searchList={searchList}
                                />
                            )} />
                            <NewsList 
                                newsList={newsList} 
                                searchList={searchList} 
                                handleKeyword={(value) =>this.handleKeyword(value)} 
                            />
                            {newsList && newsList.total > 10 && (
                                <Pagination 
                                    page={newsList.currentPage} 
                                    totalPageCount={newsList.pages} 
                                    startIndex={newsList.startIndex}
                                    perPage={newsList.pageSize}  
                                    handlePagination={(e)=>this.handlePagination(e)}
                                />
                            )}  
                    </>
                
                )} />
            </div>
        )
    }
}

const mapStateToProps = state => ({ 
    newsList: state.newsReducer.newsList,
    errorNews: state.newsReducer.errorNews,
    loadingNews: state.newsReducer.loadingNews,
    searchList: state.newsReducer.searchList,
    errorSearch: state.newsReducer.errorSearch,
    loadingSearch: state.newsReducer.loadingSearch,
    searchValue: state.search.search,
})
  
const mapDispatchToProps = (dispatch) => ({
    ...newsActions(dispatch),
    ...updateSearchFields(dispatch),
});
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewsContainer));
  