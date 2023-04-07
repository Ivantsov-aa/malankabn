import { useState } from "react";
import { FlexWrap } from "../../../FlexWrap/FlexWrap"
import { Breadcrumbs } from "../../../breadcrumbs/breadcrumbs"
import { IntegrationContainer, IntegrationListItem, IntegrationListItemBenefit, IntegrationRateButton } from "./Integration.style"
import { CallbackForm } from "../../../callback-form/callback-form";

const rates = [
    {
        title: 'Basic',
        list: [
            'Отображение зарядной станции в мобильном приложении Malanka',
            'Обеспечение взимания платы за услуги по зарядке электромобилей',
            'Самостоятельное управление тарификацией на зарядной станции.'
        ]
    },
    {
        title: 'Comfort',
        list: [
            'Отображение зарядной станции в мобильном приложении Malanka',
            'Обеспечение взимания платы за услуги по зарядке электромобилей',
            'Самостоятельное управление тарификацией на зарядной станции'
        ],
        benefits: [
            'Техподдержка 24/7'
        ]
    },
    {
        title: 'Maximum',
        list: [
            'Отображение зарядной станции в мобильном приложении Malanka',
            'Обеспечение взимания платы за услуги по зарядке электромобилей',
            'Самостоятельное управление тарификацией на зарядной станции.'
        ],
        benefits: [
            'Техподдержка 24/7',
            'Регламентное техобслуживание зарядных станций и текущий ремонт'
        ]
    }
];

const formFields = [
    {
        name: 'name_company',
        type: 'text',
        placeholder: 'Наименование организации *'
    },
    {
        name: 'prn',
        type: 'number',
        placeholder: 'УНП *'
    },
    {
        name: 'contact_name',
        type: 'text',
        placeholder: 'Контактное лицо *'
    },
    {
        name: 'phone_number',
        type: 'text',
        placeholder: 'Телефон *'
    },
    {
        name: 'email',
        type: 'email',
        placeholder: 'Электронная почта *'
    }
];

const formSelect = [
    {name: 'Модель и тип станции', value: 'Модель и тип станции'},
    {name: 'Модель и тип станции', value: 'Модель и тип станции'},
    {name: 'Модель и тип станции', value: 'Модель и тип станции'},
];

export const Integration = () => {
    const [chosenRate, setChosenRate] = useState(0);

    return (
        <IntegrationContainer>
            <Breadcrumbs currentPage='Интеграция зарядных станций в сеть Malanka' />
            <h2>Интеграция зарядных станций в сеть Malanka</h2>
            <FlexWrap className='mb-64' justify='space-between'>
                {rates.map((rate, i) => (
                    <IntegrationRateButton className={chosenRate === i ? 'active' : ''} onClick={() => setChosenRate(i)} key={i}>
                        <FlexWrap direction='column' gap={32}>
                            <h3>Тариф <span>{rate.title}</span></h3>
                            <FlexWrap direction='column' gap={8}>
                                <ul>
                                    {rate.list.map((item, i) => (
                                        <IntegrationListItem key={i}>{item}</IntegrationListItem>
                                    ))}
                                </ul>
                                <ul>
                                    {rate.benefits &&
                                        rate.benefits.map((benefit, i) => (
                                            <IntegrationListItemBenefit key={i}>{benefit}</IntegrationListItemBenefit>
                                        ))
                                    }
                                </ul>
                            </FlexWrap>
                        </FlexWrap>
                    </IntegrationRateButton>
                ))}
            </FlexWrap>
            <FlexWrap direction='column' gap={32}>
                <h3>Заполните форму обратной связи</h3>
                <FlexWrap justify='space-between' gap={64}>
                    <img className='form-cover' src='/images/main-2.png' alt='malanka' />
                    <FlexWrap direction='column' gap={32}>
                        <h4>Тариф {rates[chosenRate].title}</h4>
                        <CallbackForm formFields={formFields} formSelect={formSelect} />
                    </FlexWrap>
                </FlexWrap>
            </FlexWrap>
        </IntegrationContainer>
    )
}