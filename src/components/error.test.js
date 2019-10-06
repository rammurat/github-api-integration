import React from 'react'
import renderer from 'react-test-renderer';

import Error from './error'

// @ts-ignore
it('renders correctly', () => {
    const tree = renderer
        .create(<Error />)
        .toJSON();
    // @ts-ignore
    expect(tree).toMatchSnapshot();
});