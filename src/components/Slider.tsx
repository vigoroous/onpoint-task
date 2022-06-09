import SliderProvider, { SliderContext } from "providers/SliderProvider";
import { useSwipe } from "hooks/useSwipe";
import React, { useContext, FC, useRef, useEffect } from "react";
import "styles/slider.css"


type SliderItemProps = {
    children?: JSX.Element[] | JSX.Element;
}

const SliderItem: FC<SliderItemProps> = ({ children }) => {
    const [page, setPage] = useContext(SliderContext);

    const { ref } = useSwipe({ setPage })

    useEffect(() => {
        console.log({ page })
    }, [page]);

    return (
        <div className="slider__item" ref={ref}>
            {children}
        </div>
    );
}

type SliderProps = {
    children?: JSX.Element[]
}

const Slider: FC<SliderProps> = ({ children }) => {
    
    return (
        <SliderProvider>
            <div className="slider" style={{
                backgroundImage: `url('images/bg_full.png')`,
                // backgroundPositionX: `${page * -100}vw`,
            }}>
                {children}
            </div>
        </SliderProvider>
    );
}

export { Slider, SliderItem }