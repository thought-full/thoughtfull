import React from 'react';
import Enzyme, { mount, shallow, render } from 'enzyme';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import fetch from 'isomorphic-fetch';

Enzyme.configure({ adapter: new Adapter() });

import MainApp from '../MainApp';
import Jumbotron from '../components/Jumbotron'
import Map from '../components/Map'
import MapPrivate from '../components/MapPrivate'
import Navigation from '../components/Navigation'
import SignIn from '../components/SignIn'
import About from '../pages/About'
import EditPost from '../pages/EditPost';
import Location from '../pages/Location';
import NewPost from '../pages/NewPost';
import Posts from '../pages/Posts';
import Private from '../pages/Private';

test('MainApp renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Jumbotron renders without crashing', () => {
const div = document.createElement('div')
ReactDOM.render(<Jumbotron />, div)
})

test('The Jumbotron contains an h1 title "ThoughtFull"', () => {
const app = shallow(<Jumbotron />)
expect(app.find('h1').text()).toEqual('ThoughtFull')
})

test('The Jumbotron contains an introduction to ThoughtFull', () => {
const app = shallow(<Jumbotron />)
expect(app.find('p.lead').exists()).toBe(true)
})

test('Map renders without crashing', () => {
const posts = [
{
id: 1,
body: "test post",
address: '122 W Florentia St, Seattle, WA 92101',
latitude: '47.64707915',
longitude: '-122.3592212',
public_view: true
}]
const div = document.createElement('div')
ReactDOM.render(<Map posts = { posts } />, div)
})

test('Map contains an h1 "Map"', () => {
const app = shallow(<Map posts = {[]}/>)
expect(app.find('h1').text()).toEqual('Map')
})

test('Private Map renders without crashing', () => {
const posts = [
{
  id: 1,
  body: "test post",
  address: '122 W Florentia St, Seattle, WA 92101',
  latitude: '47.64707915',
  longitude: '-122.3592212'
}]
const div = document.createElement('div')
ReactDOM.render(<MapPrivate posts = { posts } />, div)
})

test('Private Map contains an h1 "Map"', () => {
const app = shallow(<MapPrivate posts = {[]}/>)
expect(app.find('h1').text()).toEqual('Map')
})

// test('When you click on a pin on the Map, there is a delete button that can be clicked', () => {
//   const clickFn = jest.fn();
//   const component = mount(<Map posts = {[]} onClick={clickFn}/>)
//   component
//       .find('button')
//       .simulate('click');
//   expect(clickFn).toHaveBeenCalled();
// })


test('Navigation renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Navigation />, div)
})
test('About renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<About />, div)
})

test('About contains an h1 "About ThoughtFull"', () => {
  const app = shallow(<About />)
  expect(app.find('h1').text()).toEqual('About ThoughtFull')
})

// test('EditPost renders without crashing', () => {
//   const showPost = mock.fn();
//   const props = {
//     params: { id: 1},
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
  ReactDOM.render(<Posts posts = {posts}/>, div)
})

test('renders a Home Page that says "Posts"', () => {
    const slice = jest.fn()
    const posts = [
      { id: 1,
        body: "test post",
        user_id: 1,
        public_view: true,
        date: "1998-05-26T00:00:00.000Z"
    }]
    const app = mount(<Posts posts = {posts}/>);
    expect(app.find('h1').text()).toEqual('Posts')
})

test('renders a Home Page that says "Posts"', () => {
    const posts = [
      { id: 1,
        body: "test post",
        user_id: 1,
        public_view: true
    }]
    const app = shallow(<Posts posts = {posts} currentUserId={1} />);
    expect(app.find('div.card-text').exists()).toEqual(true)
})

test('Posts renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SignIn />, div)
})

// test('Each Post has a delete button that can be clicked', () => {
//   const clickFn = jest.fn();
//   const deletePost = deletePost.fn()
//   const posts = [
//     { id: 1,
//       body: "test post",
//       user_id: 1,
//       public_view: true
//   }]
//   const component = mount(<Posts posts = {posts} currentUserId = {1} deletePost={deletePost} onClick={clickFn}/>)
//   component
//       .find('button')
//       .simulate('click');
//   expect(clickFn).toHaveBeenCalled();
// })

// test('The form should respond to event change and update state', () => {
//   const wrapper = shallow(<NewPost />)
//   const event = {target: {form: {name: 'body', value: 'test'}}}
//   wrapper.find('#body').simulate('change', event)
//   expect(wrapper.state('body')).toEqual('test')
// })
