import React from 'react';
import styles from './FooterMenu.module.css'
import telegram_icon from "../../img/telegram.svg";
import phone_icon from "../../img/phone.svg";
import whatsapp_icon from "../../img/whatsapp.svg";

const FooterMenu = () => {
    return (
        <div className={styles.footer_menu}>

            <div className={styles.company_menu_cont}>
                <div className={styles.about_company}>
                    <div className={styles.about_company_title}>
                        О КОМПАНИИ
                    </div>
                    <div className={styles.about_company_list}>
                        <ul className={styles.about_company_ul}>
                            <li>Партнёрская компания</li>
                            <li>Вакансии</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.menu_container}>
                    <div className={styles.menu}>
                        <div className={styles.menu_title}>
                            МЕНЮ
                        </div>
                        <div className={styles.menu_list}>
                            <ul className={styles.menu_ul}>
                                <li>Расчёт стоимости</li>
                                <li>Услуги</li>
                                <li>Виджеты</li>
                                <li>Интеграции</li>
                                <li>Наши клиенты</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.second_menu}>
                        <ul className={styles.second_menu_ul}>
                            <li>Кейсы</li>
                            <li>Благодарственные письма</li>
                            <li>Сертификаты</li>
                            <li>Блог на Youtube</li>
                            <li>Вопрос / Ответ</li>
                        </ul>
                        <ul className={styles.second_menu_ul_mobile}>
                            <li>Благодарность клиентов</li>
                            <li>Кейсы</li>
                            <li>Сертификаты</li>
                            <li>Блог на Youtube</li>
                            <li>Вопрос / Ответ</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.contacts}>
                <div className={styles.contacts_title}>
                    КОНТАКТЫ
                </div>
                <div className={styles.phone_number}>+7 555 555-55-55</div>
                <div className={styles.messengers_icons}>
                    <a href='/Users/Айк/Desktop/landing-test/public'> <img className={styles.icon_telegram}
                                                                           src={telegram_icon}/> </a>
                    <a href='/Users/Айк/Desktop/landing-test/public'> <img className={styles.icon_phone}
                                                                           src={phone_icon}/> </a>
                    <a href='/Users/Айк/Desktop/landing-test/public'> <img className={styles.icon_whatsapp}
                                                                           src={whatsapp_icon}/> </a>
                </div>
                <div className={styles.adress}>
                    Москва, Путевой проезд 3с1, к 902
                    <div/>
                </div>
            </div>

        </div>
    );
};

export default FooterMenu;