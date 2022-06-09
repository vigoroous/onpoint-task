import { FC } from "react";
import NextButton from "components/NextButton";
import { Slider, SliderItem } from "components/Slider";


const Home: FC = () => {
    return (
        <>
            <Slider>
                <SliderItem><NextButton /></SliderItem>
                <SliderItem><NextButton /></SliderItem>
                <SliderItem><NextButton /></SliderItem>
            </Slider>
        </>
    )
}

export default Home;