import React from 'react';
import styles from './main.module.css';

export default function Render() {
    return (
        <div className={styles.root}>
            <p className={styles.testCamel}>testCamel</p>
            <p className={styles['test-kebab']}>test-kebab</p>
            <p className={styles.test_snake}>test_snake</p>
        </div>
    );
}