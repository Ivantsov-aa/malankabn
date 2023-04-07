import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const generateId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}

export const HeaderDropdown = ({ burgerRef, dropdownRef, setDropdownState }) => {
    const [dropdownCategories, setDropdownCategories] = useState([
        {
            id: generateId(),
            title: 'Зарядка электромобиля',
            type: 'web',
            selected: false,
            subcategories: [
                {
                    id: generateId(),
                    name: 'Личный кабинет',
                    path: '/'
                },
                {
                    id: generateId(),
                    name: 'Стоимость зарядки',
                    path: '/'
                },
                {
                    id: generateId(),
                    name: 'Помогаем зарядится / Впервые тут?',
                    path: '/'
                },
                {
                    id: generateId(),
                    name: 'Скачать приложение для зарядки',
                    path: '/'
                },
            ]
        },
        {
            id: generateId(),
            title: 'Решения для бизнеса',
            type: 'web',
            selected: false,
            subcategories: [
                {
                    id: generateId(),
                    name: 'Для юридических лиц',
                    path: '/individual'
                },
                {
                    id: generateId(),
                    name: 'Стать партнером',
                    path: '/'
                },
                {
                    id: generateId(),
                    name: 'Рекламные возможности',
                    path: '/'
                },
            ]
        },
        {
            id: generateId(),
            title: 'Маланка',
            type: 'web',
            selected: false,
            subcategories: [
                {
                    id: generateId(),
                    name: 'Миссия',
                    path: '/our-mission'
                },
                {
                    id: generateId(),
                    name: 'Новости',
                    path: '/news'
                },
                {
                    id: generateId(),
                    name: 'Калькулятор экономии',
                    path: '/'
                },
                {
                    id: generateId(),
                    name: 'Свяжитесь с нами',
                    path: '/contact-us'
                },
            ]
        },
        {
            id: generateId(),
            title: 'Карта ЗЭС',
            type: 'mobile',
            selected: false,
            subcategories: [
                {
                    id: generateId(),
                    name: 'Минск',
                    path: '/'
                },
                {
                    id: generateId(),
                    name: 'Гомель',
                    path: '/'
                },
                {
                    id: generateId(),
                    name: 'Гродно',
                    path: '/'
                },
                {
                    id: generateId(),
                    name: 'Брест',
                    path: '/'
                },
                {
                    id: generateId(),
                    name: 'Витебск',
                    path: '/'
                },
                {
                    id: generateId(),
                    name: 'Могилев',
                    path: '/'
                },
            ]
        }
    ]);

    useEffect(() => {
        window.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        }
    }, [])

    const handleClickOutside = (e) => {
        if (dropdownRef.current && !burgerRef.current.contains(e.target) && !dropdownRef.current.contains(e.target)) {
            setDropdownState(false);
            document.body.classList.remove('scroll-disable');
        }
    }

    const handleCategoriesClick = (id) => {
        const activeCategory = dropdownCategories.map(category => (
            category.id === id ? { ...category, selected: !category.selected } : { ...category, selected: false }
        ));

        setDropdownCategories(activeCategory);
    }

    return (
        <>
            <div className='dropdown__side left'>
                {
                    dropdownCategories.map(category => (
                        window.innerWidth > 1024 ?
                            category.type === 'web' && <div className={`dropdown__col ${category.selected ? 'active' : ''}`} key={category.id}>
                                <h6 onClick={() => handleCategoriesClick(category.id)}>{category.title}</h6>
                                <ul className='subcategories__list'>
                                    {category.subcategories.map(subcat => (
                                        <li key={subcat.id}><Link to={subcat.path} onClick={() => {
                                            setDropdownState(false)
                                            document.body.classList.remove('scroll-disable');
                                        }}>{subcat.name}</Link></li>
                                    ))}
                                </ul>
                            </div>
                            :
                            <div className={`dropdown__col ${category.selected ? 'active' : ''}`} key={category.id}>
                                <h6 onClick={() => handleCategoriesClick(category.id)}>{category.title}</h6>
                                <ul className='subcategories__list'>
                                    {category.subcategories.map(subcat => (
                                        <li key={subcat.id}><Link to={subcat.path} onClick={() => {
                                            setDropdownState(false)
                                            document.body.classList.remove('scroll-disable');
                                        }}>{subcat.name}</Link></li>
                                    ))}
                                </ul>
                            </div>
                    ))
                }
            </div>
            <div className='dropdown__side right'>
                <a href='#'>BY</a>
                <a href='#' className='active'>RU</a>
                <a href='#'>EN</a>
            </div>
        </>
    )
}