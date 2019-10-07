// @ts-nocheck
import React from 'react'
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'
import Filters from './filters'

import { shallow } from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const store = {
    subscribe: () => { },
    dispatch: () => { },
    getState: () => ({
        posts: {
            initialConfig: {}
        }
    })
}

it('renders correctly', () => {
    const tree = renderer
        .create(<Provider store={store}><Filters /></Provider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

