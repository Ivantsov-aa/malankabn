import { useState } from "react"
import { useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";

import Button from "../../Button/button";
import { Input } from "../../Input/Input"
import { AdminSettingsContainer, AdminSettingsNewUser, AdminSettingsPassword } from "./AdminSettings.style"

export const AdminSettings = () => {
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const { register, handleSubmit, control, formState: { errors } } = useForm();

    const { token } = useSelector(store => store.authAdmin.userInfo);

    const handleChangePassword = async (e, data) => {
        console.log(data);
        // await fetch('http://92.53.127.30:8080/malanka/admin', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': `Bearer ${token}`
        //     },
        //     body: JSON.stringify(data)
        // })

        //     .then(response => response.json())
        //     .then(result => console.log(result))
    }

    return (
        <AdminSettingsContainer>
            <h1>Настройки</h1>
            <h4>Сменить пароль</h4>
            <AdminSettingsPassword>
                <Input
                    type='password'
                    placeholder='Введите пароль'
                    {...register('oldPassword')}
                />
                <Input type='password' placeholder='Введите пароль' name='newPassword' ref={register} />
                {/* <Input
                    type='password'
                    placeholder='Повторите пароль'
                /> */}
                < Button primary>Подтвердить пароль</Button>
            </AdminSettingsPassword>
            <h4>Добавить нового администратора</h4>
            <AdminSettingsNewUser onSubmit={handleSubmit(handleChangePassword)}>
                <Input placeholder='Логин' type='text' />
                <Input
                    placeholder='E-mail'
                    name='email'
                    type='text'
                    {...register('email', {
                        required: "email required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,64}$/gi,
                            message: "Please enter a valid email"
                        }
                    })}
                />
                {errors.email && <p>{errors.email.message}</p>}
                <Input placeholder='Фамилия' type='text' />
                <Input placeholder='Имя' type='text' />
                <Input placeholder='Отчество' type='text' />
                <Input placeholder='Пароль' type='password' />
                <Input placeholder='Повторите пароль' type='password' />
                <Button primary>Добавить</Button>
            </AdminSettingsNewUser>
        </AdminSettingsContainer>
    )
}