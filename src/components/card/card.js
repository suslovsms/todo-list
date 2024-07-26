import cardStyleMain from  "./card.module.css"

export default function Card({pictureData}){
    const cardStyle = pictureData.is_done ? cardStyleMain.cardDisable : cardStyleMain.cardActive
    return (
        <div className={cardStyle}>
            <h2>{pictureData.title}</h2>
            <div>
                <img  className={cardStyleMain.picture}
                src={pictureData.path}
                alt={pictureData.title}/>
            </div>
            <p> Год выпуска {pictureData.year_of_made} <br/> Дата завершения работ {pictureData.end_date}</p>
            <p>Стоимость {pictureData.price > 100000 ? 
                " необходимо уточнить у продовца" : pictureData.price}
            </p>
            <p> Made by {pictureData.masters} <br/> {pictureData.description}</p>
            <button>Заказать</button>
        </div>
    )}


