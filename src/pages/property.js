import TopPicture from "../component/Toppicture/Toppicture";
import CardInfo from "../CardInfo"
import Card from "../component/Card/Card";


function Property () {
    return (
        <div>
            <TopPicture pic="https://business-cambodia.com/cms/assets/dbc6c3fb-3963-4f7a-b76c-7f1fc9c32c78" text="បំផុសគំនិតរកស៊ីក្នុងវិស័យអចលនទ្រព្យ និងការវិនិយោគ" />
            <Card Card={CardInfo}/>
        </div>
    )
}

export default Property;