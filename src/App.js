import React from 'react';
import './App.css';
import ItemsList from './components/ItemsList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CreateItem from './components/CreateItem';
import ShowItem from './components/ShowItem';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/item/:id" children={<ShowItem />}>
          
          </Route>
          <Route path="/create-item">
            <div className="header-create">    
                <Link className="in" to="/">Back</Link>
                <h4 className="in">Create new item</h4>
            </div>
            <CreateItem />
          </Route>
          <Route path="/">
            <div className="header">
              <h2>Sayer</h2>
              <p>World's most used time waster</p>
            </div>
            <ItemsList />
            <div className="block">
            <Link className="btn-create"  to="/create-item">Create Item</Link>
            </div>
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
