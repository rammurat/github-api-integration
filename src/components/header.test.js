import React from 'react'
import renderer from 'react-test-renderer';

import Header from './header'

// @ts-ignore
it('renders correctly', () => {
    const tree = renderer
        .create(<Header />)
        .toJSON();
    // @ts-ignore
    expect(tree).toMatchSnapshot();
});