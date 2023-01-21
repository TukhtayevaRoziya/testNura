import React from 'react'
import { endSectionDataMap } from '../../_utils/dataMaps'

import styles from './EndSection.module.css'

const EndSection = () => {
  return (
    <div className={styles.body}>
      <div>{endSectionDataMap}</div>
      <div>
        <h2>Создание сайта maxico.kz</h2>
      </div>
    </div>
  )
}

export default EndSection
