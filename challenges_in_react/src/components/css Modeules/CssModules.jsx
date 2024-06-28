// CssModules.js
import React from 'react';
import styles from './File_css.module.css';

function CssModules() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>CSS Modules Example</h1>
            <p>Welcome to the world of CSS Modules!</p>
            <button className={styles.button}>Click me</button>
        </div>
    );
}

export default CssModules;
