import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Assembler from './Components/MainPage/Assembler/Assembler'
import Authorization from './Components/AuthorizationForm/Authorization'
import FormAdd from './Components/MainPage/FormAdd/FormAdd';

function App() {
  return (
    <Router>
        <div>
          <Switch>
              <Route path exact = '/' component = {Authorization}/>
              <Route path = '/Assembler' component = {FormAdd}>
                <Assembler/>
              </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
