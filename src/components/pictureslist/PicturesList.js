import pictures from "../../pictures";
import Card from "../card/card";


export default function PicturesList(){
    const picturesCards = 
        pictures.map(picture => <Card pictureData={picture}/>);
    return (<div>{picturesCards}</div>);
}