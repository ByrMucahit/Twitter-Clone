import React from 'react'
import cn from'classnames';
import Link from 'next/link'
import styles from '../components/button.module.css'

function LinkButton ({ href, children, className ,...props }) {
    return 
    (
        <Link href={href}>
            <a 
                {...props}
            >
                {children}
            </a>
        </Link>
    )
}

function Button ({full=false, children ,...props}) {
    return <button 
            type="button" 
            {...props}
            >
                {children}
            </button>
    }


function BaseButton ({full=false, children, ...props}) {
    const Comp = props.href ? LinkButton : BaseButton
    return <Comp type="button" 
            className={cn(styles.button, full &&  styles.fullWidth, className)} 
            {...props}
            >
                {children}
            </Comp>
    }

export default Button;