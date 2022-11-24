import React from 'react';
import styles from './Decorations.module.scss'
import red_light from '../../img/red light.png'
import purple_light from '../../img/purple light.png'


const Decorations = () => {
    return (
        <div className={styles.container_decor}>
            <div className={styles.decor_cont}>
                <div className={styles.top_box_container}>
                    <div className={styles.top_box}>
                        <img src={purple_light}/>
                    </div>
                </div>
                <div className={styles.left_box_container}>
                    <div className={styles.left_box}>
                        <img src={red_light}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Decorations;