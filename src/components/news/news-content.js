import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "../pagination/pagination";
import { Select } from "../select/select";
import { newsArray } from '../store/store';
import { monthArray } from '../store/store';

export const NewsContent = ({ innerWidth }) => {
    const [news, setNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortValue, setSortValue] = useState(null);
    const contentRef = useRef();

    useEffect(() => {
        setNews(newsArray);
    }, [])

    const scrollToContentTop = () => {
        const newsContentTop = contentRef.current.getBoundingClientRect().top;

        window.scrollTo({
            top: newsContentTop + window.pageYOffset - 120,
            behavior: 'smooth'
        })
    }

    const handlePrevPage = () => {
        scrollToContentTop();
        setCurrentPage(currentPage - 1);
    }

    const handleNextPage = () => {
        scrollToContentTop();
        setCurrentPage(currentPage + 1);
    }

    const handleChosenPage = (page) => {
        scrollToContentTop();
        setCurrentPage(page);
    }

    const handleSortNews = (action) => {
        if (action.value === 'ascending') {
            const sortNews = news.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
            setNews(sortNews);
        } else if (action.value === 'descending') {
            const sortNews = news.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
            setNews(sortNews);
        }

        setSortValue(action.name);
        setCurrentPage(1);
    }

    return (
        <section className='news-content' ref={contentRef}>
            <div className='news-content__sort-params mb-32'>
                <Select
                    title={sortValue ? sortValue : 'Сортировка'}
                    list={[
                        {
                            name: 'Дата (по возрастанию)',
                            value: 'ascending'
                        },
                        {
                            name: 'Дата (по убыванию)',
                            value: 'descending'
                        }
                    ]}
                    action={handleSortNews}
                />
                <label className='search-bar'>
                    <button>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.8089 16.7481L13.3293 12.2685C14.5494 10.7762 15.1492 8.8721 15.0048 6.94997C14.8604 5.02784 13.9827 3.23475 12.5532 1.9416C11.1238 0.648448 9.25209 -0.0458375 7.32514 0.00235056C5.39819 0.0505386 3.56348 0.837514 2.2005 2.2005C0.837514 3.56348 0.0505386 5.39819 0.00235056 7.32514C-0.0458375 9.25209 0.648448 11.1238 1.9416 12.5532C3.23475 13.9827 5.02784 14.8604 6.94997 15.0048C8.8721 15.1492 10.7762 14.5494 12.2685 13.3293L16.7481 17.8089C16.8912 17.9368 17.0779 18.0051 17.2698 17.9997C17.4617 17.9943 17.6442 17.9157 17.78 17.78C17.9157 17.6442 17.9943 17.4617 17.9997 17.2698C18.0051 17.0779 17.9368 16.8912 17.8089 16.7481ZM7.52433 13.5263C6.33647 13.5268 5.17512 13.175 4.18722 12.5154C3.19931 11.8559 2.42924 10.9181 1.9744 9.82073C1.51957 8.7234 1.40042 7.51581 1.63202 6.35074C1.86363 5.18568 2.43558 4.11547 3.27553 3.27553C4.11547 2.43558 5.18568 1.86363 6.35074 1.63202C7.51581 1.40042 8.7234 1.51957 9.82073 1.9744C10.9181 2.42924 11.8559 3.19931 12.5154 4.18722C13.175 5.17512 13.5268 6.33647 13.5263 7.52433C13.524 9.11546 12.891 10.6408 11.7659 11.7659C10.6408 12.891 9.11546 13.524 7.52433 13.5263Z" fill="#7A7A95" />
                        </svg>
                    </button>
                    <input type='text' placeholder='Введите адрес' />
                    <button className='news-content__filter'>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_907_4436)">
                                <path d="M17.25 14.25H15.2527C14.928 13.1693 13.935 12.375 12.75 12.375C11.565 12.375 10.5728 13.1693 10.2473 14.25H0.749988C0.335988 14.25 0 14.586 0 15C0 15.414 0.335988 15.75 0.749988 15.75H10.2472C10.572 16.8307 11.565 17.625 12.75 17.625C13.935 17.625 14.9272 16.8307 15.2527 15.75H17.25C17.6647 15.75 18 15.414 18 15C18 14.586 17.6647 14.25 17.25 14.25ZM12.75 16.125C12.1297 16.125 11.625 15.6203 11.625 15C11.625 14.3798 12.1297 13.875 12.75 13.875C13.3703 13.875 13.875 14.3798 13.875 15C13.875 15.6203 13.3702 16.125 12.75 16.125Z" fill="#C0C0DB" />
                                <path d="M17.25 2.24999H15.2527C14.9272 1.16925 13.935 0.375 12.75 0.375C11.565 0.375 10.5728 1.16925 10.2472 2.24999H0.749988C0.335988 2.24999 0 2.58598 0 2.99998C0 3.41398 0.335988 3.74996 0.749988 3.74996H10.2472C10.5728 4.83074 11.565 5.62499 12.75 5.62499C13.935 5.62499 14.9273 4.83074 15.2527 3.75H17.25C17.6647 3.75 18 3.41401 18 3.00001C18 2.58601 17.6647 2.24999 17.25 2.24999ZM12.75 4.12498C12.1297 4.12498 11.625 3.62024 11.625 2.99998C11.625 2.37971 12.1297 1.87498 12.75 1.87498C13.3703 1.87498 13.875 2.37971 13.875 2.99998C13.875 3.62024 13.3702 4.12498 12.75 4.12498Z" fill="#C0C0DB" />
                                <path d="M17.25 8.24999H7.75276C7.42725 7.16925 6.435 6.375 5.25002 6.375C4.06505 6.375 3.07276 7.16925 2.74729 8.24999H0.749988C0.335988 8.24999 0 8.58598 0 8.99998C0 9.41398 0.335988 9.74997 0.749988 9.74997H2.74725C3.07276 10.8307 4.06501 11.625 5.24999 11.625C6.43496 11.625 7.42725 10.8307 7.75273 9.74997H17.25C17.6647 9.74997 18 9.41398 18 8.99998C18 8.58598 17.6647 8.24999 17.25 8.24999ZM5.24999 10.125C4.62973 10.125 4.12499 9.62025 4.12499 8.99998C4.12499 8.37972 4.62973 7.87498 5.24999 7.87498C5.87025 7.87498 6.37499 8.37972 6.37499 8.99998C6.37499 9.62025 5.87025 10.125 5.24999 10.125Z" fill="#C0C0DB" />
                            </g>
                            <defs>
                                <clipPath id="clip0_907_4436">
                                    <rect width="18" height="18" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </label>
            </div>
            <div className='news-content__container'>
                {news.slice((currentPage - 1) * (innerWidth < 768 ? 8 : 9), currentPage * (innerWidth < 768 ? 8 : 9)).map(item => {
                    const newsDate = item.date.split('/');
                    const newsDateDay = newsDate[1];
                    const newsDateMonth = monthArray[newsDate[0] - 1];
                    const newsDateYear = newsDate[2];
                    return <Link to={`/news/${item.id}`} className='news-content__block' key={item.id}>
                        <div className='img__wrapper mb-16'>
                            <img src={item.img} alt='news-cover' />
                        </div>
                        <p className='date mb-16'>{`${newsDateDay} ${newsDateMonth}, ${newsDateYear}`}</p>
                        <h5>{item.title}</h5>
                    </Link>
                })}
            </div>
            {news.length && <Pagination pageQuantity={Math.ceil(news.length / (innerWidth < 768 ? 8 : 9))} current={currentPage} handleChosenPage={handleChosenPage} actionPrev={handlePrevPage} actionNext={handleNextPage} />}
        </section>
    )
}