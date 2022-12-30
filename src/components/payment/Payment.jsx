import React from 'react'
import { paymentDataMap } from '../../_utils/dataMaps'

import styles from './Payment.module.css'

const Payment = () => {
  return (
    <div className={styles.body} id="paymentMethods">
      <h1>Способы оплаты</h1>
      <div className={styles.dataMap}>{paymentDataMap}</div>
    </div>
  )
}

export default Payment
