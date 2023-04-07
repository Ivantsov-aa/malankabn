import { useRef, useState } from "react";
import { Breadcrumbs } from "./breadcrumbs/breadcrumbs"
import { AppLinks } from "./AppLinks/AppLinks"
import { CallbackForm } from "./callback-form/callback-form";
import { Instructions } from "./instructions/instructions"

const instructionsList = [
    {
        text: 'Откройте приложение MALANKA NEW на смартфоне',
        path: '/images/charging/charging-1.png'
    },
    {
        text: 'Наведите камеру на QR-код на станции зарядки либо введите номер зарядной станции',
        path: '/images/charging/charging-2.png'
    },
    {
        text: 'Запустите процесс зарядки',
        path: '/images/charging/charging-3.png'
    }
];

const faq = {
    title: 'Первый раз используете приложение?',
    items: [
        {
            name: 'Зарядка',
            text: 'Пользователей в новом приложении ждет обновленный дизайн и улучшенная эргономика приложения. Теперь заряжаться и просматривать необходимую информацию о зарядной сессии стало ещё удобнее. Изменено взаимодействие с пользователем через push-уведомления. Добавлены новые возможности и увеличен функционал. Улучшена скорость и качество работы приложения, теперь запустить сессию можно ещё быстрее. Основным нововведением стала возможность быстрого переключения между способами оплаты.',
            list: [
                'эластичный смесовый хлопок',
                'сделано из переработанных волокон',
                'средняя посадка',
                'фирменный эластичный пояс Calvin Klein',
                '57% хлопок 38% переработанный полиэстер 5% эластан'
            ]
        },
        {
            name: 'Мобильное приложение',
            text: 'Пользователей в новом приложении ждет обновленный дизайн и улучшенная эргономика приложения. Теперь заряжаться и просматривать необходимую информацию о зарядной сессии стало ещё удобнее. Изменено взаимодействие с пользователем через push-уведомления. Добавлены новые возможности и увеличен функционал. Улучшена скорость и качество работы приложения, теперь запустить сессию можно ещё быстрее. Основным нововведением стала возможность быстрого переключения между способами оплаты.',
            list: [
                'эластичный смесовый хлопок',
                'сделано из переработанных волокон',
                'средняя посадка',
                'фирменный эластичный пояс Calvin Klein',
                '57% хлопок 38% переработанный полиэстер 5% эластан'
            ]
        },
        {
            name: 'Вопросы оплаты',
            text: 'Пользователей в новом приложении ждет обновленный дизайн и улучшенная эргономика приложения. Теперь заряжаться и просматривать необходимую информацию о зарядной сессии стало ещё удобнее. Изменено взаимодействие с пользователем через push-уведомления. Добавлены новые возможности и увеличен функционал. Улучшена скорость и качество работы приложения, теперь запустить сессию можно ещё быстрее. Основным нововведением стала возможность быстрого переключения между способами оплаты.',
            list: [
                'эластичный смесовый хлопок',
                'сделано из переработанных волокон',
                'средняя посадка',
                'фирменный эластичный пояс Calvin Klein',
                '57% хлопок 38% переработанный полиэстер 5% эластан'
            ]
        }
    ]
}

