import React from 'react';
import Wrapper from "./wrapper";
import Header from "./blocks/header/header";
import FrontMain from "./blocks/frontpage/front-main";
import CatalogueMain from "./blocks/catalogue/catalogue-main";
import Footer from "./blocks/footer/footer";

function App() {
  return (
          <Wrapper>
              <Header/>
              <CatalogueMain/>
              <Footer/>
          </Wrapper>
  );
}

export default App;
