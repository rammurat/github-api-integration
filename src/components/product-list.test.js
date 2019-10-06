import React from 'react'
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme'
import { Provider } from 'react-redux'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Error from './error'

const store = {
    subscribe: () => { },
    dispatch: () => { },
    getState: () => ({})
}

const props = {
    labels: {
        a: 'b'
    }
}

it('renders correctly', () => {
    const tree = renderer
        .create(<Error />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});