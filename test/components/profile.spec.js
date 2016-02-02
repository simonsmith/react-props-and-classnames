import {expect} from 'chai';
import React from 'react';
import Profile from '../../components/profile';
import sd from 'skin-deep';

describe('Profile', () => {
  it('should have the correct props', () => {
    const tree = sd.shallowRender(React.createElement(Profile, {
      isAdmin: true,
      username: 'simonsmith',
      className: 'u-flexGrow1'
    }));

    expect(tree.props).to.contain({
      children: 'simonsmith',
      className: 'Profile Profile--large is-admin u-flexGrow1'
    });
  });

  it('should allow default class names to be disabled', () => {
    const tree = sd.shallowRender(React.createElement(Profile, {
      isAdmin: true,
      useDefaultClassName: false,
      username: 'simonsmith',
      className: 'user-profile'
    }));

    expect(tree.props).to.contain({
      children: 'simonsmith',
      className: 'is-admin user-profile'
    });
  });
});
