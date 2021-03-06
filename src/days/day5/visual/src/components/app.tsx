import { FunctionalComponent, h } from "preact";
import { Route, Router } from "preact-router";

import Home from "../routes/home";
import Header from "./header";

const App: FunctionalComponent = () => {
  return (
    <div id="preact_root">
      <Header />
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </div>
  );
};

export default App;
