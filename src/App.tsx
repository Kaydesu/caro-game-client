import React, { FC } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import Lobby from './Pages/Lobby';
import Login from './Pages/Login';
import Room from './Pages/Room';
import { GlobalStyle } from './styles/global';

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Lobby />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/room">
              <Room />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
