import React, { FC, useEffect, useRef, useState } from "react";
import { IconClose, IconNext } from "icons";
import "styles/popup.css"


type PopupProps = {
    children?: JSX.Element | JSX.Element[];
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Popup: FC<PopupProps> = ({ open, setOpen, children }) => {

    return (
        <div className={`popup ${open && 'popup_opened'}`}>
            <div className="popup__mask"></div>
            <div className="popup__content">
                <div className="popup__close" onClick={() => setOpen(false)}><IconClose /></div>
                <div className="popup__subhead">Преимущества</div>
                <div className="popup__head">Brend<span className="popup__head_bold">XY</span></div>
                <PopupSlider>
                    {children}
                </PopupSlider>
            </div>
        </div>
    )
}


type PopupSliderProps = {
    children?: JSX.Element | JSX.Element[];
}

const range = (size: number) => Array.from({ length: size }, (_, i) => i + 1)

const PopupSlider: FC<PopupSliderProps> = ({ children }) => {
    const [page, setPage] = useState(0);

    let size = 0
    const content = React.Children.map(children, (child, index) => {
        if (child) {
            size++;
            return <PopupSliderItem _index={index} page={page}>{child}</PopupSliderItem>
        }
    })

    const bullets = (size: number) =>
        range(size).map(i =>
            <div key={i} className={`popup__slider-bullets-item ${page === i - 1 ? 'popup__slider-bullets-item_active' : ''}`} onClick={() => setPage(i - 1)}></div>)

    return (
        <div className="popup__slider">
            <div className="popup__slider-content">
                {content}
            </div>
            <div className="popup__slider-pagination">
                <div className="popup__slider-prev" onClick={() => setPage(Math.max(page - 1, 0))}>
                    <IconNext />
                </div>
                <div className="popup__slider-bullets">
                    {bullets(size)}
                </div>
                <div className="popup__slider-next" onClick={() => setPage(Math.min(page + 1, size - 1))}>
                    <IconNext />
                </div>
            </div>
        </div>
    )
}

type PopupSliderItemProps = {
    _index: number;
    page: number;
} & PopupSliderProps

const PopupSliderItem: FC<PopupSliderItemProps> = ({ _index, page, children }) => {
    return (
        <>
            <div className={`popup__slider-item ${page === _index ? 'popup__slider-item_active' : ''}`}>
                {children}
            </div>
        </>
    )
}

export default Popup;
