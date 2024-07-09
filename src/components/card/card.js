export default function Card({pictureData}){
    if(!pictureData.is_done) return null;
    return (
        <div style={{
            padding: "20px",
            background: "#D8E6EF",
            borderRadius: "5px",
            color: "#4406"
        }}>
            <h2>{pictureData.title}</h2>
            <div>
                <img src={pictureData.path}
                alt={pictureData.title}/>
            </div>
            <p> Год выпуска {pictureData.year_of_made} <br/> Дата завершения работ {pictureData.end_date}</p>
            <p>Стоимость {pictureData.price > 100000 ? 
                " необходимо уточнить у продовца" : pictureData.price}
            </p>
            <p> Made by {pictureData.masters} <br/> {pictureData.description}</p>
            <button>Заказать</button>
        </div>
    )
    }


function sortByPrice({pictureData}){
    const sortedList = [];
    let i
    while(i=0, i<=pictureData.price.lenth, i++){
        
    }
}
