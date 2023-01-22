// eslint-disable-next-line jsx-a11y/anchor-has-content
import React, { useRef, useState } from 'react'
import {
  AiOutlineHome,
  AiOutlineInstagram,
  AiOutlineSafety,
} from 'react-icons/ai'
import { MdAppSettingsAlt, MdFence } from 'react-icons/md'
import { TbMessageDots } from 'react-icons/tb'
import { BsTelephone } from 'react-icons/bs'
import { IoIosWater } from 'react-icons/io'
import { SiElectron } from 'react-icons/si'
import { FiUser } from 'react-icons/fi'
import { GiSofa } from 'react-icons/gi'
import { FaMap } from 'react-icons/fa'
import { TiLeaf } from 'react-icons/ti'
import { notification, Space } from 'antd'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

import i1 from '../assets/bank.webp'
import i2 from '../assets/0.webp'
import i3 from '../assets/company.webp'
import i4 from '../assets/bitcoin.webp'

import t_i1 from '../assets/build.png'
import t_i2 from '../assets/comp.png'
import t_i3 from '../assets/planet.png'
import t_i4 from '../assets/map.png'
import NotificationSound from './notification.mp3'

import { createAction } from './../components/redux/api'
import { CREATE_USER } from '../components/redux/sendReducer'

import styles from './dataMap.module.css'
import { NotificationPlacement } from 'antd/es/notification/interface'
import { dispatchStore } from '../components/redux/store'

// City
const cityData = [
  { id: 0, img: <FaMap />, text: 'Выгодное месторасположение' },
  { id: 1, img: <AiOutlineSafety />, text: 'Охраняемая территория' },
  {
    id: 2,
    img: <MdFence />,
    text:
      'Городок по периметру ограждён 3-метровым забором, оснащён системой видеонаблюдения 24/7',
  },
  {
    id: 3,
    img: <GiSofa />,
    text: 'Здесь вы почувствуете уединенность, безопасность и комфорт',
  },
]
const cityData2 = [
  {
    id: 0,
    img: <AiOutlineHome />,
    text: 'Индивидуальные участки ограждены 2-метровыми заборами',
  },
  { id: 1, img: <MdAppSettingsAlt />, text: 'Cобственное приложение' },
]

export const cityDataMap = cityData.map((d) => (
  <div key={d.id} className={styles.cityMapDiv}>
    <h2>{d.img}</h2>
    <p>{d.text}</p>
  </div>
))

export const cityDataMap2 = cityData2.map((d) => (
  <div key={d.id} className={styles.cityMapDiv}>
    <h2>{d.img}</h2>
    <p>{d.text}</p>
  </div>
))

// download

export const downloadData = [
  {
    id: 0,
    component: <FiUser />,
    placeholder: 'Ваше имя',
  },
  {
    id: 1,
    component: <BsTelephone />,
    placeholder: 'Номер телефона',
  },
]

// eslint-disable-next-line no-unused-vars

