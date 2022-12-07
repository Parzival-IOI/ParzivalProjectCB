import TopPicture from "../component/Toppicture/Toppicture";
import Card from "../component/Card/Card";
import CardInfo from "../CardInfo"

function Tech () {
    return (
        <div>
            <TopPicture pic="https://business-cambodia.com/cms/assets/8207bd14-04e2-498e-a988-bb22c1000397" text="បំផុសគំនិតរកស៊ីលើរបរបច្ចេកវិទ្យាថ្មីៗ មិនទាន់មាននៅស្រុកខ្មែរ" />
            <Card Card={CardInfo} />
        </div>
    )
}

export default Tech;