export const Charging = () => {
    const [openDropdown, setOpenDropdown] = useState(1);
    const [videoPlay, setVideoPlay] = useState(false);
    const videoRef = useRef();

    return (
        <main className='charging'>
            <div className='pt-16'>
                <Breadcrumbs link={{ name: 'Как зарядиться', path: 'help' }} />
                <section className='charging__title'>
                    <h2 className='mb-16'>Как зарядить электромобиль</h2>
                    <div>
                        <h4 className='medium'>Для начала сеанса зарядки необходимо использовать приложение Malanka, его можно скачать из App Store или Google Play</h4>
                        <AppLinks />
                    </div>
                </section>
                <div className='instructions-wrapper'>
                    <Instructions title='Зарядка электромобиля в 3 клика' list={instructionsList} />
                </div>
                <div className='block'>
                    <section className='faq-block'>
                        <h3>{faq.title}</h3>
                        <div className='faq-block__list'>
                            {
                                faq.items.map((item, i) => (
                                    <div className={`faq-block__item ${openDropdown === i + 1 ? 'active' : ''}`} key={i}>
                                        <div className='faq-block__item-title' onClick={() => openDropdown === i + 1 ? setOpenDropdown(null) : setOpenDropdown(i + 1)}>
                                            <h4>{item.name}</h4>
                                            <button className='faq-block__button'></button>
                                        </div>
                                        <div className='faq-block__dropdown'>
                                            <p className='regular-text mb-16'>{item.text}</p>
                                            <p className='list-text mb-8'>Подзаголовок</p>
                                            <ul className='mb-16'>
                                                {item.list.map((el, index) => (
                                                    <li className='regular-text' key={index}>{el}</li>
                                                ))}
                                            </ul>
                                            <p className='regular-text'>{item.text}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </section>
                    <section className='video-block'>
                        <h3 className='mb-8'>Видео</h3>
                        <p className='regular-text mb-16'>Пользователей в новом приложении ждет обновленный дизайн и улучшенная эргономика приложения. Теперь заряжаться и просматривать необходимую информацию о зарядной сессии стало ещё удобнее. Изменено взаимодействие с пользователем через push-уведомления. Добавлены новые возможности и увеличен функционал. Улучшена скорость и качество работы приложения, теперь запустить сессию можно ещё быстрее. Основным нововведением стала возможность быстрого переключения между способами оплаты.</p>
                        <div className={`video-block__container ${videoPlay ? 'play' : ''}`}>
                            <video width='100%' height='100%' src='https://joy1.videvo.net/videvo_files/video/free/2019-09/large_watermarked/190828_27_SuperTrees_HD_17_preview.mp4' ref={videoRef} />
                            <button className='play-btn' onClick={() => {
                                if (videoPlay) {
                                    videoRef.current.pause();
                                } else {
                                    videoRef.current.play();
                                }

                                setVideoPlay(!videoPlay)
                            }}>
                                <div className='icon-wrapper'>
                                    <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M34 0.259766C27.3311 0.259766 20.8119 2.23734 15.2669 5.9424C9.72186 9.64746 5.40004 14.9136 2.84795 21.0749C0.29586 27.2362 -0.371884 34.0159 0.929162 40.5567C2.23021 47.0975 5.44161 53.1056 10.1573 57.8213C14.8729 62.5369 20.881 65.7483 27.4218 67.0494C33.9626 68.3504 40.7423 67.6827 46.9036 65.1306C53.0649 62.5785 58.3311 58.2567 62.0361 52.7116C65.7412 47.1666 67.7188 40.6475 67.7188 33.9785C67.7016 25.041 64.1436 16.4745 57.8238 10.1547C51.5041 3.83491 42.9375 0.276904 34 0.259766ZM45.8016 36.1508L30.2391 46.5258C29.8098 46.7914 29.3172 46.9369 28.8125 46.9473C28.3848 46.9469 27.9629 46.847 27.5805 46.6555C27.1658 46.4317 26.82 46.0991 26.58 45.6935C26.3401 45.288 26.2152 44.8247 26.2188 44.3535V23.6035C26.2152 23.1323 26.3401 22.6691 26.58 22.2635C26.82 21.8579 27.1658 21.5254 27.5805 21.3016C27.9968 21.0908 28.4608 20.9919 28.9269 21.0147C29.393 21.0374 29.8452 21.181 30.2391 21.4313L45.8016 31.8063C46.1628 32.042 46.4596 32.364 46.665 32.7433C46.8704 33.1226 46.978 33.5472 46.978 33.9785C46.978 34.4099 46.8704 34.8344 46.665 35.2137C46.4596 35.593 46.1628 35.9151 45.8016 36.1508Z" fill="#F4F4FD" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </section>
                    <section className='callback-form__wrapper'>
                        <div className='callback-form__left'>
                            <h3 className='mb-16'>Остались вопросы?</h3>
                            <p className='regular-text'>Откройте для себя преимущества быстрой зарядки. Быстрая зарядка в городе и на трассах. Современные зарядные станции Mode 4 (CCS Combo 2, CHAdeMO) и Mode 3 </p>
                        </div>
                        <CallbackForm />
                    </section>
                </div>
            </div>
        </main>
    )
}