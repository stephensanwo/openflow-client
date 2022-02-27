import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import StyledHeader from "./components/StyledHeader";
import { Flow, FlowItem, Home } from "./pages";
import "./App.scss";

const App = () => (
  <BrowserRouter>
    <div>
      <StyledHeader />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/flow" element={<Flow />} />
        <Route exact path="/flow/:id" element={<FlowItem />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
