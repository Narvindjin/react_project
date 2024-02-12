/* eslint-disable @typescript-eslint/no-namespace */
import React from 'react';
import {Wrapper} from "./wrapper";
import Header from "./blocks/header/header";
import FrontMain from "./blocks/frontpage/front-main";
import { register } from 'swiper/element/bundle';
import type { SwiperSlideProps, SwiperProps } from 'swiper/react';
import CatalogueMain from "./blocks/catalogue/catalogue-main";
import Footer from "./blocks/footer/footer";

declare global {
  namespace React.JSX {
    interface IntrinsicElements {
      "swiper-container": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & SwiperProps,
        HTMLElement
      >;
      "swiper-slide": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & SwiperSlideProps,
        HTMLElement
      >;
    }
  }
}



function App() {
    register();
  return (
          <Wrapper>
              <Header/>
              <CatalogueMain/>
              <Footer/>
          </Wrapper>
  );
}

export default App;
