import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import HomePage from './Components/HomePage'
import SignIn from './Components/SignIn'

import UserDetails from './Components/UserDetails'
import PasswordReset from './Components/PasswordReset'
import RegistrationForm from './Components/RegistrationForm';

const App = () => {
  return (
    <div>
         <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />}> </Route>
      <Route path='/signin' element={<SignIn />}> </Route>
      <Route path='/register' element={<RegistrationForm />}> </Route>
      <Route path='/userInfo' element={<UserDetails />}> </Route>
      <Route path='/PasswordReset' element={<PasswordReset />}> </Route>
    </Routes>
    
    </BrowserRouter>    
      
    </div>
  );
};

export default App;