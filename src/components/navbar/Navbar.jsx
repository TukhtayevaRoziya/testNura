import React, { useState } from 'react'
import { BsWhatsapp } from 'react-icons/bs'

import { DownloadDataMap, navbarData } from '../../_utils/dataMaps'

import logo from '../../assets/logo.webp'
import book from '../../assets/header_book.png'

import './Navbar.css'

const Navbar = () => {
  const [styles, setStyles] = useState(false)

  const onClick = () => {
    setStyles(!styles)
  }

  const navbarDataMap = navbarData.map((n) => (
    <li className="list" key={n.id}>
      <a onClick={onClick} href={'/#' + n.href}>
        {n.title}
      </a>
      <div className="home_underline"></div>
    </li>
  ))
  return (
    <div className="myNavbar">
      <div className="mainWrap"></div>
      <nav className="container">
        <input id="nav_toggle" type="checkbox" readOnly checked={styles} />
        {/* -----------logo----------- */}
        <div className="logo">
          <img src={logo} alt="" draggable={false} />
        </div>

        {/* -----------main section----------- */}

        <ul className={'links ' + styles}>
          <div className="links_list__wrapper">
            <div className="links_list__wrapper__firstLine">
              <div className={'links_left'}>
                <p>Горячая линия 24/7</p>
                <a
                  href="tel:+7747094-53-09"
                  data-tilda-mask="+7 (999) 999-9999"
                >
                  +7 (747) 094-53-09
                </a>
                <h6>
                  <div>
                    <strong></strong>
                  </div>
                  Сейчас работаем
                </h6>
              </div>

              <a
                href="https://api.whatsapp.com/send?phone=77001400112&text=Здравствуйте! Меня интересует ЖК Nura Elite"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsWhatsapp />
              </a>

              <div className={'links_last'}>Заказать звонок</div>
            </div>
            {navbarDataMap}
          </div>
        </ul>

        {/* -----------toggle butoon----------- */}

        <label
          onClick={onClick}
          data-testid="label"
          htmlFor="nav_toggle"
          className="icon_burger"
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </label>
      </nav>
      <div className="backgroundText">
        <div className="backgroundText__1">
          <h3>Жилой комплекс</h3>
          <h1>Nura Elite</h1>
          <h2>В гармонии с природой</h2>
        </div>
      </div>
      <div className="last_block">
        <div className="last_block__title">
          <div>
            <h1>Скачайте PDF-презентацию комплекса</h1>
            <p>
              Планировки, стоимость, инфраструктура. Заполните форму и скачайте
              файл за 7 секунд.
            </p>
          </div>
          <img src={book} alt="" />
        </div>
        <div className="last_block__inp">
          <DownloadDataMap />
        </div>
      </div>
    </div>
  )
}

export default Navbar
