import { Scrollbar } from "components/Scrollbar";
import { SliderContext } from "providers/SliderProvider";
import React, { FC, useContext } from "react";
import styles from "styles/page2.module.css";


const Page2: FC = () => {
    const [page] = useContext(SliderContext);

    return (
        <>
            <div className="page-wrapper" style={{ padding: `133px 70px 70px` }}>
                <div className={styles["page-title"]}>Текст сообщения</div>
                <Scrollbar>
                    <>
                        <b>Lorem ipsum dolor sit amet</b>,
                        consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Accumsan lacus vel facilisis volutpat est velit egestas dui id. Velit
                        laoreet id donec ultrices tincidunt arcu non. Urna molestie at elementum
                        eu facilisis sed odio morbi. Sed adipiscing diam donec adipiscing tristique
                        risus nec feugiat in. Massa massa ultricies mi quis hendrerit dolor. Neque
                        ornare aenean euismod elementum nisi quis eleifend quam. Venenatis cras sed
                        felis eget velit aliquet sagittis id consectetur. Facilisi morbi tempus iaculis
                        urna id. Amet nisl suscipit adipiscing bibendum. Semper auctor neque vitae
                        tempus. Sit amet est placerat in egestas erat. At quis risus sed vulputate
                        odio ut. Tristique risus nec feugiat in fermentum posuere urna nec tincidunt.
                    </>
                    <br /><br />
                    <>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Accumsan lacus vel facilisis volutpat est velit egestas dui id. Velit
                        laoreet id donec ultrices tincidunt arcu non. Urna molestie at elementum
                        eu facilisis sed odio morbi. Sed adipiscing diam donec adipiscing tristique
                        risus nec feugiat in. Massa massa ultricies mi quis hendrerit dolor. Neque
                        ornare aenean euismod elementum nisi quis eleifend quam. Venenatis cras sed
                        felis eget velit aliquet sagittis id consectetur. Facilisi morbi tempus iaculis
                        urna id. Amet nisl suscipit adipiscing bibendum. Semper auctor neque vitae
                        tempus. Sit amet est placerat in egestas erat. At quis risus sed vulputate
                        odio ut. Tristique risus nec feugiat in fermentum posuere urna nec tincidunt.
                    </>
                </Scrollbar>
            </div>
            <div className="particles" style={{ animationPlayState: `${page === 1 ? 'running' : 'paused'}` }}>
                <div className={`particles__item ${styles['particles__item_1']}`}>
                    <img src="images/group_2/item_1.png" draggable="false" alt="" />
                </div>
                <div className={`particles__item ${styles['particles__item_2']}`}>
                    <img src="images/group_2/item_2.png" draggable="false" alt="" />
                </div>
                <div className={`particles__item ${styles['particles__item_3']}`}>
                    <img src="images/group_2/item_3.png" draggable="false" alt="" />
                </div>
                <div className={`particles__item ${styles['particles__item_4']}`}>
                    <img src="images/group_2/item_4.png" draggable="false" alt="" />
                </div>
                <div className={`particles__item ${styles['particles__item_5']}`}>
                    <img src="images/group_2/item_5.png" draggable="false" alt="" />
                </div>
            </div>
        </>
    );
}

export default Page2;