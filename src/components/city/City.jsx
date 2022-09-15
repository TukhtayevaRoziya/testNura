import React from "react";
import { FaMap } from "react-icons/fa";
import { MdFence, MdAppSettingsAlt } from "react-icons/md";
import { AiOutlineSafety, AiOutlineHome } from "react-icons/ai";
import { GiSofa } from "react-icons/gi";
import { TbBuildingCommunity } from "react-icons/tb";

import city from "../../assets/city.png";

import styles from "./City.module.css";

const City = () => {
  const data = [
    { id: 0, img: <FaMap />, text: "Выгодное месторасположение" },
    { id: 1, img: <AiOutlineSafety />, text: "Охраняемая территория" },
    {
      id: 2,
      img: <MdFence />,
      text: "Городок по периметру ограждён 3-метровым забором, оснащён системой видеонаблюдения 24/7",
    },
    {
      id: 3,
      img: <GiSofa />,
      text: "Здесь вы почувствуете уединенность, безопасность и комфорт",
    },
  ];
  const data2 = [
    { id: 0, img: <AiOutlineHome />, text: "Индивидуальные участки ограждены 2-метровыми заборами" },
    { id: 1, img: <MdAppSettingsAlt />, text: "Cобственное приложение" }
  ];

  const dataMap = data.map((d) => (
    <div key={d.id} className={styles.mapDiv}>
      <h2>{d.img}</h2>

      <p>{d.text}</p>
    </div>
  ));
  
  const dataMap2 = data2.map((d) => (
    <div key={d.id} className={styles.mapDiv}>
      <h2>{d.img}</h2>

      <p>{d.text}</p>
    </div>
  ));


  return (
    <div className={styles.body}>
      <h1>Основные преимущества городка</h1>
      <div className={styles.mapDiv__wrap}>{dataMap}</div>
      <img src={city} alt="" />
      <div className={styles.mapDiv__wrap}>{dataMap2}</div>

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
  );
};

export default City;
