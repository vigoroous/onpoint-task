import { FC, useContext } from "react";
import { SliderContext } from "providers/SliderProvider";
import { IconArrowRight } from "icons";
import "styles/button.css"

const NextButton: FC = () => {
    const [page, setPage] = useContext(SliderContext);

    return (
        <div className="button" onClick={() => setPage(Math.min(2, page + 1))}>
            <div className="button__icon">
                <IconArrowRight />
            </div>
            <span className="button__name">Что дальше?</span>
        </div>
    )
}

export default NextButton;