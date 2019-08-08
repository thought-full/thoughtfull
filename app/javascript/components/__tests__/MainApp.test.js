import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import MainApp from '../MainApp';
import Posts from '../pages/Posts';
import NewPost from '../pages/NewPost';
import EditPost from '../pages/EditPost';
import Navigation from '../components/Navigation'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MainApp />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders a Home Page that says "Posts"', () => {
    const app = shallow(<Posts />);
    expect(app.find('h1').text()).toEqual('Posts')
})