import { useEffect } from "react";
import { useSelector } from "react-redux"
import { Outlet, redirect, useNavigate } from "react-router-dom";
import { Footer } from "../../footer";
import { Header } from "../../header";
import { AdminPanelStyled } from "../AdminPanel/AdminPanel.style";
import { AdminSidebar } from "../AdminSidebar/AdminSidebar";

export const AdminPanel = () => {
    const { isLogged, userInfo } = useSelector(store => store.authAdmin);
    const navigate = useNavigate();

    console.log(isLogged);

    useEffect(() => {
        if (!isLogged) {
            navigate('/admin');
            return;
        }
    }, [])

    return (
        userInfo &&
        <AdminPanelStyled>
            <Outlet />
            <AdminSidebar userInfo={userInfo} />
        </AdminPanelStyled>
    )
}