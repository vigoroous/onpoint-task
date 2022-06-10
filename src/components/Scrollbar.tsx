import React, { FC, useState, useEffect, useRef, ReactElement } from "react";
import "styles/scrollbar.css"


type ScrollbarProps = {
    children?: ReactElement<any>[] | ReactElement<any>;
}

const Scrollbar: FC<ScrollbarProps> = ({ children }) => {


    
    return (
        <div className="scrollbar">
            <div className="scrollbar__control">
                <div className="scrollbar__control-track"></div>
                <div
                    className="scrollbar__control-thumb"
                    style={{backgroundImage: `url('/images/btn.png')`}}
                    // ref={scrollThumbRef}
                    // style={{
                    //     height: `${thumbHeight}px`,
                    // }}
                ></div>
            </div>
            <div className="scrollbar__content"> 
             {/* ref={contentRef} {...props} */}
            
                {children}
            </div>
        </div>
    )
}

export { Scrollbar }