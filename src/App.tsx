import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Movies from "./components/movie/Movies";
import Nav from "./components/Nav";
import TodoContainer from "./components/todo/TodoContainer";
import { TodosContextProvider } from "./contexts/TodosContext";

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
