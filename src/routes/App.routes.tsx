import React from 'react';
import {Routes, Route} from 'react-router-dom';

import { CreateTraining } from '../pages/CreateTraining';
import { Selection } from '../pages/Selection';
import { Training } from '../pages/Training';

export function AppRoutes(){
  return(
    <Routes>
      <Route path='/' element={<Selection/>}/>
      <Route path='/createTraining' element={<CreateTraining/>}/>
      <Route path='/training' element={<Training/>}/>
    </Routes>
  )
}