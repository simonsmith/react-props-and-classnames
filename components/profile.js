import React, {PropTypes} from 'react';
import assign from 'lodash.assign';
import classNames from 'classnames';

const {div} = React.DOM;

const Profile = props => {
  const {
    isAdmin,
    className,
    useDefaultClassName,
    username,
    ...elemProps
  } = props;

  assign(elemProps, {
    className: classNames({
      'Profile': useDefaultClassName,
      'Profile--large': useDefaultClassName,
      'is-admin': isAdmin
    }, className)
  });

  return (
    div(elemProps, username)
  );
};

Profile.defaultProps = {
  useDefaultClassName: true
};

Profile.propTypes = {
  className: PropTypes.string,
  isAdmin: PropTypes.bool,
  username: PropTypes.string
};

export default Profile;
