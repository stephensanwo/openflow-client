import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import StyledHeader from "./components/StyledHeader";
import {
  Flow,
  FlowItem,
  Home,
  Node,
  NodeItem,
  Notifications,
  Settings,
} from "./pages";
import "./App.scss";

const App = () => (
  <BrowserRouter>
    <div>
      <StyledHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flow" element={<Flow />} />
        <Route exact path="/flow/:id" element={<FlowItem />} />
        <Route path="/node" element={<Node />} />
        <Route exact path="/node/:id" element={<NodeItem />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
