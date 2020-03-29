import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const Layout = React.lazy(() => import('./components/Layout/Layout'));

class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <React.Suspense fallback={loading()}>
              <Route path="/" name="Main" component={Layout} />
          </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
