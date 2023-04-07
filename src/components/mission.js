import { Breadcrumbs } from "./breadcrumbs/breadcrumbs"
import { Instructions } from "./instructions/instructions"

const instructionsList = [
    {
        text: 'Откройте приложение MALANKA NEW на смартфоне',
        path: './images/charging/charging-1.png'
    },
    {
        text: 'Наведите камеру на QR-код на станции зарядки либо введите номер зарядной станции',
        path: './images/charging/charging-2.png'
    },
    {
        text: 'Запустите процесс зарядки',
        path: './images/charging/charging-3.png'
    }
];

export const Mission = () => {
    return (
        <main className='mission'>
            <div className='pt-16'>
                <Breadcrumbs link={{ name: 'Миссия', path: 'our-mission' }} />
                <div className='block'>
                    <div className='mission__title mb-32'>
                        <h2>Миссия</h2>
                        <p>
                            Malanka это будущее, которое мы создаём сегодня. Мы быстро и просто заправим Ваш электромобиль. В динамике развития технологий, время является важнейшей ценностью. Всего 10 минут, несколько кликов в вашем смартфоне необходимо сегодня, для пополнения запаса хода в 300 километров. И это только начало…
                        </p>
                    </div>
                    <div className='mission__banner-video'>
                        <div className='mission__banner-text'>
                            <h1>Супербыстрая зарядка</h1>
                            <h3>10 мин. + 300 км</h3>
                        </div>
                        <video width='100%' height='100%' src='https://joy1.videvo.net/videvo_files/video/free/2019-09/large_watermarked/190828_27_SuperTrees_HD_17_preview.mp4' loop autoPlay />
                    </div>
                    <Instructions title='Зарядка в 3 клика' list={instructionsList} subtitle='Сейчас чтобы зарядить свой электромобиль вам нужно всего три клика в смартфоне' />
                </div>
            </div>
        </main>
    )
}