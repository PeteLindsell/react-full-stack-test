import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/shared/header";
import Launches from "./pages/launches";
import Rockets from "./pages/rockets";
import Home from "./pages/home";

const MainWrapper = styled.main`
  display: block;
  position: relative;
  width: 100%;
`;

function App() {
  return (
    <Router>
      <MainWrapper>
        <Header />
        <Switch>
          <Route path="/rockets">
            <Rockets />
          </Route>
          <Route path="/launches">
            <Launches />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </MainWrapper>
    </Router>
  );
}

export default App;
