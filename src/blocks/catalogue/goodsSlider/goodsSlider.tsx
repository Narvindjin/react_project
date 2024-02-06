import React, {useRef, useEffect} from "react"
import {StyledContainer} from "./styles"
import GoodsCard from "../../../components/goodsCard/goodsCard"
import {goodsInterface} from "./goodsInterface";

interface goodsSection {
    goodsArray: goodsInterface[];
}

const GoodsSlider = ({goodsArray}: React.PropsWithChildren<goodsSection>) => {
    const swiperRef = useRef(null)

    return (
        <StyledContainer>
            <swiper-container
                ref={swiperRef}
                direction="vertical"
                slidesPerView="auto"
                scrollbar={{draggable: true}}
                mousewheel
                spaceBetween={12}
            >
                {goodsArray.map((goodsItem) => {
                    return (
                        <swiper-slide key={goodsItem.id}>
                            <GoodsCard goodsItem={goodsItem}/>
                        </swiper-slide>
                    )
                })
                }
            </swiper-container>
        </StyledContainer>
    )
}

export default GoodsSlider;