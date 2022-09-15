import React from "react";
import { FiUser } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";

import styles from "./Download.module.css";

const Download = () => {
  
  const data = [
    { id: 0, component: <FiUser />, placeholder: "Ваше имя" },
    { id: 1, component: <BsTelephone />, placeholder: "Номер телефона" },
  ];

  const dataMap = data.map((d) => (
    <div className={styles.inps__1} key={d.id}>
      {d.component}
      <input placeholder={d.placeholder} />
    </div>
  ));

  return (
    <div className={styles.body}>
      <h1>Скачать презентацию</h1>
      <h2>Оставьте свои контакты и мы вам вышлем</h2>
      <div className={styles.inps}>
        {dataMap}
        <div className={styles.btn}>Отправить</div>
      </div>
    </div>
  );
};

export default Download;
