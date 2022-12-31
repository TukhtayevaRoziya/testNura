import React from 'react'

import { mapDataMap } from '../../_utils/dataMaps'
import Yandex from './Yendex'

import img from '../../assets/qr.webp'

import styles from './Map.module.css'

const Map = () => {
  return (
    <div className={styles.body} id="contact">
      <div className={styles.yandex}>
        <Yandex />
      </div>
      <div className={styles.body__main}>
        <h1>Контакты</h1>
        <p>ул. Кунаева 10, БЦ “Изумрудный”, блок - А, этаж 1</p>
        <div className={styles.dataMap__wrap}>
          <div className={styles.dataMap}>{mapDataMap}</div>
          <img src={img} alt="" draggable={false} />
        </div>
      </div>
    </div>
  )
}

export default Map
