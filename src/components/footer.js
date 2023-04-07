import { Link } from "react-router-dom"

const payMethods = [
    '/images/pay/visa.png',
    '/images/pay/visa-secure.png',
    '/images/pay/mastercard.png',
    '/images/pay/id-check.png',
    '/images/pay/belkart.png',
    '/images/pay/belkart-ip.png',
    '/images/pay/be-paid.png'
]

export const Footer = () => {
    return (
        <footer>
            <div className='footer__wrapper'>
                <div className='footer__row'>
                    <div className='footer__col'>
                        <Link to='/' className='logo__wrapper'>
                            <img src='/images/svg/logo.svg' alt='logo' />
                        </Link>
                        <div className='footer__contacts'>
                            <a href='mailto:malanka@beloil.by'>malanka@beloil.by</a>
                            <select>
                                <option>+375 29 6-431-431</option>
                                <option>+375 29 6-431-431</option>
                                <option>+375 29 6-431-431</option>
                            </select>
                        </div>
                        <div className='social-links'>
                            <a href='#'><img src='/images/svg/telegram.svg' /></a>
                            <a href='#'><img src='/images/svg/instagram.svg' /></a>
                        </div>
                    </div>
                    <div className='footer__col'>
                        <h6>Зарядка электромобиля</h6>
                        <ul>
                            <li><a href='#'>Личный кабинет</a></li>
                            <li><a href='#'>Стоимость зарядки</a></li>
                            <li><a href='#'>Помогаем зарядится</a></li>
                            <li><a href='#'><b>Скачать приложение для зарядки</b></a></li>
                        </ul>
                    </div>
                    <div className='footer__col'>
                        <h6>Решения для бизнеса</h6>
                        <ul>
                            <li><a href='#'>Зарядная карта</a></li>
                            <li><a href='#'>Стать партнером</a></li>
                            <li><a href='#'>Рекламные возможности</a></li>
                        </ul>
                    </div>
                    <div className='footer__col'>
                        <h6>Маланка</h6>
                        <ul>
                            <li><a href='#'>Миссия</a></li>
                            <li><a href='#'>Новости</a></li>
                            <li><a href='#'>Свяжитесь с нами</a></li>
                        </ul>
                    </div>
                    <div className='footer__col'>
                        <h6>Карта ЗЭС</h6>
                        <ul>
                            <li><a href='#'>Минск</a></li>
                            <li><a href='#'>Гомель</a></li>
                            <li><a href='#'>Гродно</a></li>
                            <li><a href='#'>Брест</a></li>
                            <li><a href='#'>Витебск</a></li>
                            <li><a href='#'>Могилев</a></li>
                        </ul>
                    </div>
                </div>
                <div className='footer__row'>
                    <div className='footer__caption'>
                        <p>© MALANKA 2023</p>
                        <a href='#'>Политика конфиденциальности</a>
                        <a href='#'>Информация о cookies</a>
                        <a href='#'>Дизайн и разработка сайта: Media Line</a>
                    </div>
                    <div className='footer__caption pay-methods'>
                        {payMethods.map((item, i) => (
                            <img src={item} alt='pay-method' key={i} />
                        ))}
                    </div>
                </div>
                <div className='footer__row'>
                    <span>
                        Режим работы Центрального аппарата РУП «Производственное объединение «Белоруснефть»
                        с 08.00 до 17.00, обеденный перерыв – 12.00 – 13.00
                    </span>
                    <span>Государственное производственное объединение «Белоруснефть»
                        Адрес: ул. Рогачевская, 9, г. Гомель, 246003,
                        Республика Беларусь
                    </span>
                    <span>
                        Регистрация: Гомельоблисполком от 23.03.2005
                        (Н.А. Протосовицкий) УНП 400051902 ОКПО 00137012
                        BY10 BPSB 3012 1111 1123 7933 0000 белорусские рубли
                        ОАО «БПС-Сбербанк» БИК BPSBBY2X
                    </span>
                </div>
            </div>
        </footer>
    )
}