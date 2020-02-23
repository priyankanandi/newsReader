import React from 'react';

//css
import '../Loader/Loader.scss';

const Loader = () => {
  return (
    <div className="spinner-border text-primary mt-4" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;
