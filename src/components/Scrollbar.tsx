import React, { FC, useState, useEffect, useRef, useCallback } from "react";
import "styles/scrollbar.css"


type ScrollbarProps = {
    children?: JSX.Element | JSX.Element[];
}

const clamp = (number: number, lower: number, upper: number) => {
    number = +number
    lower = +lower
    upper = +upper
    lower = lower === lower ? lower : 0
    upper = upper === upper ? upper : 0
    if (number === number) {
        number = number <= upper ? number : upper
        number = number >= lower ? number : lower
    }
    return number;
}

const Scrollbar: FC<ScrollbarProps> = ({ children }) => {
    const contentRef = useRef<HTMLDivElement>(null)
    const thumbRef = useRef<HTMLDivElement>(null)
    const controlRef = useRef<HTMLDivElement>(null)
    const maxHeight = useRef(0);
    const state = useRef({ drag: false, top: 0 })
    //Touch
    const yDown = useRef<number | null>(null);
    const yDiff = useRef<number | null>(null);


    //Mouse
    const handlePointerDown = useCallback((e: PointerEvent) => {
        state.current.drag = true;
        e.preventDefault();
    }, []);

    const handlePointerMove = useCallback((e: PointerEvent) => {
        if (!state.current.drag) return;
        if (!thumbRef.current) return;
        if (!contentRef.current) return;
        const contentHeight = contentRef.current.clientHeight;
        state.current.top = clamp(state.current.top + e.movementY, 0, maxHeight.current);
        thumbRef.current.style.top = `${state.current.top}px`;
        contentRef.current.scrollTo({ top: state.current.top * contentHeight / maxHeight.current, behavior: "auto" })
        e.preventDefault();
    }, []);

    const handlePointerUp = useCallback((e: PointerEvent) => {
        state.current.drag = false;
        maxHeight.current = (controlRef.current?.clientHeight ?? 0) - (thumbRef.current?.clientHeight ?? 0);
        e.preventDefault()
    }, []);


    //Touch
    const handleTouchStart = useCallback((e: TouchEvent) => {
        state.current.drag = true;
        yDown.current = e.touches[0].clientY;
        e.preventDefault();
    }, []);

    const handleTouchMove = useCallback((e: TouchEvent) => {
        if (!state.current.drag) return;
        if (!thumbRef.current) return;
        if (!contentRef.current) return;
        if (!yDown.current) return;
        yDiff.current = yDown.current - e.touches[0].clientY
        const contentHeight = contentRef.current.clientHeight;
        state.current.top = clamp(-yDiff.current, 0, maxHeight.current);
        thumbRef.current.style.top = `${state.current.top}px`;
        contentRef.current.scrollTo({ top: state.current.top * contentHeight / maxHeight.current, behavior: "auto" })
        e.preventDefault();
    }, []);

    const handleTouchEnd = useCallback((e: TouchEvent) => {
        state.current.drag = false;
        maxHeight.current = (controlRef.current?.clientHeight ?? 0) - (thumbRef.current?.clientHeight ?? 0);
        yDown.current = null;
        yDiff.current = null;
        // e.preventDefault()
    }, []);


    useEffect(() => {
        thumbRef.current?.addEventListener('pointerdown', handlePointerDown);
        window.addEventListener('pointermove', handlePointerMove);
        window.addEventListener('pointerup', handlePointerUp);
        thumbRef.current?.addEventListener('touchstart', handleTouchStart);
        thumbRef.current?.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchend', handleTouchEnd);
        return () => {
            thumbRef.current?.removeEventListener('pointerdown', handlePointerDown);
            window.removeEventListener('pointermove', handlePointerMove);
            window.removeEventListener('pointerup', handlePointerUp);
            thumbRef.current?.removeEventListener('touchstart', handleTouchStart);
            thumbRef.current?.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [handlePointerDown]);


    return (
        <div className="scrollbar">
            <div className="scrollbar__control" ref={controlRef}>
                <div className="scrollbar__control-track"></div>
                <div
                    className="scrollbar__control-thumb"
                    style={{ backgroundImage: `url('/images/btn.png')` }}
                    ref={thumbRef}
                ></div>
            </div>
            <div className="scrollbar__content" ref={contentRef}>
                {children}
            </div>
        </div>
    )
}

export { Scrollbar }