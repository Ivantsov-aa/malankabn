import { Outlet } from "react-router-dom"
import { Footer } from "../../footer"
import { Header } from "../../header"
import { AdminPagesControl } from "../AdminPagesContol/AdminPagesControl"
import { AdminPanelSiteContainer } from "./AdminPanelSite.style"

export const AdminPanelSite = (props) => {
    return (
        <AdminPanelSiteContainer className='request'>
            <Header />
            <Outlet />
            <AdminPagesControl {...props} />
            <Footer />
        </AdminPanelSiteContainer>
    )
}