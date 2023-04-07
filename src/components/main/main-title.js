import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux";
import { AppLinks } from "../AppLinks/AppLinks";

const bgImages = [
    '/images/main/first.png',
    '/images/main/second.png',
    '/images/main/third.png',
    '/images/main/fourth.png',
    '/images/main/fifth.png',
    '/images/main/sixth.png',
];

export const MainTitle = () => {
    const [pageContent, setPageContent] = useState('');
    const titleImageRef = useRef();

    const scrollFunc = () => {
        let scrollTop = window.scrollY;
        const { height } = titleImageRef.current.getBoundingClientRect();
        titleImageRef.current.style.transform = `translate(0, -${scrollTop / 5}px) scale(${(((height - (scrollTop / 5)) / height))})`
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollFunc);
        // loadPageTitle();

        return () => {
            window.removeEventListener('scroll', scrollFunc);
        }
    }, []);

    // const loadPageTitle = async () => {
    //     await fetch('http://92.53.127.30:8080/malanka/page/test/60', {
    //         method: 'GET'
    //     })
    //         .then(response => response.json())
    //         .then(result => setPageContent(result.body))
    // }

    return (
        <div className='main__title-wrapper'>
            <section className='main__title'>
                {pageContent ?
                    <section dangerouslySetInnerHTML={{ __html: pageContent }} />
                    :
                    <div className='main__title-text'>
                        <h1 className='mb-16'>Маланка – Ваш способ зарядить электромобиль</h1>
                        <ul className='mb-32'>
                            <li className='list-text'>
                                Зарядка электромобиля. Это очень просто!
                            </li>
                            <li className='list-text'>
                                Как зарядить электромобиль? – Скачать приложение Malanka New.
                            </li>
                            <li className='list-text'>
                                Лучший способ получить доступ к крупнейшей сети зарядных станций для электромобилей.
                            </li>
                            <li className='list-text'>
                                Мобильное приложение Маланка – карта зарядных станций для электромобилей и гарантия того, что зарядка батареи электромобиля будет удобной и безопасной.
                            </li>
                        </ul>
                        <AppLinks />
                    </div>
                }
                <div className='title__image'>
                    <img src='/images/title-bg.png' alt='malanka' ref={titleImageRef} />
                </div>
            </section>
        </div>
    )
}