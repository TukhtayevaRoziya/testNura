import React from "react";
import { BsTelephone } from "react-icons/bs";
import { TbMessageDots } from "react-icons/tb";
import { AiOutlineInstagram } from "react-icons/ai";

import img from "../../assets/qr.png";
import styles from "./Map.module.css";
import Yandex from "./Yendex";

const Map = () => {
  const data = [
    { id: 0, component: <BsTelephone />, text: "+7 (700) 001-18-88", href:'tel:+77000011888' },
    { id: 1, component: <TbMessageDots />, text: "info@nuramm.kz", href:'mailto:info@nuramm.kz' },
    { id: 1, component: <AiOutlineInstagram />, text: "@nura.premier", href:'https://www.instagram.com/nura.premier' },
  ];

  const dataMap = data.map((d) => (
    <h2 key={d.id}>
      {d.component} 
      
     <a href={d.href}>{d.text}</a> 

      
    </h2>
  ));
  return (
    <div className={styles.body} id='contact'>
      <div className={styles.yandex}>
        <Yandex />
      </div>
      <div className={styles.body__main}>
        <h1>Контакты</h1>
        <p>ул. Кунаева 10, БЦ “Изумрудный”, блок - А, этаж 1</p>
        <div className={styles.dataMap__wrap}>
          <div className={styles.dataMap}>{dataMap}</div>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Map;
