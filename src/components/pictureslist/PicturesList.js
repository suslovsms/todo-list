import pictures from "../../pictures";
import Card from "../card/card";


export default function PicturesList() {

    const sortedPictures = pictures.slice().sort((a, b) => {
        const dateA = new Date(a.year_of_made.split('.').reverse().join('-'));
        const dateB = new Date(b.year_of_made.split('.').reverse().join('-'));
        return dateA - dateB;
    });

    const picturesCards = 
        sortedPictures.map(picture => <Card pictureData={picture} />);
    return (<div>{picturesCards}</div>);
}
