import React from 'react'
import cn from 'classnames'

import styles from './photo.module.css'

function Photo({src="https://pbs.twimg.com/profile_images/1407718710278856713/HFb73f9l_400x400.jpg", alt, size=47}) {
 return(
     <div className={cn([styles.photo])} style={{ width:size, height:size}}>
         <img className={styles.image} 
         src={src} 
         all={alt} 
        />
     </div>
 )
}

export default Photo;