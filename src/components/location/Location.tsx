import React from "react";
import img from '../../assets/location.webp'

import styles from "./Location.module.css";

const Location = () => {
  return (
    <div className={styles.body} id='location'>
      <div className={styles.body__1}>
        <h1>Локация</h1>
        <p>
          Закрытый коттеджный городок Nura Elite расположен в элитном и
          перспективном районе столицы, рядом с зелёным поясом по соседству с
          Vella Village.
          <br />
          <br />
          Nura Elite - это прекрасное пространство для уединения и активной
          семейной жизни в гармонии с природой, без городского шума с удобной
          транспортной развязкой.
        </p>
        <div className={styles.dotted}></div>
      </div>
      <div>
        <img src={img} alt='' draggable={false}/>
      </div>
    </div>
  );
};

export default Location;
