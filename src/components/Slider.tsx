import React, { Children, cloneElement, createElement, FC, JSXElementConstructor, ReactElement, useCallback, useEffect, useRef, useState } from "react";
import "styles/slider.css"


type SliderItemProps = {
    children?: React.ReactNode;
    bgImage?: string;
    style?: React.CSSProperties;
    setActive?: React.Dispatch<React.SetStateAction<number>>;
    _index?: number;
}

const SliderItem: FC<SliderItemProps> = ({ bgImage, style, setActive, _index, children }) => {
    const sliderItemRef = useRef<HTMLDivElement>(null)
    const [result, setResult] = useState(0)
    const [dragging, setDragging] = useState(false);
    const previousClientX = useRef(0);

    const handleMouseDown = useCallback((e: MouseEvent) => {
        previousClientX.current = e.clientX;
        setDragging(true);
    }, []);

    const handleMouseUp = useCallback((e: MouseEvent) => {
        setDragging(false);
    }, []);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!dragging) return;
        if (!setActive) return;
        setResult((result) => {
            const change = e.clientX - previousClientX.current;
            return change;
        });
    },
        [dragging]
    );
    
    useEffect(() => {
        console.log(result)
        if (!setActive) return;
        if (_index === undefined) return;
        if (result < -300 && _index < 2) return setActive(_index + 1)
        else if (result > 300 && _index > 0) return setActive(_index - 1)
        else return;
    }, [dragging])

    useEffect(() => {
        sliderItemRef.current?.addEventListener('mousedown', handleMouseDown);
        sliderItemRef.current?.addEventListener('mouseup', handleMouseUp);
        sliderItemRef.current?.addEventListener('mousemove', handleMouseMove);
        return () => {
            sliderItemRef.current?.removeEventListener('mousedown', handleMouseDown);
            sliderItemRef.current?.removeEventListener('mouseup', handleMouseUp);
            sliderItemRef.current?.removeEventListener('mousemove', handleMouseMove);
        };
    }, [handleMouseDown, handleMouseUp, handleMouseMove])

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
    const [active, setActive] = useState(0)

    return (
        <div className="slider">

            {Children.map(children, (child, index) => {
                if (child)
                    return cloneElement(child, {
                        ...child.props,
                        _index: index,
                        setActive,
                        style: {
                            ...child.props.style,
                            transform: `translate3d(${(index - active) * 100}vw, 0, 0)`
                        }
                    })
            })}
        </div>
    );
}

export { Slider, SliderItem }