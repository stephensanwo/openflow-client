import React, { useState } from "react";
import styled from "styled-components";
import SignedIn from "./SignedIn";
import NotSignedIn from "./NotSignedIn";

const HomeDiv = styled.div`
  min-height: 100vh;
  width: 100%;
  margin-top: 45px;
  background-color: #f4f4f4;
`;

const Home = () => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  return <HomeDiv>{isSignedIn ? <SignedIn /> : <NotSignedIn />}</HomeDiv>;
};

export default Home;
