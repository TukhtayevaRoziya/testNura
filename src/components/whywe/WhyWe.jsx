import React from 'react'

import { whyWeDataMap } from '../../_utils/dataMaps'

import img from '../../assets/whyweImg.webp'

import styles from './WhyWe.module.css'

const WhyWe = () => {
  return (
    <div className={styles.body} id="whyWe">
      <h1>Почему NURA ELITE?</h1>
      <div className={styles.body__wrap}>
        <img src={img} alt="" />
        <div className={styles.mapDiv__wrap}>{whyWeDataMap}</div>
      </div>
    </div>
  )
}

export default WhyWe
