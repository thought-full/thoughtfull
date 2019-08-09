import React from 'react';
import Enzyme, { mount, shallow, render } from 'enzyme';
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

test('renders a Home Page that says "Posts"', () => {
    const posts = [
      { id: 1,
        body: "test post",
        user_id: 1
    }]
    const app = mount(<Posts posts = {[ ]}/>);
    expect(app.find('h1').text()).toEqual('Posts')
})


test('NewPost form renders without an error', () => {
  const app = shallow(<NewPost />)
  expect(app.find('Form').exists()).toBe(true)
})

test('NewPost renders a date input', () => {
  const app = shallow(<NewPost />)
  expect(app.find('#date').exists()).toEqual(true)
})

test('NewPost renders a body input', () => {
  const app = shallow(<NewPost />)
  expect(app.find('#body').length).toEqual(1)
})

test('The form should respond to event change and update state', () => {
  const app = shallow(<NewPost />)
  app.find('#body').simulate('change', {target: {name: 'body', value: 'test'}})
  expect(app.state('body')).toEqual('test')
})

// test('NewPost renders a body input', () => {
//   const app = shallow(<NewPost />)
//   expect(app.find(.form-control).length).toEqual(1)
// })