export const DownloadDataMap = () => {
  const [name, setName] = useState('')
  const [phoneNum, setPhoneNum] = useState('+998')

  const [api, contextHolder] = notification.useNotification()
  const audioPlayer = useRef<HTMLAudioElement>(null)

  const downloadDataM = downloadData.map((d) => {
    const onChangeInp = (e: any) => {
      if (d.id === 0) setName(e.target.value)
      else setPhoneNum(e.target.value)
    }
    return (
      <div className={styles.inps__1} key={d.id}>
        {d.component}
        {d.id === 0 ? (
          <input
            type={'text'}
            placeholder={d.placeholder}
            onChange={onChangeInp}
            value={name}
          />
        ) : (
          <PhoneInput
            defaultCountry="UZ"
            limitMaxLength={true}
            placeholder={d.placeholder}
            international
            countryCallingCodeEditable={false}
            value={phoneNum}
            // @ts-ignore
            onChange={(string) => setPhoneNum([...string])}
          />
        )}
      </div>
    )
  })

  const openNotification = (
    placement: NotificationPlacement,
    condition: number,
  ) => {
    condition === 1
      ? api.success({
          message: `Отправлено успешно`,
          description:
            'Уважаемый клиент, Спасибо за ваш запрос. Планирование, калькуляция, инфраструктура. Файл загрузится!',
          placement,
        })
      : api.error({
          message: `Пожалуйста, заполните все обязательные поля`,
          description:
            'Заполните форму и получите презентацию о жилом комплексе в формате PDF.',
          placement,
        })
  }

  const getValues = () => {
    console.log(window.location.href)
    if (name && phoneNum) {
      const data = {
        name: name,
        tel: phoneNum,
      }
      setName('')
      setPhoneNum('+998')
      dispatchStore(createAction('/', CREATE_USER, data))
      audioPlayer.current && audioPlayer.current.play()
      setTimeout(() => {
        openNotification('bottomLeft', 1)
      }, 400)
      setTimeout(() => {
        window.location.href =
          'https://drive.google.com/file/d/1USMYL1iwQkEy0hjPH4QSpJTtgGuFtIoQ/view'
      }, 1000)
    } else {
      openNotification('bottomLeft', 0)
    }
  }

  return (
    <>
      {downloadDataM}
      {contextHolder}
      <audio ref={audioPlayer} src={NotificationSound} />
      <Space>
        <input
          type="submit"
          value="Отправить"
          onClick={getValues}
          className={styles.btn}
        />
      </Space>
      <p>
        Нажимая на кнопку, вы даете согласие на обработку персональных данных и
        соглашаетесь c <a href='/#'> Политикой конфиденциальности</a>
      </p>
    </>
  )
}

// endSection
const endSectionData = [
  { id: 0, title: 'Преимущества', link: 'advantages' },
  { id: 1, title: 'Почему мы?', link: 'whyWe' },
  { id: 2, title: 'Технологии', link: 'technology' },
  { id: 3, title: 'Способы оплаты', link: 'paymentMethods' },
]

export const endSectionDataMap = endSectionData.map((e) => (
  <a href={'#' + e.link} key={e.id}>
    {e.title}
  </a>
))

// map
const mapData = [
  {
    id: 0,
    component: <BsTelephone />,
    text: '+7 (700) 001-18-88',
    href: 'tel:+77000011888',
  },
  {
    id: 1,
    component: <TbMessageDots />,
    text: 'info@nuramm.kz',
    href: 'mailto:info@nuramm.kz',
  },
  {
    id: 2,
    component: <AiOutlineInstagram />,
    text: '@nura.premier',
    href: 'https://www.instagram.com/nura.premier',
  },
]

export const mapDataMap = mapData.map((d) => (
  <h2 key={d.id}>
    {d.component} <a href={d.href}>{d.text}</a>
  </h2>
))

// navbar

export const navbarData = [
  { id: 0, href: 'project', title: 'О проекте' },
  { id: 1, href: 'location', title: 'Локация' },
  { id: 2, href: 'advantages', title: 'Преимущества' },
  { id: 3, href: 'whyWe', title: 'Почему мы?' },
  { id: 4, href: 'paymentMethods', title: 'Способы оплаты' },
  { id: 5, href: 'contact', title: 'Контакты' },
]

// payment

const paymentData = [
  { id: 0, img: i1, title: 'Получение займа через АО “ЖилСтройСберБанк”' },
  {
    id: 1,
    img: i2,
    title: 'Получение беспроцентной рассрочки от застройщика NURA ELITE',
  },
  { id: 2, img: i3, title: 'Казахстанская Ипотечная Компания «Орда»' },
  { id: 3, img: i4, title: 'Оплата криптовалютой (Биткоин)' },
]

export const paymentDataMap = paymentData.map((d) => (
  <div key={d.id}>
    <img src={d.img} alt="" draggable={false} />
    <h1>{d.title}</h1>
  </div>
))

