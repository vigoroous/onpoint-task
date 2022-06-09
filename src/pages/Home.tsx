import { FC } from "react";
import NextButton from "components/NextButton";
import { Slider, SliderItem } from "components/Slider";


const Home: FC = () => {
    return (
        <>
            <Slider>
                <SliderItem bgImage="images/bg.png"><NextButton /></SliderItem>
                <SliderItem bgImage="images/bg2.png"><NextButton /></SliderItem>
                <SliderItem bgImage="images/bg3.png"><NextButton /></SliderItem>
            </Slider>
        </>
    )
}

export default Home;