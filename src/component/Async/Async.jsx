import React from 'react';

// components
import Loader from '../Loader/Loader';
import Alert from '../Alert/Alert';


const Async = ({ loading, onSuccess, error }) => {
  
  const onFailure = (error) => {
    return  <Alert message={error} />
  }

  return (
    <React.Fragment>
      {loading ? <Loader /> : error ? onFailure(error) : onSuccess()}
    </React.Fragment>
  );
  
};

export default Async;
