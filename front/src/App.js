import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Counter from './pages/Counter';
import Reverse from './pages/Reverse';
import { TaskList } from './components/TaskList';
import {TaskForm} from './pages/TaskForm';
import Landing from './pages/Landing';
import { Navigation } from './components/navigation';
import Error404 from './pages/error404'

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
    <Routes>    
      <Route path='*' element={<Error404/>}/>
      <Route exact path='/' element={<Landing/>}/>
      <Route path='/counter' element={<Counter/>}/>
      <Route path='/reverse' element={<Reverse/>}/>
      <Route path='/tasks' element={<TaskList/>}/> 
      <Route path='/task-new' element={<TaskForm/>}/>
      <Route path='/task/:id' element={<TaskForm/>}/>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
