import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div style={{
    border: '3px solid #f4f4f4',
    padding: '10px'
  }}>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App