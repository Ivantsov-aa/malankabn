import { Link } from "react-router-dom";

export const Breadcrumbs = ({ link, currentPage }) => {
    return (
        <div className='breadcrumbs'>
            <Link to='/'>Главная</Link>
            {link && <Link to={`/${link.path}`}>{link.name}</Link>}
            {currentPage && <span>{currentPage}</span>}
        </div>
    )
}