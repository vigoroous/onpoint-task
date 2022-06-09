import { IconHome, IconDivider } from "icons/header-icons";
import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import "styles/header.css";

const Header: FC = () => {
    return (
        <header className="header">
            <div className="header__wrap">
                <div className="header__menu">
                    <NavLink to={"/"} className="header__menu-button">
                        <IconHome />
                    </NavLink>
                    <div className="header__menu-divider">
                        <IconDivider />
                    </div>
                    <NavLink to={"/project"} className="header__menu-button">
                        Project
                    </NavLink>
                </div>
            </div>
        </header>
    );
}

export default Header;