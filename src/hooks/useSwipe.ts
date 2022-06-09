import React, { FC, useEffect, useRef } from "react";

type Props = {
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const useSwipe = ({setPage}: Props) => {
    const borders = useRef<HTMLDivElement>(null);
    const offset = useRef(0);

    const onPointerDown: GlobalEventHandlers['onpointerdown'] = e => {
        offset.current = 0;
        e.preventDefault();
    }

    const onPointerUp: GlobalEventHandlers['onpointerup'] = e => {
        offset.current += e.movementX;
        e.preventDefault();
    }

    const onPointerMove: GlobalEventHandlers['onpointermove'] = e => {
        const rect = borders.current?.getBoundingClientRect();
        if (Math.abs(offset.current) > (rect?.width ?? e.width) * 0.3) {
            if (offset.current < 0)
                setPage(page => Math.min(2, page+1));
            else
                setPage(page => Math.max(0, page-1));
        }
        e.preventDefault();
    }

    useEffect(() => {
        window.onpointerdown = onPointerDown;
        window.onpointerup = onPointerUp;
        window.onpointermove = onPointerMove;

        return () => {
            window.onpointerdown = null;
            window.onpointerup = null;
            window.onpointermove = null;
        }
    }, []);

    return {ref: borders}
}