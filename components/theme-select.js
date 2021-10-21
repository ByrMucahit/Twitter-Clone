import React, { useContext, useState } from "react";

import styles from './theme-select.module.css'
import StoreContext from '../store'

const THEME = {
    light: 'Light',
    dim: 'Dim',
    dark: 'Dark'
}

function ThemeSelect({}) {

    const store = useContext(StoreContext);

    return (
        <div className={styles.container}>
           {['ligth', 'dim', 'dark'].map((theme) =>(
               <label key={theme} className={styles.label}>
                   <input 
                   type='radio' 
                   value={theme}
                   name= 'theme' 
                   className='radioButton'
                   checked= {theme == store.theme}
                   onChange= {(e) => store.changeTheme(e.target.value)}
                   />
                   {theme}
               </label>
           ))}
        </div>
    )
}

export default ThemeSelect;