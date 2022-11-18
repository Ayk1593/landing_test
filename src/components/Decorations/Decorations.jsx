import React from 'react';
import styles from './Decorations.module.css'
import red_ball from '../../img/red ball.svg'
import purple_ball from '../../img/purple ball.svg'
import small_red_ball from '../../img/small red ball.svg'
import red_light from '../../img/red light.png'
import purple_light from '../../img/purple light.png'
import red_ball_mob from '../../img/red ball-mobile.png'
import red_light_mob from '../../img/red light_mobile.png'
import purple_ball_mob from '../../img/purple ball_mobile.png'
import purple_light_mob from '../../img/purple light_mobile.png'


const Decorations = () => {
    return (
        <div className={styles.container_decor}>
            <div className={styles.decor_cont_mobile}>
                {/*<div className={styles.red_ball}>*/}
                {/*    <img src={red_ball_mob}/>*/}
                {/*</div>*/}
                <div className={styles.red_light}>
                    <img src={red_light_mob}/>
                </div>
                <div className={styles.purple_ball}>
                    <img src={purple_ball_mob}/>
                </div>
                <div className={styles.purple_light}>
                    <img src={purple_light_mob}/>
                </div>
            </div>
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
                <div className={styles.left_ball}></div>
                <div className={styles.center_red_ball}>
                    <img src={red_ball}/>
                </div>
                <div className={styles.top_purple_ball}>
                    <img src={purple_ball}/>
                </div>
                <div className={styles.small_ball}>
                    <img src={small_red_ball}/>
                </div>
            </div>
        </div>
    );
};

export default Decorations;