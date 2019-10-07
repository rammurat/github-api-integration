// @ts-nocheck
import React from 'react'
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'
import PSP from './psp'

const store = {
    subscribe: () => { },
    dispatch: () => { },
    getState: () => ({
        posts: {
            initialConfig: {
                pagination: {
                    perPage: 0
                }
            }
        }
    })
}

it('renders correctly', () => {
    const tree = renderer
        .create(<Provider store={store}><PSP /></Provider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});