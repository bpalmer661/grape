import React from 'react';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom' 
import Navbar from './components/layout/NavBar';
import Dashboard from './components/dashboard/Dashboard'
import PostDetails from './components/posts/PostDetails'



import  SignIn  from './components/auth/SignIn';
import  Register  from './components/auth/Register';
import    WritePost  from './components/posts/WritePost';
import history from './history';
import MyProfile from './myProfile/myProfile';

function App() {
  return (

<BrowserRouter history={history}> 
    <div className="App">
   <Navbar />

   <Switch>
<Route exact path = '/' component={Dashboard} />
<Route path = '/post/:id' component={PostDetails} />
<Route path = '/signIn' component={SignIn} />
<Route path = '/register' component={Register} />
<Route path = '/writePost' component={WritePost} />
<Route path = '/myprofile' component={MyProfile} />


   </Switch>

    </div>
    </BrowserRouter>
   





  );
}

export default App;
