import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import TrumpTweets from './components/TrumpTweets';
import ClintonTweets from './components/ClintonTweets';

// Map components to different routes.
// The parent component wraps other components and thus serves as
// the entrance to other React components.
// IndexRoute maps TrumpTweets component to the default route
export default (
  <Route path="/" component={App}>
    <IndexRoute component={TrumpTweets} />
    <Route path="clinton" component={ClintonTweets} />
  </Route>
);