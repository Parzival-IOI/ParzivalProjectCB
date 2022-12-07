import TopPicture from "../component/Toppicture/Toppicture";
import Card from "../component/Card/Card";
import CardInfo from "../CardInfo"

function Topic () {
    return (
        <div>
            <TopPicture pic="https://business-cambodia.com/cms/assets/01d48038-e3d0-4cea-9c57-562439f6ae1b" text="ជួយឱ្យសេវាកម្ម ផលិតផល និងយីហោរបស់លោកអ្នក ទៅដល់ដៃអតិថិជនលឿនបំផុត" />
            <Card Card={CardInfo} />
        </div>
    )
}

export default Topic;