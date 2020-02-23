import React from 'react';
import cx from 'classnames';

//css
import '../Icon/Icon.scss';

const Icon = ({type, children, className }) => {
  return (
    <span className={cx('icon', { className })}>
      {children || <i className={`icon-${type}`} />}
    </span>
  );
};

export default Icon;
