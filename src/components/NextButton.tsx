import { FC, useContext } from "react";
import { SliderContext } from "providers/SliderProvider";
import { IconArrowRight } from "icons";
import "styles/next-button.css"

const NextButton: FC = () => {
    const [page, setPage] = useContext(SliderContext);

    return (
        <div className="next-button" onClick={() => setPage(Math.min(2, page + 1))}>
            <div className="next-button__icon">
                <IconArrowRight />
            </div>
            <span className="next-button__name">Что дальше?</span>
        </div>
    )
}

export default NextButton;