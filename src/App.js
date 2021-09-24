import Navbar from './layout/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './components/Search';
import Home from './components/Home';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
   
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/search">
              <Search />
            </Route>
            <Route exact path="/profile">
              <UserProfile />          
            </Route>
          </Switch>
   
      </div>
    </Router>
  );
}

export default App;
