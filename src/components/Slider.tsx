import React, { Children, cloneElement, createElement, FC, JSXElementConstructor, ReactElement, useCallback, useEffect, useRef } from "react";
import "styles/slider.css"


type SliderItemProps = {
    children?: React.ReactNode;
    bgImage?: string;
    style?: React.CSSProperties
}

const SliderItem: FC<SliderItemProps> = ({ bgImage, style, children }) => {
    const sliderItemRef = useRef<HTMLDivElement>(null)

    // The event listener
    const handleMouseDown = useCallback(() => {
        console.log("mouse is down")
    }, [])

    // Attach mousedown listener to the SliderItem
    useEffect(() => {
        if (!sliderItemRef.current) return
        sliderItemRef.current.addEventListener("mousedown", handleMouseDown)
    }, [handleMouseDown])

    return (
        <div className="slider__item" style={{ ...style, backgroundImage: `url('${bgImage}')` }} ref={sliderItemRef}>
            {children}
        </div>
    );
}

type SliderProps = {
    children?: React.ReactElement<any>[]
}

const Slider: FC<SliderProps> = ({ children }) => {


    return (
        <div className="slider">

            {Children.map(children, (child, index) => {
                if (child)
                    return cloneElement(child, {
                        ...child.props,
                        style: {
                            ...child.props.style,
                            transform: `translate3d(${index * 100}vw, 0, 0)`
                        }
                    })
            })}
        </div>
    );
}

export { Slider, SliderItem }