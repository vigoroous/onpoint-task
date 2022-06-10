import NextButton from "components/NextButton";
import { FC } from "react";
import "styles/page1.css"


const Page1: FC = () => {
    return (
        <>
            <div className="page-wrapper" style={{padding: `165px 70px 70px`}}>
                <div className="welcome-message">Привет,</div>
                <div className="article">
                    <span className="article__text">это</span>
                    <span className="article__text article__text_exbold">не</span>
                    <span className="article__text">коммерческое</span>
                    <span className="article__text">задание</span>
                    <NextButton />
                </div>
            </div>
            <div className="particles">
                <div className="particles__item particles__item_1">
                    <img src="images/group_1/item_1.png" />
                </div>
                <div className="particles__item particles__item_2">
                    <img src="images/group_1/item_2.png" />
                </div>
                <div className="particles__item particles__item_3">
                    <img src="images/group_1/item_3.png" />
                </div>
                <div className="particles__item-orbit">
                    <div className="particles__item particles__item_4">
                        <img src="images/group_1/item_4.png" />
                    </div>
                </div>
                <div className="particles__item particles__item_5">
                    <img src="images/group_1/item_5.png" />
                </div>
                <div className="particles__item particles__item_6">
                    <img src="images/group_1/item_6.png" />
                </div>
                <div className="particles__item particles__item_7">
                    <img src="images/group_1/item_7.png" />
                </div>
                <div className="particles__item particles__item_8">
                    <img src="images/group_1/item_8.png" />
                </div>
                <div className="particles__item particles__item_9">
                    <img src="images/group_1/item_9.png" />
                </div>
            </div>
        </>
    )
}

export default Page1;