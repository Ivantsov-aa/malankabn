import { useEffect, useState } from "react";
import { MainBlock } from "./main/main-block"
import { MainMap } from "./main/main-map"
import { MainNews } from "./main/main-news"
import { MainTitle } from "./main/main-title"

const blockContent = {
    first: {
        title: 'В будущее вместе',
        list: [
            'Создать собственную сеть зарядных станций «под ключ»? Ваша станция в сети Маланка? Собственный бизнес по зарядке электромобилей или просто установить зарядную станцию для сотрудников и клиентов? Мы знаем, что и как правильно!',
            'Комплексные пакетные решения по интеграции, организация биллинга, диспетчеризация звонков пользователей ЭЗС и техническое обслуживание. Консалтинг установки станции, оптимальной мощности, окупаемости и больше.',
        ],
        imgPath: '/images/main-1.png',
        link: {
            name: 'Стать партнером',
            path: './partner'
        }
    },
    second: {
        title: 'Магазин безоператорной торговли',
        text: 'Зарядил электромобиль – заряди себя! Способ покупки будущего доступен с Маланка уже сегодня. Безоператорный магазин автономной торговли Malanka shop 247. Для Вас свежий кофе, закуски и все необходимое для пополнения запаса калорий и не только.',
        list: null,
        imgPath: '/images/main-2.png',
        link: {
            name: 'Malanka shop 247',
            path: './shop247'
        }
    }
};

export const Main = () => {
    const [pageContent, setPageContent] = useState('');

    useEffect(() => {
        // loadPageTitle();
    }, []);

    // const loadPageTitle = async () => {
    //     await fetch('http://92.53.127.30:8080/malanka/page/test/63')
    //         .then(response => response.json())
    //         .then(result => setPageContent(result.body))
    // }

    return (
        <main className='main-page'>
            <MainTitle />
            <MainMap />
            <MainBlock {...blockContent.first} />
            {pageContent ?
                pageContent
                :
                <MainNews />
            }
            <MainBlock {...blockContent.second} />
        </main>
    )
}