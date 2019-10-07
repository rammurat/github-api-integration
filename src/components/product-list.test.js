// @ts-nocheck
import React from 'react'
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'

import List from './product-list'

const store = {
    subscribe: () => { },
    dispatch: () => { },
    getState: () => ({
        posts: {
            initialConfig: {
                pagination: {
                    perPage: 0
                },
                isLoading: false
            }
        }
    })
}

it('renders correctly', () => {
    const tree = renderer
        .create(<Provider store={store}><List /></Provider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});