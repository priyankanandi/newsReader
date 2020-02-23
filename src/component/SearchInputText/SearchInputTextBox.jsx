import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

//action
import updateSearchFields from '../../actions/searchAction';

//css
import '../SearchInputText/Search.scss';

//component
import Suggestion from '../Suggestion/Suggestion';

class SearchInputTextbox extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
        suggestionList: false,
        searchTest: null
    }
  }

  handleSelect(value) {
    this.props.updateSearchFields({ search: value });
    this.setState({suggestionList:false})
  }

  handleSubmit(evt) {
    const { key } = evt;
    if (key === 'Enter') {
      let searchKey = evt.target.value;
      this.setState({suggestionList:false})
      this.props.updateSearchFields({ search: searchKey });
      this.props.onChange(searchKey.trim());
    }
  }

  handleChange(evt) {
    this.props.updateSearchFields({ search: evt.target.value });  
    if (this.props.searchList && this.props.searchValue.length > 1) {
        if (this.props.searchValue.length % 2 === 0) {
          this.setState({suggestionList:true})
        }
      } else {
        this.setState({suggestionList:false})
      } 
  }

  componentWillUnmount() {
      this.props.updateSearchFields({ search: '' });
  }

  render() {
    const { searchValue, searchList, placeholder, name, className } = this.props;
    return (
      <div className='search-box mt-4'>
        <div className="input-wrapper">
          <input
            className={cx('search-list', className)}
            type="text"
            placeholder={placeholder || 'Search...'}
            name={name}
            value={searchValue}
            onKeyUp={(e) => this.handleSubmit(e)}
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <div className={cx({'search-text-hide': !this.state.searchTest,
          'search-text': this.state.searchTest})}>
          {this.state.searchTest}
        </div>
        {this.state.suggestionList && (
            <Suggestion results={searchList.results} handleSelect={(value) => this.handleSelect(value)}/>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searchValue: state.search.search,
});

const mapDispatchToProps = (dispatch) => ({
  ...updateSearchFields(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchInputTextbox);
