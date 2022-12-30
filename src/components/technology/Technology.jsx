import React from 'react'

import { technologyDataMap } from '../../_utils/dataMaps'

import styles from './Technology.module.css'

const Technology = () => {
  return (
    <div className={styles.body}>
      <h1>Технология строения</h1>
      <div className={styles.mapWrap}>{technologyDataMap}</div>
    </div>
  )
}

export default Technology
