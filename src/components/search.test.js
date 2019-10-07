// @ts-nocheck
import React from 'react'
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'

import Search from './search'

const store = {
    subscribe: () => { },
    dispatch: () => { },
    getState: () => ({})
}

it('renders correctly', () => {
    const tree = renderer
        .create(<Provider store={store}><Search /></Provider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});