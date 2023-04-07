import { useState } from "react";
import { FlexWrap } from "../../../FlexWrap/FlexWrap"
import { Breadcrumbs } from "../../../breadcrumbs/breadcrumbs"
import { IntegrationListItem, IntegrationListItemBenefit, IntegrationRateButton } from "../Intergation/Integration.style"
import { CallbackForm } from "../../../callback-form/callback-form";
import { WhiteLabelListItemStyled, WhiteLabelListStyled, WhiteLabelStyled } from "./WhiteLabel.style";

const rates = [
    {
        title: 'Консалтинг',
        list: [
            'Опыт логистического обеспечения АЗС с 2006 года',
            'Опыт реализации крупных проектов в сфере ВИЭ',
            'Опыт эксплуатации СНЭЭ в составе супербыстрых зарядных комплексов',
            'Уникальная модель размещения зарядных комплексов и станций',
            'Опыт сотрудничества с международными организациями',
        ]
    },
    {
        title: 'Техкомпетенции',
        list: [
            'Более 9 лет опыта эксплуатации крупнейшей в СНГ зарядной сети',
            'Глубокая интеграция зарядных станций и ПО',
            'Использование ТЗ, соответствующих практике эксплуатации ЭЗС',
            'Постоянное взаимодействие с производителями оборудования',
            'Полное сопровождение: от проектирования до эксплуатации',
        ]
    },
    {
        title: 'ПО',
        list: [
            'Программное обеспечение собственной разработки',
            'Уникальный UX мобильного приложения',
            'Бэкенд для глубокого мониторинга состояния инфраструктуры',
            'Fleet-платформа, модуль субпартнеров и юридических лиц',
            'Гибкая адаптация модулей под потребности пользователей',
        ]
    },
    {
        title: 'Законодательство',
        list: [
            'Указ Президента Республики Беларусь №92 (три редакции)',
            'Программа создания государственной зарядной сети',
            'Комплексная программа развития электротранспорта на 2021-2025 годы',
            'Методические рекомендации по размещению зарядных станций',
            'Банк низкоуглеродных и цифровых технологий ЕАЭС',
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
    {
        name: 'Регион развития сети *',
        value: 'Регион развития сети *'
    },
    {
        name: 'Регион развития сети *',
        value: 'Регион развития сети *'
    },
    {
        name: 'Регион развития сети *',
        value: 'Регион развития сети *'
    }
];

const formRadioBtns = [
    {
        id: 'less_50',
        name: 'quantity',
        value: '50 и менее',
    },
    {
        id: '51_100',
        name: 'quantity',
        value: '51-100',
    },
    {
        id: '101_200',
        name: 'quantity',
        value: '101-200',
    },
    {
        id: '201_500',
        name: 'quantity',
        value: '201-500',
    },
    {
        id: 'more_500',
        name: 'quantity',
        value: 'Более 500',
    },
];

export const WhiteLabel = () => {
    const [chosenRate, setChosenRate] = useState(0);

    return (
        <WhiteLabelStyled>
            <Breadcrumbs currentPage='White Label – создание сети зарядных станций «под ключ»' />
            <div className='wl-title'>
                <h2 className='mb-8'>White Label – создание сети зарядных станций «под ключ»</h2>
                <p className='mb-4'>Электромобили – это уже не просто тренд, а объективная реальность. А собственная зарядная сеть – не просто «зеленый» маркетинг, а коммерчески выгодный проек</p>
                <p>Команда Malanka прошла долгий путь, принимая участие в разработке и внедрении правил функционирования электромобильного рынка в нашей стране, теперь мы готовы помочь Вам!</p>
            </div>
            <WhiteLabelListStyled justify='space-between'>
                {rates.map((rate, i) => (
                    <WhiteLabelListItemStyled direction='column' gap={32}>
                        <div>
                            <h6 className='mb-8'>0{i + 1}</h6>
                            <h4>{rate.title}</h4>
                        </div>
                        <FlexWrap direction='column' gap={8}>
                            <ul>
                                {rate.list.map((item, i) => (
                                    <IntegrationListItem key={i}>{item}</IntegrationListItem>
                                ))}
                            </ul>
                        </FlexWrap>
                    </WhiteLabelListItemStyled>
                ))}
            </WhiteLabelListStyled>
            <FlexWrap className='mt-128' direction='column' gap={32}>
                <FlexWrap justify='space-between' gap={64}>
                    <img className='form-cover' src='/images/main-2.png' alt='malanka' />
                    <FlexWrap direction='column' gap={32}>
                        <FlexWrap direction='column' gap={8}>
                            <h4>Заполните форму обратной связи</h4>
                            <p className='regular-text'>Обеспечение взимания платы за услуги по зарядке элетромобилей на действуюшей или планируемой </p>
                        </FlexWrap>
                        <CallbackForm formFields={formFields} formSelect={formSelect} formRadioBtns={formRadioBtns} />
                    </FlexWrap>
                </FlexWrap>
            </FlexWrap>
        </WhiteLabelStyled>
    )
}