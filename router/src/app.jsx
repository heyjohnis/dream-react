import './app.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';


function App() {
  return (
  <BrowserRouter>
    <nav>
      <Link to="/">HOME</Link>
      <Link to="/profile">Profile</Link>
    </nav>
    <Switch>
      <Route path={['/', '/home']}>
        <Home />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
    </Switch>
  </BrowserRouter>);
}

export default App;
