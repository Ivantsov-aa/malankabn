export const PriceTableCol = ({ title, power, listOfBenefits, listOfExpenses }) => {
    return (
        <section className='price-page__table-col'>
            <div className='price-page__table-row'>
                <div>
                    <h4 className='mb-32'>{title}</h4>
                    <h3>{power}</h3>
                </div>
                <span className='green-line'></span>
                <ul className='icon-point'>
                    {listOfBenefits.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className='price-page__table-row'>
                <p>Регламентное техническое обслуживание зарядных станций и текущий ремонт</p>
                {listOfExpenses.map((el, i) => (
                    <div className='flex-wrapper' key={i}>
                        <h4>
                            {el.power}
                        </h4>
                        <div>
                            <h6>{el.title}</h6>
                            <p><span>Power</span>{el.watt}</p>
                            <p>{el.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}