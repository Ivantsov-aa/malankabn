import { FlexWrap } from "../FlexWrap/FlexWrap"
import { Breadcrumbs } from "../breadcrumbs/breadcrumbs"
import { Shop247Styled } from "./Shop247.style"

const principles = [
    'Регистрация клиента - клиент регистрируется в мобильном приложении Malanka Shop, вводя свои данные и привязывая свою банковскую карту.',
    'Вход в магазин - клиент сканирует QR - код на входе в магазин, используя свой смартфон.',
    'Выбор товаров - клиент выбирает нужные товары, сканируя их с помощью мобильного приложения или просто берет их со стеллажей.',
    'Оплата - после того как клиент выбрал все нужные товары, оплата происходит автоматически с использованием привязанной карточки.',
    'Выход из магазина - после оплаты клиент может покинуть магазин сразу, не стоя в очереди и не общаясь с продавцами.',

];

export const Shop247 = () => {
    return (
        <Shop247Styled>
            <Breadcrumbs currentPage='Malanka Shop 247' />
            <h2>Malanka Shop 247</h2>
            <h5 className='mb-32'>Магазин без кассира - это автоматизированный магазин, который использует технологии искусственного интеллекта, компьютерного зрения и машинного обучения для обеспечения покупателям быстрой и удобной покупки без очередей и кассиров.</h5>
            <FlexWrap className='mb-32' direction='column' gap={8}>
                <p className='regular-text'>Принцип работы магазина без кассира основан на следующих шагах:</p>
                <ol>
                    {principles.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ol>
            </FlexWrap>
            <FlexWrap direction='column' gap={32}>
                <h3>Инструкция по использованию </h3>
            </FlexWrap>
        </Shop247Styled>
    )
}