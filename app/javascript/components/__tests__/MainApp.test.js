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
import Jumbotron from '../components/Jumbotron'
import Map from '../components/Map'

// test('EditPost renders without crashing', () => {
//   const props = {
//     params: { id: 1}
//   }
//   const div = document.createElement('div')
//   ReactDOM.render(<EditPost match = { props }/>, div)
// })

// test('EditPost form renders without an error', () => {
//   const props = { params: {
//                   id: 1 }
//                 }
//   const app = shallow(<EditPost {...props}/>)
//   expect(app.find('Form').exists()).toBe(true)
// })

// test('EditPost contains an h1 title of Edit Post', () => {
//   const params = { }
//   const app = shallow(<EditPost />)
//   expect(app.find('h1').text()).toEqual('Edit Post')
// })

test('Jumbotron renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Jumbotron />, div)
})

test('The Jumbotron contains an h1 title of ThoughtFull', () => {
  const app = shallow(<Jumbotron />)
  expect(app.find('h1').text()).toEqual('ThoughtFull')
})

test('The Jumbotron contains an introduction to ThoughtFull', () => {
  const app = shallow(<Jumbotron />)
  expect(app.find('p.lead').exists()).toBe(true)
})

test('Map renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Map />, div)
})

test('MainApp renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Navigation renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Navigation />, div)
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

test('We can toggle between public and private', () => {
  const wrapper = shallow(<NewPost />)
  expect(wrapper.find('input[type="checkbox"]').prop('checked')).toBe(false)
  wrapper.find('input[type="checkbox"]').simulate('change', {target: {checked: true}})
  expect(wrapper.find('input[type="checkbox"]').prop('checked')).toBe(true)
})

test('NewPost renders a submit button with custom text', () => {
  const wrapper = shallow(<NewPost />)
  const button = wrapper.find('Button')
  expect(button).toHaveLength(1)
  expect(button.prop('type')).toEqual('button')
  expect(button.text()).toEqual('Submit')
})

test('Posts renders without crashing', () => {
  const div = document.createElement('div')
  const posts = [
    { id: 1,
      body: "test post",
      user_id: 1
  }]
  ReactDOM.render(<Posts posts = {[ ]}/>, div)
})

test('renders a Home Page that says "Posts"', () => {
    const posts = [
      { id: 1,
        body: "test post",
        user_id: 1
    }]
    const app = mount(<Posts posts = {[ ]}/>);
    expect(app.find('h1').text()).toEqual('Posts')
})

test('The form should respond to event change and update state', () => {
  const wrapper = shallow(<NewPost />)
  const event = {target: {form: {name: 'body', value: 'test'}}}
  wrapper.find('#body').simulate('change', event)
  expect(wrapper.state('body')).toEqual('test')
})
