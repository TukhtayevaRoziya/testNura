import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
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

import i1 from '../assets/bank.webp'
import i2 from '../assets/0.webp'
import i3 from '../assets/company.webp'
import i4 from '../assets/bitcoin.webp'

import t_i1 from '../assets/technical1.webp'
import t_i2 from '../assets/technical2.webp'
import t_i3 from '../assets/technical3.webp'
import t_i4 from '../assets/technical4.webp'
import t_i5 from '../assets/technical5.webp'
import t_i6 from '../assets/technical6.webp'
import NotificationSound from './notification.mp3'

import { createAction } from './../components/redux/api'
import { CREATE_USER } from '../components/redux/sendReducer'

import styles from './dataMap.module.css'

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
    type: 'tel',
    pattern: '([0-9]{2})-[0-9]{3}-[0-9]{2}-[0-9]{2}',
  },
]

// eslint-disable-next-line no-unused-vars

export const DownloadDataMap = () => {
  const [name, setName] = useState('')
  const [phoneNum, setPhoneNum] = useState(new Array(17))
  const downloadDataM = downloadData.map((d) => {
    const onChangeInp = (e) => {
      if (d.id === 0) setName(e.target.value)
      else {
        if (phoneNum.length === 6) {
          setPhoneNum(e.target.value + ' ')
        } else if (phoneNum.length === 10) {
          setPhoneNum(e.target.value + '-')
        } else if (phoneNum.length === 13) {
          setPhoneNum(e.target.value + '-')
        } else {
          setPhoneNum(e.target.value)
        }
      }
    }
    return (
      <div className={styles.inps__1} key={d.id}>
        {d.component}
        <input
          type={d.type || 'text'}
          inputMode={d.type}
          placeholder={d.placeholder}
          onChange={onChangeInp}
          value={d.id === 0 ? name : phoneNum}
          pattern={d.pattern}
          maxLength="17"
        />
      </div>
    )
  })
  const [api, contextHolder] = notification.useNotification()
  const audioPlayer = useRef(null)

  const openNotification = (placement, condition) => {
    condition === 1
      ? api.success({
          message: `Отправлено успешно`,
          description:
            'Уважаемый клиент, Спасибо за ваш запрос. Планирование, калькуляция, инфраструктура. Файл загрузится через 7 секунд.',
          placement,
        })
      : api.error({
          message: `Отправлено успешно`,
          description:
            'Уважаемый клиент, Спасибо за ваш запрос. Планирование, калькуляция, инфраструктура. Файл загрузится через 7 секунд.',
          placement,
        })
  }
  const dispatch = useDispatch()

  const getValues = () => {
    if (!name || !phoneNum) {
      openNotification('bottomLeft', 0)
    } else {
      const data = {
        name: name,
        tel: phoneNum,
      }
      setName('')
      setPhoneNum('+998')
      dispatch(createAction('/', CREATE_USER, data))
      audioPlayer.current.play()
      setTimeout(() => {
        openNotification('bottomLeft', 1)
      }, 400)
    }
  }

  return (
    <>
      {downloadDataM}
      {contextHolder}
      {/* <PhoneInput value={phoneNum} onChange={setPhoneNum} displayInitialValueAsLocalNumber
  defaultCountry="UZ" /> */}
      <audio ref={audioPlayer} src={NotificationSound} />
      <Space>
        <div onClick={getValues} className={styles.btn}>
          Отправить
        </div>
      </Space>
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
    img: t_i1,
    title: 'Конструкция стены',
    text:
      'Двойная кладка из жжённого красного кирпича - 38/40 см, утепление минеральной плитой - 10 см., и облицовка HPL и ФБЦ панелью',
  },

  {
    id: 1,
    img: t_i2,
    title: 'Конструкция окна',
    text:
      'Высокая экологичность, безопасность, надёжность и долговечность, усиленная теплоизолирующая способность, которая обеспечивается пятикамерным строением профиля с тройным остеклением и шумоизоляцией (система Helios рассчитана на стеклопакеты толщиной 44 мм с воздушной прослойкой в 16 мм, проходя через которые низкочастотные шумы теряют свою интенсивность, что очень ценят жители) по технологии FUNKE',
  },

  {
    id: 2,
    img: t_i3,
    title: 'Конструкция двери',
    text:
      'Технология IZO TERMO. Двери не соприкасаются с наружными. Между ними расположен изолятор - щит из португальского пробкового дуба толщиной в 8 мм. IZO TERMO устраняет “мостик холода” и не дает теплу уходить из дома. С этой технологией вам не нужен тамбур и вторая дверь.',
  },

  {
    id: 3,
    img: t_i4,
    title: 'Конструкция кровли',
    text:
      'Гибкая черепица ТЕХНОНИКОЛЬ SHINGLAS - это гарантия комфорта и безопасности вашего дома. Дома с кровлей из гибкой черепицы ТЕХНОНИКОЛЬ SHINGLAS очаровывают своей гармонией, изяществом. Коллекции отличаются разнообразием форм и расцветок.',
  },

  {
    id: 4,
    img: t_i5,
    title: 'Конструкция Фасада',
    text:
      'HPL панель - это высококачественная строительная продукция для долговечной облицовки фасада. Стойкость на погодные воздействия +180 с/ -180с с высоким эффектом защиты от атмосферных воздействий. Данная защита обеспечивается за счет применения акрилополиуретановых смол с двойным отверждением. Относится к экологичным материалам.',
  },
  {
    id: 5,
    img: t_i6,
    title: 'ФБЦ',
    text:
      'ФБЦ - это уникальный и высококачественный строительный материал для долговечной облицовки фасада. Высокая морозостойкость, пожаробезопасность, хорошая звуко- и теплоизоляция, герметичность, повышенная прочность, погодоустойчивость. Безопасна как для человека, так и для окружающей среды. Они не содержат асбест, состоят из экологически чистых натуральных компонентов: 82-85% цемента, древесное волокно, добавки для снижения веса, кремнийорганические соединения',
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
