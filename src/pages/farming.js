import TopPicture from "../component/Toppicture/Toppicture";
import Card from "../component/Card/Card";
import CardInfo from "../CardInfo"

function Farming () {
    return (
        <div>
            <TopPicture pic="https://business-cambodia.com/cms/assets/1ec46f45-409b-4189-8a54-0e7454e62249" text="បំផុសគំនិតរកស៊ីក្នុងវិស័យកសិកម្ម ឱ្យត្រូវទីផ្សារ និងអាចនាំចេញបាន" />
            <Card Card={CardInfo} />
        </div>
    )
}

export default Farming;