// projects
const projectsData = [
  {
    id: 0,
    title: 'О компании',
    text:
      '“MM Group” Группа Строительных Компании – современная и динамично развивающаяся группа компаний, оказывающая широкий спектр услуг в строительном бизнесе от проектирования до сдачи объектов под ключ. Свою деятельность в строительном бизнесе начала осуществлять с 2013 года и прочно зарекомендовала себя надежной Казахстанской строительной компанией не только на территории Республики Казахстан, но и за рубежом. Учредителем и генеральным директором группы строительных компаний «MM Group» является - Мольдир Суюншали.',
  },
  {
    id: 1,
    title: 'Миссия',
    text:
      'Приоритетом группы строительных компаний «MM Group» является профессиональный подход с применением инновационных решении в строительстве воздвигаемых объектов, опытный коллектив, качественные материалы и своевременность сдачи объектов с доступной возможностью приобретения не только жилья, но и других объектов недвижимости.',
  },
]

export const projectsDataMap = projectsData.map((d) => (
  <React.Fragment key={d.id}>
    <h2>{d.title}</h2>
    <p>{d.text}</p>
  </React.Fragment>
))

// technology

const technologyData = [
  {
    id: 0,
    img: t_i4,
    title: 'Расположение',
    text:
      'Новый коттеджный городок Nura Elite расположен в элитном и перспективном районе столицы, рядом с зелёным поясом по улице 38, участок №67 по соседству с Family Village. Коттеджный городок находится в окружении всей необходимой инфраструктуры таких как, продовольственные магазины, образовательные школы и детские сады.',
  },

  {
    id: 1,
    img: t_i1,
    title: 'Архитектура',
    text:
      'Коттеджный городок Nura Elite построен по кирпичной технологии. Состоит из 48 двухэтажных домов. Для утепления стен использована минеральная плита, для облицовки фасада – фиброцементная панель. КГ Nura Elite представлен коттеджами площадью 179м2 и 368м2, каждый из которых расположен на 5 и 10 сотках земельных участков соответственно.',
  },

  {
    id: 2,
    img: t_i2,
    title: 'Внутренняя инфраструктура',
    text:
      'Коттеджный городок Нура Элит имеет собственную благоустроенную территорию, есть контрольно-пропускной пункт, детская и спортивная площадка, места для отдыха, проезды для авто и дорожки для пешеходов, прогулочные зоны, крытый паркинг.      ',
  },

  {
    id: 3,
    img: t_i3,
    title: 'Внешняя инфраструктура',
    text:
      'Недалеко от КГ Nura Elite Астана находятся детский сад, школа №88, парк. За 10 минут можно доехать до мечети и торгово-развлекательного центра.',
  },
]

export const technologyDataMap = technologyData.map((d) => (
  <div key={d.id} className={styles.map}>
    <img src={d.img} alt="" draggable={false} />
    <h2>{d.title}</h2>
    <p>{d.text}</p>
  </div>
))

// whyWe

const whyWeData = [
  {
    id: 0,
    img: <SiElectron />,
    text: 'Дома сохраняют тепло зимой и прохладу летом',
    title: 'Энергоэффектиность',
  },
  {
    id: 1,
    img: <TiLeaf />,
    text: 'Городок расположен рядом с лесополосой и к. Нура-Есиль',
    title: 'Экологически чистый район',
  },
  {
    id: 2,
    img: <AiOutlineSafety />,
    text: 'Закрытый городок с круглосуточным видеонаблюдением',
    title: 'Безопасность',
  },
  {
    id: 3,
    img: <IoIosWater />,
    text: 'Централизованное водоснабжение, энергоснабжение и канализация. ',
    title: 'Коммуникации',
  },
]

export const whyWeDataMap = whyWeData.map((d) => (
  <div key={d.id} className={styles.mapDiv}>
    <h2>{d.img}</h2>
    <div>
      <h3>{d.title}</h3>
      <p>{d.text}</p>
    </div>
  </div>
))
