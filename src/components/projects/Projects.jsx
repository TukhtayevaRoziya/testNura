import React from 'react'

import { projectsDataMap } from '../../_utils/dataMaps'

import mmGroup from '../../assets/mmgroup.png'

import styles from './Projects.module.css'

const Projects = () => {
  return (
    <div className={styles.body} id="project">
      <div className={styles.body__1}>
        <h1>О проекте</h1>

        <p className={styles.body__1__first_p}>
          Элитный закрытый коттеджный городок в г. Нур-Султан состоящий из:
          <br /> <br />
          <strong>36 коттеджей:</strong> <br />
          - 368 м2 на 10 сотках
          <br /> - 179 м2 на 5 сотках
        </p>
        {projectsDataMap}
      </div>
      <div className={styles.body__2}>
        <img src={mmGroup} alt="" />
        <h2>Цель</h2>
        <p>
          Укрепление статуса компании, которая способна обеспечить потребителя
          доступной и качественной недвижимостью в срок. Развитие, надежность и
          качество!
        </p>
      </div>
    </div>
  )
}

export default Projects
