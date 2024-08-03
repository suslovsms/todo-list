import pictures from "../../pictures";
import {EmptyCard} from "../card/card";

    //функция обработчик события
export function handlePictureClick(){
        console.log("clicked")
    }

export function PicturesList() {

    const sortedPictures = pictures.slice().sort((a, b) => {
        const dateA = new Date(a.year_of_made.split('.').reverse().join('-'));
        const dateB = new Date(b.year_of_made.split('.').reverse().join('-'));
        return dateA - dateB;
    });

    const picturesCards = 
        sortedPictures.map(picture => <EmptyCard pictureData={picture} />);
    return (<div>{picturesCards}</div>);
}
