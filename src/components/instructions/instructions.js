export const Instructions = ({ title, list, subtitle }) => {
    return (
        <section className='instructions'>
            <div className={`instructions__title ${subtitle ? 'mb-64' : 'mb-16'}`}>
                <div>
                    <h3>{title}</h3>
                    {subtitle && <p>{subtitle}</p>}
                </div>
                {subtitle && <button className='btn-green-outline'>Узнать больше</button>}
            </div>
            <ol className='instructions-list'>
                {list.map((item, i) => (
                    <li key={i}>
                        <div>
                            <p>{item.text}</p>
                            <img src={item.path} loading='lazy' alt='instruction-step' />
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    )
}