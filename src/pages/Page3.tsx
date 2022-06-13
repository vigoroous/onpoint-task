import React, { FC, useState } from "react";
import Popup from "components/Popup";
import "styles/page3.css";


const Page3: FC = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Popup open={open} setOpen={setOpen}>
                <>
                    <div className="p3__article">
                        <div className="p3__article-head">
                            01
                        </div>
                        <div className="p3__article-text">
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit
                        </div>
                    </div>
                    <div className="p3__article">
                        <div className="p3__article-head">
                            02
                        </div>
                        <div className="p3__article-text">
                            Faucibus pulvinar elementum integer enim
                        </div>
                    </div>
                    <div className="p3__article">
                        <div className="p3__article-head">
                            03
                        </div>
                        <div className="p3__article-text">
                            Faucibus pulvinar elementum integer enim
                        </div>
                    </div>
                </>
                <>
                    <div className="p3__article">
                        <div className="p3__article-head">
                            04
                        </div>
                        <div className="p3__article-text">
                            Mi bibendum neque egestas congue quisque
                            egestas diam
                        </div>
                    </div>
                    <div className="p3__article">
                        <div className="p3__article-head">
                            05
                        </div>
                        <div className="p3__article-text">
                            Venenatis lectus magna fringilla urna
                        </div>
                    </div>
                    <div className="p3__article">
                        <div className="p3__article-head">
                            06
                        </div>
                        <div className="p3__article-text">
                            Venenatis lectus magna fringilla urna
                        </div>
                    </div>
                </>
            </Popup>
            <div className="page-wrapper" style={{ padding: `165px 70px 70px` }}>
                <button style={{ margin: '0 auto', width: '100px', display: 'block' }} onClick={() => setOpen(true)}>Open</button>
            </div>
            <div className="particles">
                <div className="particles__item particles__item_15">
                    <img src="images/group_3/item_15.png" draggable="false" alt="" />
                </div>
                <div className="particles__item particles__item_16">
                    <img src="images/group_3/item_16.png" draggable="false" alt="" />
                </div>
                <div className="particles__item particles__item_17">
                    <img src="images/group_3/item_17.png" draggable="false" alt="" />
                </div>
                <div className="particles__item particles__item_18">
                    <img src="images/group_3/item_18.png" draggable="false" alt="" />
                </div>
                <div className="particles__item particles__item_19">
                    <img src="images/group_3/item_19.png" draggable="false" alt="" />
                </div>
                <div className="particles__item particles__item_20">
                    <img src="images/group_3/item_20.png" draggable="false" alt="" />
                </div>
                <div className="particles__item particles__item_21">
                    <img src="images/group_3/item_21.png" draggable="false" alt="" />
                </div>
                <div className="particles__item particles__item_22">
                    <img src="images/group_3/item_22.png" draggable="false" alt="" />
                </div>
                <div className="particles__item particles__item_23">
                    <img src="images/group_3/item_23.png" draggable="false" alt="" />
                </div>
            </div>
        </>
    );
}

export default Page3;