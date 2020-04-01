import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AddPost from '../components/AddPost';
import PostList from '../components/PostList';
import Navigation from '../components/Navigation';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
      </div>
      <Switch>
        <Route exact path="/">
          <PostList />
        </Route>
        <Route exact path="/AddPost">
          <AddPost />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
