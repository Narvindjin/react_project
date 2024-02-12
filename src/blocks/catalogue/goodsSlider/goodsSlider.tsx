import React, {useRef, useEffect} from "react"
import {StyledContainer} from "./styles"
import GoodsCard from "../../../components/goodsCard/goodsCard"
import {goodsInterface} from "./goodsInterface";

interface goodsSection {
    goodsArray: goodsInterface[];
    slideId: number;
}

const GoodsSlider = ({goodsArray, slideId}: React.PropsWithChildren<goodsSection>) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const swiperRef = useRef<any>(null)
    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideTo(slideId);
        }
    }, [])
    return (
        <StyledContainer>
            <swiper-container
                ref={swiperRef}
                direction="vertical"
                slidesPerView="auto"
                scrollbar-draggable={true}
                mousewheel={true}
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