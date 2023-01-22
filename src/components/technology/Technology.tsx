import React from 'react'

import { technologyDataMap } from '../../_utils/dataMaps'

import styles from './Technology.module.css'

const Technology = () => {
  return (
    <div className={styles.body} id="technology">
      <h1>Преимущества</h1>
      <p>
        Коттеджный городок Nura Elite <br />
        расположился в Нур-Султане в Есильском районе
      </p>
      <div className={styles.mapWrap}>{technologyDataMap}</div>
    </div>
  )
}

export default Technology
