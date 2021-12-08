import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';
import Toast from './components/Toast';
import Lobby from './Pages/Lobby';
import Login from './Pages/Login';
import Room from './Pages/Room';
import { StoreState, User } from './redux/types';
import { GlobalStyle } from './styles/global';

const App: FC = () => {
  const user = useSelector<StoreState, User>(state => state.user);
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Toast />
        <Router>
          <Switch>
            <Route exact path="/">
              {
                user.login ? <Lobby /> : <Redirect to="/login" />
              }
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/room/:id">
              {
                user.login ? <Room /> : <Redirect to="/login" />
              }
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
