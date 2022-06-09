import NextButton from "components/NextButton";
import { FC } from "react";
import "styles/page1.css"

const Page1: FC = () => {
    return (
        <div className="page-wrapper">
            <div className="welcome-message">Привет,</div>
            <div className="article">
                <span>это</span>
                <span style={{ fontWeight: '700', marginLeft: '50px', }}>не</span>
                <span>коммерческое</span>
                <span>задание</span>
                <NextButton />

            </div>
        </div>
    )
}

export default Page1;