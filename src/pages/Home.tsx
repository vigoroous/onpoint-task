import { FC } from "react";
import { Slider, SliderItem } from "components/Slider";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";


const Home: FC = () => {
    return (
        <>
            <Slider>
                <SliderItem><Page1 /></SliderItem>
                <SliderItem><Page2 /></SliderItem>
                <SliderItem><Page3 /></SliderItem>
            </Slider>
        </>
    )
}

export default Home;