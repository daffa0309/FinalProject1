import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./pages/Home";
import Bookmarks from "./pages/Bookmarks";
import Details from "./pages/Details";
import { getNewsSource } from "./actions/news";
import { getBookmarkItems } from "./actions/bookmarks";
import Programming from "./pages/Programming";
import Covid19 from "./pages/Covid19";

const App = (props) => {
  store.dispatch(getNewsSource());
  store.dispatch(getBookmarkItems());

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/Details"
              exact
              component={Details}
            />
            <Route path="/bookmarks" exact component={Bookmarks} />
            <Route path="/Programming" exact component={Programming} />
            <Route path="/Covid" exact component={Covid19} />

          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
