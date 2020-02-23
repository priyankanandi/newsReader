import React from 'react';
import ReactPaginate from 'react-paginate';
import cx from 'classnames';

//css
import '../Pagination/Pagination.scss';

//component
import Icon from '../Icon/Icon';

class Pagination extends React.Component {

  handlePageClick (e) {
    this.props && this.props.handlePagination(e.selected + 1);
  };
  
  render() {
    const page = parseInt(this.props.page , 10) - 1;
    const totalPageCount = this.props.totalPageCount;
    const startIndex = this.props.startIndex;
    return (
        <div className="Pagination">
                <ReactPaginate
                  previousLabel={
                    <Icon
                      className="paginate-icon-size"
                      type="arrow-left"
                      size="small"
                    />
                  }
                  nextLabel={
                    <Icon
                      className="paginate-icon-size"
                      type="arrow-right"
                      size="small"
                    />
                  }
                  breakLabel={'...'}
                  pageRangeDisplayed={1}
                  forcePage={page}
                  breakClassName={'break-me'}
                  pageCount={totalPageCount}
                  disableInitialCallback
                  onPageChange={(e)=>this.handlePageClick(e)}
                  containerClassName={'pagination'}
                  subContainerClassName={'pages'}
                  activeClassName={'active'}
                />
          </div>
        )
    }
}


export default Pagination;

