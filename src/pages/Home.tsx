import { FC } from "react";
import NextButton from "components/NextButton";
import { Slider, SliderItem } from "components/Slider";
import Page1 from "./Page1";


const Home: FC = () => {
    return (
        <>
            <Slider>
                <SliderItem><Page1 /></SliderItem>
                <SliderItem><Page1 /></SliderItem>
                <SliderItem><NextButton /></SliderItem>
            </Slider>
        </>
    )
}

export default Home;