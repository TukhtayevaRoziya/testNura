import React from 'react'

import i1 from '../../assets/bank.png'
import i2 from '../../assets/0.png'
import i3 from '../../assets/company.png'
import i4 from '../../assets/bitcoin.png'

import styles from './Payment.module.css'

const Payment = () => {
  const data =[
    {id:0, img:i1, title:'Получение займа через АО “ЖилСтройСберБанк”'},
    {id:1, img:i2, title:'Получение беспроцентной рассрочки от застройщика NURA ELITE'},
    {id:2, img:i3, title:'Казахстанская Ипотечная Компания «Орда»'},
    {id:3, img:i4, title:'Оплата криптовалютой (Биткоин)'},
  ]

  const dataMap = data.map(d=><div key={d.id}>
    <img src={d.img} alt='' />
    <h1>{d.title}</h1>
  </div>)
  
  return (
    <div className={styles.body}>
      <h1>Способы оплаты</h1>
      <div className={styles.dataMap}>
        {dataMap}
      </div>
    </div>
  )
}

export default Payment
