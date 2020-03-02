import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TodosContextProvider } from "./api/TodosContext";
import Movies from "./components/movie/MovieContainer";
import Nav from "./components/Nav";
import TodoContainer from "./components/todo/TodoContainer";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <TodosContextProvider>
          <Switch>
            <Route exact path={["/", "/todos"]}>
              <TodoContainer />
            </Route>
            <Route path="/movies">
              <Movies />
            </Route>
          </Switch>
        </TodosContextProvider>
      </div>
    </Router>
  );
}

export default App;
