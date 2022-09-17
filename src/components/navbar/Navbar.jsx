import React, { useState } from "react";

import logo from "../../assets/logo.png";

import { BsWhatsapp, BsFillTelephoneFill } from "react-icons/bs";

import "./Navbar.css";

const Navbar = () => {

  const [styles, setStyles] = useState(false)

  const onClick = () =>{
    setStyles(!styles)
  }
  return (
    <div className="myNavbar">
      <nav className="container">
        <input id="nav_toggle" type="checkbox" checked={styles}/>
        {/* -----------logo----------- */}
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        {/* -----------main section----------- */}

        <ul className={"links " + styles}>
          <div className="links_list__wrapper">
            <div className="links_list__wrapper__firstLine">
              <BsWhatsapp />
              <div>
                <BsFillTelephoneFill /> +7 700 001 18 88
              </div>
            </div>
            <li className="list">
              <a onClick={onClick} href="/#project">О проекте</a>
              <div className="home_underline"></div>
            </li>
            <li className="list">
              <a onClick={onClick} href="/#location">Локация</a>
              <div className="home_underline"></div>
            </li>
            <li className="list">
              <a onClick={onClick} href="/#advantages">Преимущества</a>
              <div className="home_underline"></div>
            </li>
            <li className="list">
              <a onClick={onClick} href="/#whyWe">Почему мы?</a>
              <div className="home_underline"></div>
            </li>
            <li className="list">
              <a onClick={onClick} href="/#paymentMethods">Способы оплаты</a>
              <div className="home_underline"></div>
            </li>
            <li className="list">
              <a onClick={onClick} href="/#contact">Контакты</a>
              <div className="home_underline"></div>
            </li>
          </div>
        </ul>

        {/* -----------toggle butoon----------- */}

        <label  onClick={onClick} htmlFor="nav_toggle" className="icon_burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </label>
      </nav>
      <div className="backgroundText">
        <div className="backgroundText__1">
          <h1>Элитный коттеджный городок в г. Нур-Султан</h1>
          <button>Скачать презентацию</button>
          <h2>36 коттеджей</h2>
          <div className="backgroundText__endText">
            <h3>3</h3>
            <p className="backgroundText__endText__1">
              коттеджа 368 м2 на 10 сотках
            </p>
            <h3>33</h3>
            <p>коттеджа 179 м2 на 5 сотках</p>
          </div>
        </div>
        <h5 className="backgroundText__2">
          <strong>Строительные работы </strong>
          начались в сентября 2021 года.
          <br/>
          <br/>

          <strong>Срок сдачи </strong>
          коттеджей - I квартал 2022 года
          <br/>
          <br/>

          <strong>Срок сдачи </strong>
          всего коттеджного городка - II квартал 2022 года
        </h5>
      </div>
    </div>
  );
};

export default Navbar;
