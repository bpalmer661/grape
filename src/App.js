import React from 'react';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom' 
import Navbar from './components/layout/NavBar';
import Dashboard from './components/dashboard/Dashboard'
import PostDetails from './components/posts/PostDetails'



import  SignIn  from './components/auth/SignIn';

import { Register } from './components/auth/Register';
import    WritePost  from './components/posts/WritePost';


function App() {
  return (

<BrowserRouter> 
    <div className="App">
   <Navbar />

   <Switch>
<Route exact path = '/' component={Dashboard} />
<Route path = '/post/:id' component={PostDetails} />
<Route path = '/signIn' component={SignIn} />
<Route path = '/register' component={Register} />
<Route path = '/writePost' component={WritePost} />

   </Switch>

    </div>
    </BrowserRouter>
   





  );
}

export default App;
