import React from 'react';
import {Routes, Route} from 'react-router-dom';

import { Entrace } from '../pages/Entrace';
import { Register } from '../pages/Register';
import { RecoverPassword } from '../pages/RecoverPassword';

export function AuthRoutes(){
  return(
    <Routes>
      <Route path='/' element={<Entrace/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/recoverPassword' element={<RecoverPassword/>}/>
    </Routes>
  )
}