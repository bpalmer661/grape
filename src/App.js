import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter,Switch,Route } from 'react-router-dom' 
import Navbar from './components/layout/NavBar';
import Dashboard from './components/dashboard/Dashboard'
import PostDetails from './components/posts/PostDetails'


function App() {
  return (

<BrowserRouter> 

    <div className="App">
   <Navbar />

   <Switch>
<Route exact path = '/' component={Dashboard} />
<Route path = '/post/:id' component={PostDetails} />
   </Switch>

    </div>
    </BrowserRouter>
   





  );
}

export default App;
