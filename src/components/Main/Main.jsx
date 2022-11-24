import React from 'react';
import styles from './Main.module.scss'
import welbex from '../../img/WELBEX.svg'
import vmeste_s_bespl from '../../img/vmeste_s_bespl.svg'
import vmeste_s_bespl2 from '../../img/vmeste_s_bespl2.svg'
import skype_audit from '../../img/skype_audit.png'
import vidgets30 from '../../img/30vidgets.png'
import dashboard from '../../img/dashboard.png'
import amocrm from '../../img/amocrm.png'
import red_ball_mob from "../../img/red ball-mobile.png";
import small_red_ball from "../../img/small red ball.svg";

const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.left_info}>
                <div className={styles.earn_more}>Зарабатывайте больше</div>
                <div className={styles.welbex}>
                    <img src={welbex}/>
                </div>
                <div className={styles.other_text}>
                    Развиваем и контролируем продажи за вас
                </div>
            </div>
            <div className={styles.right_info}>
                <div className={styles.vmeste_s_bespl}>
                    <img src={vmeste_s_bespl}/>
                </div>
                <div className={styles.mobile_block}>
                <div className={styles.vmeste_s_bespl2}>
                    <img src={vmeste_s_bespl2}/>
                </div>
                    <div className={styles.skype_35_all_mobile}>
                        <div className={styles.skype_35_mobile}>
                            <div><img src={skype_audit}/>  </div>
                            <div><img src={vidgets30}/> </div>
                        </div>
                        <div className={styles.dash_amo_mobile}>
                            <div><img src={dashboard}/> </div>
                            <div><img src={amocrm}/> </div>
                        </div>
                    </div>
                    <div className={styles.red_ball}>
                        <img src={red_ball_mob}/>
                    </div>
                </div>
                <div className={styles.vidgets_dashboard}>
                    <div className={styles.vid_dash_headings}>
                        <div className={styles.vidget_heading}>ВИДЖЕТЫ</div>
                        <div className={styles.dashboard_heading}>DASHBOARD</div>
                    </div>
                    <div className={styles.vid_dash_info}>
                        <div className={styles.vidget_info}>30 готовых решений</div>
                        <div className={styles.dashboard_info}>с показателями вашего бизнеса</div>
                    </div>
                </div>
                <div className={styles.skype_35days}>
                    <div className={styles.skype_35_headings}>
                        <div className={styles.skype_heading}>SKYPE АУДИТ</div>
                        <div className={styles.days35_heading}>35 ДНЕЙ</div>
                    </div>
                    <div className={styles.skype_35_info}>
                        <div className={styles.skype_info}>
                        <div className={styles.skype_info1}>отдела продаж</div>
                        <div className={styles.skype_info2}>и CRM системы</div>
                        </div>
                        <div className={styles.days35_info}>использования CRM</div>
                    </div>
                </div>
                <div className={styles.button_consult}>
                    <button>
                        <div className={styles.button_text}>Получить консультацию</div>
                    </button>
                    <div className={styles.small_ball}>
                        <img src={small_red_ball}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;