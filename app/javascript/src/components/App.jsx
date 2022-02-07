import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { QueryClientProvider, QueryClient } from 'react-query';
import { Route,  BrowserRouter } from 'react-router-dom'
import Post from '../components/Posts/Post';
import PostsList from "../components/Posts/PostsList"

const queryClient = new QueryClient();

const App = () => {
  return <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <Route exact path="/" component={PostsList} />
              <Route exact path="/posts/:id([0-9]+)" component={Post} />
              <Route exact path="/posts" component={PostsList} />
            </BrowserRouter>
         </QueryClientProvider>
}

export default App; 
