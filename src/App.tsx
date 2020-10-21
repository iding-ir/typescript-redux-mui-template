import React from "react";

import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";

const App = () => {
  return (
    <Wrapper>
      <Header />

      <Sidebar />

      <Content />
    </Wrapper>
  );
};

export default App;
