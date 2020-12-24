import React from 'react';
import styles from './Pill.module.css';

function Pill({ text }) {
    return (
        <div className={styles.pill}>
            <p>{text}</p>
        </div>
    );
}

export default Pill;
