import React from 'react'

import { downloadDataMap } from '../../_utils/dataMaps'

import styles from './Download.module.css'

const Download = () => {
  return (
    <div className={styles.wrap} id="pres">
      <div className={styles.body}>
        <h1>Скачать презентацию</h1>
        <h2>Оставьте свои контакты и мы вам вышлем</h2>
        <div className={styles.inps}>
          {downloadDataMap}
          <div className={styles.btn}>Отправить</div>
        </div>
      </div>
    </div>
  )
}

export default Download
