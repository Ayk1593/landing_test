import React, {useState} from 'react';
import styles from './Header.module.scss'
import header_logo from '../../img/logo_welbex.svg';
import telegram_icon from '../../img/telegram.svg'
import phone_icon from '../../img/phone.svg'
import whatsapp_icon from '../../img/whatsapp.svg'
import purple_ball from "../../img/purple ball.svg";
import red_ball from '../../img/red ball.svg';
import burger_menu_img from '../../img/burger_menu.png'
import close_icon from '../../img/close.png'

const Header = () => {
    const [nav, setNav] = useState(false)

    const openMenu = () => {
        setNav(!nav)
    }
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <div className={styles.logo__img}>
                    <a href='#'> <img src={header_logo}/> </a>
                </div>
                <div className={styles.logo__text}>крупный интегратор CRM в Росcии и ещё 8 странах</div>
            </div>
            <nav className={styles.header__nav}>
                <ul className={nav ? [styles.header__list, styles.active].join(' ') : [styles.header__list]}>
                    <li className={styles.header__item}>
                        <a href='src/components/Header/Header#!' className={styles.header__link}>Услуги</a>
                    </li>
                    <li className={styles.header__item}>
                        <a href='src/components/Header/Header#!' className={styles.header__link}>Виджеты</a>
                    </li>
                    <li className={styles.header__item}>
                        <a href='src/components/Header/Header#!' className={styles.header__link}>Интеграции</a>
                    </li>
                    <li className={styles.header__item}>
                        <a href='src/components/Header/Header#!' className={styles.header__link}>Кейсы</a>
                    </li>
                    <li className={styles.header__item}>
                        <a href='src/components/Header/Header#!' className={styles.header__link}>Сертификаты</a>
                    </li>
                </ul>
                <div className={styles.top_purple_ball}>
                    <img src={purple_ball}/>
                </div>
                <div className={styles.center_red_ball}>
                    <img src={red_ball}/>
                </div>
            </nav>
            <div className={styles.contacts_icon}>
                <div className={styles.phone_number}>+7 555 555-55-55</div>
                <div className={styles.messengers_icons}>
                    <a href='/Users/Айк/Desktop/landing-test/public'> <img className={styles.icon_telegram}
                                                                           src={telegram_icon}/> </a>
                    <a href='/Users/Айк/Desktop/landing-test/public'> <img className={styles.icon_phone}
                                                                           src={phone_icon}/> </a>
                    <a href='/Users/Айк/Desktop/landing-test/public'> <img className={styles.icon_whatsapp}
                                                                           src={whatsapp_icon}/> </a>
                </div>
            </div>
            <div onClick={openMenu}  className={styles.burger__menu}>
                {nav ? <img className={styles.close_icon} src={close_icon}/> : <img src={burger_menu_img}/> }
            </div>
        </div>


    );
};


export default Header;