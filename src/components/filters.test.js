import React from 'react'
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'

import Filters from './filters'

const store = {
    subscribe: () => { },
    dispatch: () => { },
    getState: () => ({
        posts: {
            initialConfig: {}
        }
    })
}

// @ts-ignore
it('renders correctly', () => {
    const tree = renderer
        // @ts-ignore
        .create(<Provider store={store}><Filters /></Provider>)
        .toJSON();
    // @ts-ignore
    expect(tree).toMatchSnapshot();
});