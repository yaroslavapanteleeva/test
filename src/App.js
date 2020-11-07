import React from 'react'
import {BrowserRouter, Route, Switch}  from 'react-router-dom'
import { Todo } from './pages/Todo';



function App() {
  return (
    <BrowserRouter>
      {/* <section className="home">
        <Home /> 
      </section> */}
      <section className="todo-list">
        <Switch>
          <Route path="/" exact component={Todo} />
        </Switch>
      </section>
      

      
    </BrowserRouter>
   
  );
}

export default App;
