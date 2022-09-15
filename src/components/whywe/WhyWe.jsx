import React from "react";
import { SiElectron } from "react-icons/si";
import { TiLeaf } from "react-icons/ti";
import { AiOutlineSafety } from "react-icons/ai";
import { IoIosWater } from "react-icons/io";

import img from "../../assets/whyweImg.png";

import styles from "./WhyWe.module.css";

const WhyWe = () => {
  const data = [
    {
      id: 0,
      img: <SiElectron />,
      text: "Дома сохраняют тепло зимой и прохладу летом",
      title: "Энергоэффектиность",
    },
    {
      id: 1,
      img: <TiLeaf />,
      text: "Городок расположен рядом с лесополосой и к. Нура-Есиль",
      title: "Экологически чистый район",
    },
    {
      id: 2,
      img: <AiOutlineSafety />,
      text: "Закрытый городок с круглосуточным видеонаблюдением",
      title: "Безопасность",
    },
    {
      id: 3,
      img: <IoIosWater />,
      text: "Централизованное водоснабжение, энергоснабжение и канализация. ",
      title: "Коммуникации",
    },
  ];

  const dataMap = data.map((d) => (
    <div key={d.id} className={styles.mapDiv}>
      <h2>{d.img}</h2>
      <div>
        <h3>{d.title}</h3>
        <p>{d.text}</p>
      </div>
    </div>
  ));
  
  return (
    <div className={styles.body}>
      <h1>Почему NURA ELITE?</h1>
      <div className={styles.body__wrap}>
        <img src={img} alt="" />
        <div className={styles.mapDiv__wrap}>{dataMap}</div>
      </div>
    </div>
  );
};

export default WhyWe;
