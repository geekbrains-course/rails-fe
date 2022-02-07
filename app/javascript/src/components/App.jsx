import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Route,  BrowserRouter } from 'react-router-dom'
import Post from '../components/Posts/Post';

const App = () => {
  return <BrowserRouter>
           <Route exact path="/posts/:id([0-9]+)" component={Post} />
         </BrowserRouter>
}

export default App; 
