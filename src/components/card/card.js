export default function Card({pictureData}){
    if(!pictureData.enable) return null;
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
            <p>{pictureData.price > 100000 ? 
                "Стоимость необходимо уточнить у продовца" : pictureData.price}
            </p>
            <button>Заказать</button>
        </div>
    )
}