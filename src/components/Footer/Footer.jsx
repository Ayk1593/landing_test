import React from 'react';
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.footer_container}>
            <div className={styles.footer}>
            <div className={styles.footer1}>©WELBEX 2022. Все права защищены.</div>
            <div className={styles.footer2}>Политика конфиденциальности</div>
            </div>
        </div>
    );
};

export default Footer;