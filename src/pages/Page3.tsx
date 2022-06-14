import React, { FC, useState } from "react";
import Popup from "components/Popup";
import styles from "styles/page3.module.css";
import icon1 from "icons/icon1.svg"
import icon2 from "icons/icon2.svg"


const Page3: FC = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Popup open={open} setOpen={setOpen}>
                <>
                    <div className={styles["article"]}>
                        <div className={styles["article__head"]}>01</div>
                        <div className={styles["article__text"]}>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit
                        </div>
                    </div>
                    <div className={styles["article"]}>
                        <div className={styles["article__head"]}>02</div>
                        <div className={styles["article__text"]}>
                            Faucibus pulvinar elementum integer enim
                        </div>
                    </div>
                    <div className={styles["article"]}>
                        <div className={styles["article__head"]}>03</div>
                        <div className={styles["article__text"]}>
                            Faucibus pulvinar elementum integer enim
                        </div>
                    </div>
                </>
                <>
                    <div className={styles["article"]}>
                        <div className={styles["article__head"]}>04</div>
                        <div className={styles["article__text"]}>
                            Mi bibendum neque egestas congue quisque
                            egestas diam
                        </div>
                    </div>
                    <div className={styles["article"]}>
                        <div className={styles["article__head"]}>05</div>
                        <div className={styles["article__text"]}>
                            Venenatis lectus magna fringilla urna
                        </div>
                    </div>
                    <div className={styles["article"]}>
                        <div className={styles["article__head"]}>06</div>
                        <div className={styles["article__text"]}>
                            Venenatis lectus magna fringilla urna
                        </div>
                    </div>
                </>
            </Popup>
            <div className="page-wrapper" style={{ padding: `158px 50px 50px 50px` }}>
                <div className={styles["subhead"]}>Ключевое сообщение</div>
                <div className={styles["head"]}>Brend<span className={styles["head_bold"]}>XY</span></div>
                <div className={styles["container"]}>
                    <div className={styles["imagebox"]}>
                        <div className={styles["imagebox-icon"]} style={{ left: '90px' }}>
                            <img src={icon1} width={67.5} height={63} alt="" />
                        </div>
                        <div className={styles["imagebox-text"]} style={{ marginLeft: '50px' }}>
                            Ehicula ipsum a arcu
                            cursus vitae. Eu non
                            diam phasellus
                            vestibulum lorem sed
                            risus ultricies
                        </div>
                    </div>
                    <div className={styles["imagebox-wrap"]}>
                        <div className={styles["imagebox"]} style={{ width: '263px', height: '150px' }}>
                            <div className={styles["imagebox-icon"]}>
                                <img src={icon2} width={70} height={57.5} alt="" />
                            </div>
                            <div className={styles["imagebox-text"]} style={{ marginRight: '30px' }}>
                                A arcu
                                cursus vitae
                            </div>
                        </div>
                        <div className="button" style={{ width: '263px' }} onClick={() => setOpen(true)}>
                            <div className="button__icon">+</div>
                            <span className="button__name">Подробнее</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="particles">
                <div className={`particles__item ${styles['particles__item_1']}`}>
                    <img src="images/group_3/item_1.png" draggable="false" alt="" />
                </div>
                <div className={`particles__item ${styles['particles__item_2']}`}>
                    <img src="images/group_3/item_2.png" draggable="false" alt="" />
                </div>
                <div className={`particles__item ${styles['particles__item_3']}`}>
                    <img src="images/group_3/item_3.png" draggable="false" alt="" />
                </div>
                <div className={`particles__item ${styles['particles__item_4']}`}>
                    <img src="images/group_3/item_4.png" draggable="false" alt="" />
                </div>
                <div className={`particles__item ${styles['particles__item_5']}`}>
                    <img src="images/group_3/item_5.png" draggable="false" alt="" />
                </div>
                <div className={`particles__item ${styles['particles__item_6']}`}>
                    <img src="images/group_3/item_6.png" draggable="false" alt="" />
                </div>
                <div className={`particles__item ${styles['particles__item_7']}`}>
                    <img src="images/group_3/item_7.png" draggable="false" alt="" />
                </div>
                <div className={`particles__item ${styles['particles__item_8']}`}>
                    <img src="images/group_3/item_8.png" draggable="false" alt="" />
                </div>
                <div className={`particles__item ${styles['particles__item_9']}`}>
                    <img src="images/group_3/item_9.png" draggable="false" alt="" />
                </div>
            </div>
        </>
    );
}

export default Page3;