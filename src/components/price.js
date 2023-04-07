import { useState } from 'react';
import { Breadcrumbs } from './breadcrumbs/breadcrumbs';
import { PriceTableCol } from './price/price-table';
import { AppLinks } from './AppLinks/AppLinks';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const tableInfo = [
    {
        title: 'Ionity direct',
        power: '0,79 EUR / kWh',
        listOfBenefits: [
            'Отображение зарядной станции в мобильном приложении Malanka',
            'Обеспечение взимания платы за услуги по зарядке элетромобилей на действуюшей или планируемой ',
            'Техподдержка 24/7',
            'Возможность самостоятельного управления тарификацией на зарядной станции',
            'Регламентное техническое обслуживание зарядных станций и текущий ремонт'
        ],
        listOfExpenses: [
            {
                power: '66 p / kWh',
                title: 'Lorem ipsum dolor',
                watt: '350 kW',
                desc: 'Lorem ipsum dolor sit amet consectetur. Quisque at dictum etiam sem commodo netus senectus purus. Aliquet pretium nisl nunc mauris at. Tincidunt ac tortor mattis enim id enim placerat adipiscing purus.'
            },
            {
                power: '65 p / kWh',
                title: 'Lorem ipsum dolor',
                watt: '350 kW',
                desc: 'Lorem ipsum dolor sit amet consectetur. Quisque at dictum etiam sem commodo netus senectus purus. Aliquet pretium nisl nunc mauris at. Tincidunt ac tortor mattis enim id enim placerat adipiscing purus.'
            },
            {
                power: '49 p / kWh',
                title: 'Lorem ipsum dolor',
                watt: '350 kW',
                desc: 'Lorem ipsum dolor sit amet consectetur. Quisque at dictum etiam sem commodo netus senectus purus. Aliquet pretium nisl nunc mauris at. Tincidunt ac tortor mattis enim id enim placerat adipiscing purus.'
            }
        ]
    },
    {
        title: 'Ionity direct',
        power: '0,79 EUR / kWh',
        listOfBenefits: [
            'Отображение зарядной станции в мобильном приложении Malanka',
            'Обеспечение взимания платы за услуги по зарядке элетромобилей на действуюшей или планируемой ',
            'Техподдержка 24/7',
            'Возможность самостоятельного управления тарификацией на зарядной станции',
            'Регламентное техническое обслуживание зарядных станций и текущий ремонт'
        ],
        listOfExpenses: [
            {
                power: '66 p / kWh',
                title: 'Lorem ipsum dolor',
                watt: '350 kW',
                desc: 'Lorem ipsum dolor sit amet consectetur. Quisque at dictum etiam sem commodo netus senectus purus. Aliquet pretium nisl nunc mauris at. Tincidunt ac tortor mattis enim id enim placerat adipiscing purus.'
            },
            {
                power: '65 p / kWh',
                title: 'Lorem ipsum dolor',
                watt: '350 kW',
                desc: 'Lorem ipsum dolor sit amet consectetur. Quisque at dictum etiam sem commodo netus senectus purus. Aliquet pretium nisl nunc mauris at. Tincidunt ac tortor mattis enim id enim placerat adipiscing purus.'
            },
            {
                power: '49 p / kWh',
                title: 'Lorem ipsum dolor',
                watt: '350 kW',
                desc: 'Lorem ipsum dolor sit amet consectetur. Quisque at dictum etiam sem commodo netus senectus purus. Aliquet pretium nisl nunc mauris at. Tincidunt ac tortor mattis enim id enim placerat adipiscing purus.'
            }
        ]
    }
]

