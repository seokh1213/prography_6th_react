import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Movies from "./components/movie/Movies";
import Nav from "./components/Nav";
import TodoContainer from "./components/todo/TodoContainer";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path={["/", "/todos"]}>
            <TodoContainer />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
