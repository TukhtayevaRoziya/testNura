import React from 'react'

import { downloadData, DownloadDataMap } from '../../_utils/dataMaps'

import styles from './Download.module.css'

const Download = () => {
  console.log(downloadData)
  return (
    <div className={styles.wrap} id="pres">
      <div className={styles.body}>
        <h1>Скачать презентацию</h1>
        <h2>Оставьте свои контакты и мы вам вышлем</h2>
        <div className={styles.inps}>
          <DownloadDataMap/>
        </div>
      </div>
    </div>
  )
}

export default Download
