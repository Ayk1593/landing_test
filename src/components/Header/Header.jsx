import React from 'react';
import styles from './Header.module.css'
import header_logo from '../../img/logo_welbex.svg';
import telegram_icon from '../../img/telegram.svg'
import phone_icon from '../../img/phone.svg'
import whatsapp_icon from '../../img/whatsapp.svg'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <div className={styles.logo__img}>
                    <a href='/Users/Айк/Desktop/landing-test/public'> <img src={header_logo}/> </a>
                </div>
                <div className={styles.logo__text}>крупный интегратор CRM в Росcии и ещё 8 странах</div>
            </div>
            <nav className={styles.header__nav}>
                <ul className={styles.header__list}>
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
                        <li className={styles.header__item_end}>
                        <a href='src/components/Header/Header#!' className={styles.header__link}>Сертификаты</a>
                        </li>
                </ul>
            </nav>
            <div className={styles.contacts_icon}>
                <div className={styles.phone_number}>+7 555 555-55-55</div>
                <div className={styles.messengers_icons}>
                    <a href='/Users/Айк/Desktop/landing-test/public'> <img className={styles.icon_telegram} src={telegram_icon}/> </a>
                    <a href='/Users/Айк/Desktop/landing-test/public'> <img className={styles.icon_phone} src={phone_icon}/> </a>
                    <a href='/Users/Айк/Desktop/landing-test/public'> <img className={styles.icon_whatsapp} src={whatsapp_icon}/> </a>
                </div>
            </div>
        </div>
    );
};

export default Header;