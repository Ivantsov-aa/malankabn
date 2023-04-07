import { Breadcrumbs } from "./breadcrumbs/breadcrumbs"
import { CallbackForm } from "./callback-form/callback-form"

export const ContactUs = () => {
    return (
        <main className='contact-us'>
            <div className='pt-16'>
                <Breadcrumbs link={{ name: 'Свяжитесь с нами', path: 'contact-us' }} />
                <div className='block'>
                    <h2 className='mb-32'>
                        Связаться с нами
                    </h2>
                    <section className='callback-form__wrapper'>
                        <div className='callback-form__left contacts'>
                            <h4 className='mb-16'>Контакты</h4>
                            <div className='flex-wrapper'>
                                <div>
                                    <h6>Телефоны</h6>
                                    <ul className='mb-16'>
                                        <li><a href='tel:+375296431431'>+375 29 6-431-431</a></li>
                                        <li><a href='tel:+375296431431'>+375 29 6-431-431</a></li>
                                        <li><a href='tel:+375296431431'>+375 29 6-431-431</a></li>
                                    </ul>
                                    <a href='mailto:malanka@beloil.by' className='email-link'>malanka@beloil.by</a>
                                </div>
                                <div>
                                    <div className='mb-32'>
                                        <h6>Адрес</h6>
                                        <p>ул. Рогачевская, 9, г. Гомель, 246003, Республика Беларусь</p>
                                    </div>
                                    <div>
                                        <h6>Режим работы </h6>
                                        <p>с 08:00 до 17:00</p>
                                        <p className='break-time'>перерыв  12:00 – 13:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <CallbackForm />
                    </section>
                </div>
            </div>
        </main>
    )
}