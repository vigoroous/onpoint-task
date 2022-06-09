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

    const subscribeDown: React.PointerEventHandler<HTMLDivElement> = e => {
        offset.current = 0;
        e.preventDefault();
    }

    const onMove: React.PointerEventHandler<HTMLDivElement> = e => {
        offset.current += e.movementX;
        e.preventDefault();
    }

    const unsubscribeDown: React.PointerEventHandler<HTMLDivElement> = e => {
        const rect = e.currentTarget.getBoundingClientRect();
        if (Math.abs(offset.current) > rect.width * 0.3) {
            if (offset.current < 0)
                setPage(Math.min(2, page + 1));
            else
                setPage(Math.max(0, page - 1));
        }
        e.preventDefault();
    }

    useEffect(() => {
        console.log(page)

    }, [page]);

    return (
        <div className="slider__item"
            onPointerDown={subscribeDown}
            onPointerUp={unsubscribeDown}
            onPointerMove={onMove}
            style={style}
        // style={{ transform: `translate3d(${x}vw, 0 ,0)` }}
        >
            {children}
        </div>
    );
}

type SliderProps = {
    children?: JSX.Element[]
}

const Slider: FC<SliderProps> = ({ children }) => {
    const [page, setPage] = useContext(SliderContext);
    const offsetX = page * -100;

    return (
        <div className="slider" style={{
            backgroundImage: `url('images/bg_full.png')`,
            backgroundPositionX: `${offsetX}vw`,
            // transform: `translate3d(${offsetX}vw, 0 ,0)`,
        }}>
            {/* {children} */}
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