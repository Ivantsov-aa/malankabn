import { Breadcrumbs } from "./breadcrumbs/breadcrumbs"
import { NewsContent } from "./news/news-content"
import { NewsTitle } from "./news/news-title"

export const News = (props) => {
    return (
        <main>
            <div className='pt-16'>
                <Breadcrumbs link={{ name: 'Новости', path: 'news' }} />
                <NewsTitle />
                <NewsContent {...props} />
            </div>
        </main>
    )
}