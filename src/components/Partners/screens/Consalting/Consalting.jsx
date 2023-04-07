import { useState } from "react";
import { FlexWrap } from "../../../FlexWrap/FlexWrap"
import { Breadcrumbs } from "../../../breadcrumbs/breadcrumbs"
import { IntegrationContainer, IntegrationListItem, IntegrationListItemBenefit, IntegrationRateButton } from "../Intergation/Integration.style"
import { CallbackForm } from "../../../callback-form/callback-form";

const rates = [
    {
        title: 'S',
        list: [
            'Анализ локации и выбор наиболее перспективных вариантов',
            'Оценка оптимального типа станций и их количества',
            'Технико-экономическое обоснование'
        ]
    },
    {
        title: 'M',
        list: [
            'Анализ локации и выбор наиболее перспективных вариантов',
            'Оценка оптимального типа станций и их количества',
            'Технико-экономическое обоснование'
        ],
        benefits: [
            'ТЗ на закупку зарядных станций, ПИР; СМР, программное обеспечение, техобслуживание'
        ]
    },
    {
        title: 'L',
        list: [
            'Анализ локации и выбор наиболее перспективных вариантов',
            'Оценка оптимального типа станций и их количества',
            'Технико-экономическое обоснование'
        ],
        benefits: [
            'ТЗ на закупку зарядных станций, ПИР; СМР, программное обеспечение, техобслуживание',
            'Проектирование и установка ЭЗС'
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

const formCheckbox = [
    {
        name: 'tz_ezs',
        value: 'ТЗ на ЭЗC',
    },
    {
        name: 'tz_smr',
        value: 'ТЗ на  СМР',
    },
    {
        name: 'tz_po',
        value: 'ТЗ на  ПО',
    },
    {
        name: 'tz_to',
        value: 'ТЗ на  ТО',
    },
    {
        name: 'tz_pir',
        value: 'ТЗ на ПИР',
    },
    {
        name: 'design',
        value: 'Проектирование',
    },
    {
        name: 'ezs_install',
        value: 'Установка ЭЗС',
    }
];

export const Consalting = () => {
    const [chosenRate, setChosenRate] = useState(0);

    return (
        <IntegrationContainer>
            <Breadcrumbs currentPage='Консалтинг по зарядной инфраструктуре' />
            <h2>Консалтинг по зарядной инфраструктуре</h2>
            <FlexWrap className='mb-64' justify='space-between'>
                {rates.map((rate, i) => (
                    <IntegrationRateButton className={chosenRate === i ? 'active' : ''} onClick={() => setChosenRate(i)} key={i}>
                        <FlexWrap direction='column' gap={32}>
                            <h3><span>{rate.title}</span> Тариф</h3>
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
                        <CallbackForm formFields={formFields} formCheckbox={chosenRate !== 0 && (chosenRate === 1 ? formCheckbox.slice(0, formCheckbox.length - 2) : formCheckbox)} />
                    </FlexWrap>
                </FlexWrap>
            </FlexWrap>
        </IntegrationContainer>
    )
}