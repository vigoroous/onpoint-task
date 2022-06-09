import React, { FC } from "react";
import "styles/footer.css";

const Footer: FC = () => {
    return (
        <footer className="footer">
            <div className="footer__wrap">
                <img src="images/logo.svg" className="footer__logo"/>
            </div>
        </footer>
    );
}

export default Footer;