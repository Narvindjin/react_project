import React from 'react';
import Wrapper from "./wrapper";
import Header from "./blocks/header/header";
import FrontMain from "./blocks/frontpage/front-main";
import Footer from "./blocks/footer/footer";

function App() {
  return (
          <Wrapper>
              <Header/>
              <FrontMain/>
              <Footer/>
          </Wrapper>
  );
}

export default App;
