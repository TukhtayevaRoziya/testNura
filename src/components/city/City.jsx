import React from 'react'
import { TbBuildingCommunity } from 'react-icons/tb'
import { cityDataMap, cityDataMap2 } from '../../_utils/dataMaps'

import city from '../../assets/city.webp'

import styles from './City.module.css'

const City = () => {
  return (
    <div className={styles.body} id="advantages">
      <h1>Основные преимущества городка</h1>
      <div className={styles.mapDiv__wrap}>{cityDataMap}</div>
      <img src={city} alt="" />
      <div className={styles.mapDiv__wrap}>{cityDataMap2}</div>
      <div className={styles.mapDiv + ' ' + styles.mapDiv2}>
        <h2>
          <TbBuildingCommunity />
        </h2>
        <p>
          Каждому владельцу коттеджа даётся возможность на своем земельном
          участке возводить дополнительные застройки: баню, сауну, летнюю кухню
          и др.
        </p>
      </div>
    </div>
  )
}

export default City
