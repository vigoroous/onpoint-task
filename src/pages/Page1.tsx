import NextButton from "components/NextButton";
import { FC } from "react";
import styles from "styles/page1.module.css";


const Page1: FC = () => {
    return (
        <>
            <div className="page-wrapper" style={{ padding: `165px 70px 70px` }}>
                <div className={styles["welcome-message"]}>Привет,</div>
                <div className={styles["article"]}>
                    <span className={styles["article__text"]}>это</span>
                    <span className={`${styles['article__text']} ${styles['article__text_exbold']}`}>не</span>
                    <span className={styles["article__text"]}>коммерческое</span>
                    <span className={styles["article__text"]}>задание</span>
                    <NextButton />
                </div>
            </div>
            <div className="particles">
                <div className={`particles__item ${styles['particles__item_1']}`}>
                    <img src="images/group_1/item_1.png" draggable="false" alt="" />
                </div>
                <div className={`particles__item ${styles['particles__item_2']}`}>
                    <img src="images/group_1/item_2.png" draggable="false" alt="" />
                </div>
                <div className={`particles__item ${styles['particles__item_3']}`}>
                    <img src="images/group_1/item_3.png" draggable="false" alt="" />
                </div>
                <div className={styles["particles__item-orbit"]}>
                    <div className={`particles__item ${styles['particles__item_4']}`}>
                        <img src="images/group_1/item_4.png" draggable="false" alt="" />
                    </div>
                </div>
                <div className={`particles__item ${styles['particles__item_5']}`}>
                    <img src="images/group_1/item_5.png" draggable="false" alt="" />
                </div>
                <div className={`particles__item ${styles['particles__item_6']}`}>
                    <img src="images/group_1/item_6.png" draggable="false" alt="" />
                </div>
                <div className={`particles__item ${styles['particles__item_7']}`}>
                    <img src="images/group_1/item_7.png" draggable="false" alt="" />
                </div>
                <div className={`particles__item ${styles['particles__item_8']}`}>
                    <img src="images/group_1/item_8.png" draggable="false" alt="" />
                </div>
                <div className={`particles__item ${styles['particles__item_9']}`}>
                    <img src="images/group_1/item_9.png" draggable="false" alt="" />
                </div>
            </div>
        </>
    )
}

export default Page1;