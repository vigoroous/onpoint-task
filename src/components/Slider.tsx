import { SliderContext } from "providers/SliderProvider";
import React, { useContext, FC, useRef, useEffect, Children, cloneElement } from "react";
import "styles/slider.css"


type SliderItemProps = {
    children?: JSX.Element[] | JSX.Element;
    style?: React.CSSProperties;
}

const SliderItem: FC<SliderItemProps> = ({ style, children }) => {
    const [page, setPage] = useContext(SliderContext);
    const offset = useRef(0);
    //Touch
    const xDown = useRef<number | null>(null);
    const xDiff = useRef<number | null>(null);


    //Mouse
    const handlePointerDown: React.PointerEventHandler<HTMLDivElement> = e => {
        offset.current = 0;
    }

    const handlePointerMove: React.PointerEventHandler<HTMLDivElement> = e => {
        offset.current += e.movementX;
    }

    const handlePointerUp: React.PointerEventHandler<HTMLDivElement> = e => {
        const rect = e.currentTarget.getBoundingClientRect();
        if (Math.abs(offset.current) > rect.width * 0.3) {
            if (offset.current < 0)
                setPage(Math.min(2, page + 1));
            else
                setPage(Math.max(0, page - 1));
        }
    }


    //Touch
    const handleTouchStart: React.TouchEventHandler<HTMLDivElement> = e => {
        xDown.current = e.touches[0].clientX;
    }

    const handleTouchMove: React.TouchEventHandler<HTMLDivElement> = e => {
        if (!xDown.current) return
        xDiff.current = xDown.current - e.touches[0].clientX
    }

    const handleTouchEnd: React.TouchEventHandler<HTMLDivElement> = e => {
        const rect = e.currentTarget.getBoundingClientRect();
        if (!xDiff.current) return
        if (Math.abs(xDiff.current) > rect.width * 0.3) {
            if (xDiff.current > 0) {
                setPage(Math.min(2, page + 1));
            } else {
                setPage(Math.max(0, page - 1));
            }
        }
        xDown.current = null;
        xDiff.current = null;
    }


    useEffect(() => {
        console.log(page)
    }, [page]);

    return (
        <div className="slider__item"
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerMove={handlePointerMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={style}
        >
            {children}
        </div>
    );
}

type SliderProps = {
    children?: JSX.Element[]
}

const Slider: FC<SliderProps> = ({ children }) => {
    const [page] = useContext(SliderContext);
    const offsetX = page * -100;

    return (
        <div className="slider" style={{
            backgroundImage: `url('images/bg_full.png')`,
            backgroundPositionX: `${offsetX}vw`,
        }}>
            {Children.map(children, (child, index) => {
                if (child)
                    return cloneElement(child, {
                        ...child.props,
                        style: {
                            ...child.props.style,
                            transform: `translate3d(${(index - page) * 100}vw, 0, 0)`
                        }
                    })
            })}
        </div>
    );
}

export { Slider, SliderItem }