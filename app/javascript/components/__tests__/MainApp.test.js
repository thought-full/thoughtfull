import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import fetch from 'isomorphic-fetch';

Enzyme.configure({ adapter: new Adapter() });

import MainApp from '../MainApp';
import Posts from '../pages/Posts';
import NewPost from '../pages/NewPost';
import EditPost from '../pages/EditPost';
import Navigation from '../components/Navigation'

test('Navigation renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Navigation />, div)
})

test('MainApp renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MainApp />, div);
    ReactDOM.unmountComponentAtNode(div);
});

// test('Can see page of posts without logging in', () => {
//     const wrapper = mount(<MainApp />)
//     expect(app.find('li').exists()).toEqual(true);
// });

test('renders a Home Page that says "Posts"', () => {
    const props = [{

    }]
    const app = mount(<Posts />);
    expect(app.find('h1').text()).toEqual('Posts')
})
