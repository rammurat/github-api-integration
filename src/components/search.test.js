import React from 'react'
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'

import Search from './search'

const store = {
    subscribe: () => { },
    dispatch: () => { },
    getState: () => ({})
}
// @ts-ignore
it('renders correctly', () => {
    const tree = renderer
        // @ts-ignore
        .create(<Provider store={store}><Search /></Provider>)
        .toJSON();
    // @ts-ignore
    expect(tree).toMatchSnapshot();
});