import { Link } from "react-router-dom"
import { Select } from "../select/select"
import { FlexWrap } from "../FlexWrap/FlexWrap"

export const CallbackForm = ({ formFields, formSelect, formCheckbox, formRadioBtns }) => {
    return (
        <form className='callback-form'>
            {!formFields ?
                <>
                    <input type='text' placeholder='Ваше имя' />
                    <input type='text' placeholder='Электронная почта' />
                </>
                :
                formFields.map((field, i) => (
                    <input name={field.name} type={field.type} placeholder={field.placeholder} key={i} />
                ))
            }
            {formSelect &&
                <Select form title={formSelect[0].name} list={formSelect} />
            }
            {formRadioBtns &&
                <FlexWrap direction='column'>
                    <p className='regular-text medium'>Предполагаемое кол-во станций в сети *</p>
                    <FlexWrap className='radio-btns' gap={24}>
                        {formRadioBtns.map((item, i) => (
                            <>
                                <input id={item.id} type='radio' name={item.name} value={item.value} key={i} />
                                <label className='radio' htmlFor={item.id}>
                                    <span className='regular-text medium'>{item.value}</span>
                                </label>
                            </>
                        ))}
                    </FlexWrap>
                </FlexWrap>
            }
            <textarea placeholder='Комментарий' maxLength='150' />
            {formCheckbox && <FlexWrap className='checkbox-btns' gap={24} wrap>
                {formCheckbox.map((item, i) => (
                    <>
                        <input id={item.name} type='checkbox' name={item.name} value={item.value} key={i} />
                        <label htmlFor={item.name}>
                            {item.value}
                        </label>
                    </>
                ))}
            </FlexWrap>}
            <input type='checkbox' id='personal-agreement' />
            <label htmlFor='personal-agreement'>
                <span>Я даю согласие на обработку <Link to='/'>Персональных данных</Link></span>
            </label>
            <button className='btn-green'>Отправить</button>
        </form>
    )
}