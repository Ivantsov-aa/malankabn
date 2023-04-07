import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Button from "../../Button/button"
import { Input } from "../../Input/Input"
import { AuthForm, AuthWrap } from "../AuthForm/AuthForm.style"
import { handleLogIn } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux"
import { NotificationPopUp } from "../../NotificationPopUp/NotificationPopUp"

export const Authorization = () => {
    const [loginValue, setLoginValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        navigate(`/admin/superadmin`);
        dispatch(handleLogIn({ userInfo: { username: 'superadmin', token: 'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NzgwMzE5ODEsImV4cCI6MTY3ODQ1MTk4MSwic3ViIjoiYWRtaW4iLCJBdXRob3JpdGllcyI6IlJPTEVfQURNSU4ifQ.FqwQOzfwTo_T-zYgBNtZ08s4OGVq4bP2Pc_EhbLfQr4' }, isLogged: true }));


        // await fetch('http://92.53.127.30:8080/malanka/authorize', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         username: loginValue,
        //         password: passwordValue
        //     })
        // })
        //     .then(response => response.json())
        //     .then(result => {
        //         console.log(result);
        //         if (!result.message) {
        //             navigate(`/admin/${result.username}`);
        //             dispatch(handleLogIn({ userInfo: result, isLogged: true }));
        //         } else {
        //             setError({ icon: './images/svg/error-icon.svg', description: result.message });
        //         }
        //     })
    }

    return (
        <AuthWrap>
            <AuthForm onSubmit={onSubmit}>
                <Link to='/'>
                    <img src='./images/svg/logo.svg' alt='logo' />
                </Link>
                <h1>Авторизация</h1>
                <div>
                    <Input type='text' placeholder='Логин' value={loginValue} onChange={(e) => setLoginValue(e.target.value)} />
                    <Input type='text' placeholder='Пароль' value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} />
                </div>
                <Button type='submit' primary>Войти</Button>
            </AuthForm>
            {error &&
                <NotificationPopUp
                    {...error}
                    onClick={() => setError(null)}
                />
            }
        </AuthWrap>
    )
}