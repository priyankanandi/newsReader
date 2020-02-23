import React from "react";

//css
import '../Alert/Alert.scss';

const Alert = ({ message, children, type }) => {
  return <div className={`is-${type} p-2 mt-3`}>{message || children}</div>;
};

Alert.defaultProps = {
  type: 'danger',
};

export default Alert;
