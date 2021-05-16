import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/shared/header";
import Hero from "./components/hero";
import Section from "./layout/section";
import Wrapper from "./layout/wrapper";
import LaunchCard from "./components/lauch-card";
import Grid from "./components/grid";
import Launches from "./pages/launches";
import Rockets from "./pages/rockets";
import Home from "./pages/home";

const MainWrapper = styled.main`
  display: block;
  position: relative;
  width: 100%;
`;

const ContentSelector = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  button {
    border: none;
    padding: 10px;
    min-width: 100px;
    margin-right: 10px;
  }
`;

function App() {
  const [data, setData] = useState({ launches: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://api.spacexdata.com/v4/launches/past?limit=10"
      );

      console.log(result.data);

      setData({ launches: result.data });
      setLoading(false);
    };
    fetchData();
  }, []);

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

        {/* <Section>
          <ContentSelector>
            <button>Launches</button>
            <button>rockets</button>
          </ContentSelector>
        </Section> */}
      </MainWrapper>
    </Router>
  );
}

export default App;
