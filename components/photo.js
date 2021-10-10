import React from 'react'
import cn from 'classnames'

import styles from './photo.module.css'

function Photo({src="https://pbs.twimg.com/profile_images/1407718710278856713/HFb73f9l_400x400.jpg", alt}) {
 return(
     <div className={cn([styles.photo])}>
         <img className={styles.img} src={src} atl={alt} />
     </div>
 )
}

export default Photo;