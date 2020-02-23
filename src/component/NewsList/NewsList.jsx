import React, { Component } from 'react'
import {queryParse } from '../../helpers/index';
import get from 'lodash/get';

//image
import { defaultImage } from '../../constants/image';

//css
import '../NewsList/NewsList.scss';

const NewsList = (props) => {
      return (
        <>
        {get(props, 'newsList.results.length') ? 
        props.newsList.results.map(list => {
            return (
            <div className='container card news-list' key={list.id}>
                <div className='row card-body'>
                    <div className='col col-3'>             
                        <a target='_blank' href={list.webUrl || '#'}>
                            <img 
                                src={list.fields.thumbnail ? list.fields.thumbnail : defaultImage} 
                                width='236px' 
                                alt={list.fields.headline ? list.fields.headline : 'world'}/>
                        </a> 
                    </div>
                    <div className='col'>
                        <a target='_blank' href={list.webUrl}>
                            <h5>{list.fields.headline}</h5>
                        </a>
                        <p>{list.webTitle}</p>
                        {get(props, 'searchList.results.length') &&
                            props.searchList.results.map(keyWord=> {
                            return (
                                    <button 
                                        type='button' 
                                        key={keyWord.id} 
                                        className='btn btn-outline-secondary m-2' 
                                        onClick={()=> props.handleKeyword(keyWord.webTitle)}>
                                            {keyWord.webTitle}
                                    </button>
                                )
                            })
                        }
                    </div>
                </div>
            </div> 
            )
        }) : 
        ( 
            <div className='is-danger mt-3'>No news sorry!</div>
        )}
        </>
      )
}

export default NewsList;