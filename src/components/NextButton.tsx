import { FC } from "react";
import arrow from "icons/arrow-right.svg";
import "styles/next-button.css"

const NextButton: FC = () => {
    return (
        <div className="next-button">
            <div className="next-button__icon">
                <img className="next-button__icon-image" src={arrow} height="28" width="39" alt="arrow" />
            </div>
            <span className="next-button__name">Что дальше?</span>
        </div>
    )
}

export default NextButton;