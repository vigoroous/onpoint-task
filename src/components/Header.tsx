import { IconHome, IconDivider } from "icons";
import { SliderContext } from "providers/SliderProvider";
import React, { FC, useContext } from "react";
import "styles/header.css";

const Header: FC = () => {
    const [page, setPage] = useContext(SliderContext);

    return (
        <header className="header">
            <div className="header__wrap">
                <div className="header__menu">
                    <div className="header__menu-button" onClick={() => setPage(0)}>
                        <IconHome />
                    </div>
                    <div className="header__menu-divider">
                        <IconDivider />
                    </div>
                    <div className="header__menu-button">
                        Project
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;