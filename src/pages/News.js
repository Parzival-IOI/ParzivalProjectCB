import TopPicture from "../component/Toppicture/Toppicture";
import Card from "../component/Card/Card";
import CardInfo from "../CardInfo"

function News () {
    return (
        <div>
            <TopPicture text="បំផុសសកម្មភាពអាជីវកម្មថ្មីៗទាំងនៅក្នុងស្រុក និងក្រៅស្រុក " pic="https://business-cambodia.com/cms/assets/8812fd3e-50da-4b00-bd05-66a20b3f8241"/>
            <Card Card={CardInfo} />
        </div>
    )
}

export default News;