const paymentMenu = [
    {
        title: 'Внутренний баланс пользователя в приложении Malanka',
        firstText: 'Внутренний баланс – специальный счет Пользователя в приложении. На нем отражается количество средств, которыми Пользователь может воспользоваться для оплаты услуг.',
        listHeader: 'Для того, чтобы пополнить внутренний баланс, Вам необходимо',
        list: [
            'Зайти в пункт меню «Платежи»',
            'Выбрать сумму для пополнения',
            'Нажать кнопку «Пополнить»',
            'Вы выбираете банковскую карту для пополнения'
        ],
        secondText: 'После чего Ваш внутренний баланс пополнится на сумму, которая была выбрана ранее. При данном типе оплаты, преавторизация средств будет отсутствовать и после выбора коннектора выбирать кредитную карту уже не нужно.'
    },
    {
        title: 'Преавторизация средств пользователя в приложении Malanka',
        firstText: 'Внутренний баланс – специальный счет Пользователя в приложении. На нем отражается количество средств, которыми Пользователь может воспользоваться для оплаты услуг.',
        listHeader: 'Для того, чтобы пополнить внутренний баланс, Вам необходимо',
        list: [
            'Зайти в пункт меню «Платежи»',
            'Выбрать сумму для пополнения',
            'Нажать кнопку «Пополнить»',
            'Вы выбираете банковскую карту для пополнения'
        ],
        secondText: 'После чего Ваш внутренний баланс пополнится на сумму, которая была выбрана ранее. При данном типе оплаты, преавторизация средств будет отсутствовать и после выбора коннектора выбирать кредитную карту уже не нужно.'
    },
]

export const Price = ({ innerWidth }) => {
    const [faqIsOpen, setFaqIsOpen] = useState(1);

    return (
        <main className='price-page'>
            <div className='pt-16'>
                <Breadcrumbs link={{ name: 'Цена', path: 'price' }} />
                <div className='block'>
                    <h2 className='mb-32'>Цена</h2>
                    <section className='price-page__table mb-64'>
                        {innerWidth > 767 ?
                            tableInfo.map((table, i) => (
                                <PriceTableCol {...table} key={i} />
                            ))
                            :
                            <Swiper
                                slidesPerView={1}
                                modules={[Pagination]}
                                pagination={{ clickable: true }}
                            >
                                {tableInfo.map((table, i) => (
                                    <SwiperSlide>
                                        <PriceTableCol {...table} key={i} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        }
                    </section>
                    <h3 className='mb-8'>Оплата</h3>
                    <p className='regular-text mb-32'>Для вашего удобства мы предлагаем два вида оплаты зарядной сессии</p>
                    <div className='payment-faq'>
                        {paymentMenu.map((item, i) => (
                            <div className={`payment-faq__dropdown ${faqIsOpen === i + 1 ? 'open' : ''}`} key={i}>
                                <div className='payment-faq__dropdown-title' onClick={() => faqIsOpen === i + 1 ? setFaqIsOpen(null) : setFaqIsOpen(i + 1)}>
                                    <h4>{item.title}</h4>
                                    <button className='faq-block__button'></button>
                                </div>
                                <div className='payment-faq__dropdown-content'>
                                    <p>{item.firstText}</p>
                                    <h6>{item.listHeader}</h6>
                                    <ol>
                                        {item.list.map((el, index) => (
                                            <li key={index}>{el}</li>
                                        ))}
                                    </ol>
                                    <p>{item.secondText}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex-wrapper'>
                        <div>
                            <h3 className='mb-16'>Заголовок</h3>
                            <h4 className='medium mb-16'>Наше приложение - Ваш пропуск в мир будущего. Полный контроль процесса зарядки электромобиля. Скачайте и откройте для себя способ заправким 21 века!</h4>
                            <ul className='mb-32'>
                                <li className='list-text'>Следите за состоянием зарядного устройства и управляйте им удаленно с мобильного телефона, смарт-часов или web-портала</li>
                                <li className='list-text'>Просматривайте статистику зарядки в реальном времени</li>
                                <li className='list-text'>Контролируйте потребление электроэнергии и расходы с помощью графиков и диаграм</li>
                            </ul>
                            <AppLinks />
                        </div>
                        <img src='./images/price-img.png' loading='lazy' alt='price-bg' />
                    </div>
                </div>
                <div className='price-page__footer'>
                    <div className='wrapper'>
                        <div>
                            <h3 className='mb-16'>Остались вопросы?</h3>
                            <p className='regular-text'>Откройте для себя преимущества быстрой зарядки. Быстрая зарядка в городе и на трассах. Современные зарядные станции Mode 4 (CCS Combo 2, CHAdeMO) и Mode 3</p>
                        </div>
                        <button className='btn-green-outline'>Как зарядится</button>
                    </div>
                </div>
            </div>
        </main >
    )
}