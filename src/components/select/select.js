import { useState } from "react"

export const Select = ({ form, title, list, action }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`select ${form ? 'form' : ''}`}>
            <div
                className={`select__header ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {title}
                <svg width="6" height="11" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.99805 1.11963L11.998 11.1196L1.99805 21.1196" stroke="#101828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            {
                isOpen &&
                <ul className='select__list'>
                    {list.map((item, i) => (
                        <li className='select__list-item' onClick={() => {
                            action(item);
                            setIsOpen(false);
                        }} key={i}>{item.name}</li>
                    ))}
                </ul>
            }
        </div>
    )
}