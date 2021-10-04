import React from 'react'
import cn from 'classnames'

import styles from '../components/navigation-button.module.css'
import Button from './button'

function NavButton ({notify, selected, children, ...props}) {
return <Button className={cn(styles.navButton, selected && styles.navButtonSelected)} {...props}>
    {children}
    {notify && <span className={styles.notify}>{notify}</span>}
    </Button>
}

export default NavButton;