import TopPicture from "../component/Toppicture/Toppicture";
import Card from "../component/Card/Card";
import CardInfo from "../CardInfo"

function Leadership () {
    return (
        <div>
            <TopPicture pic="https://business-cambodia.com/cms/assets/84756cab-d307-474f-bd21-8060b0fb1220" text="បំផុសគំនិតក្នុងការដឹកនាំ នាំមនុស្សធម្មតា ក្លាយជា CEO ឆ្នើម" />
            <Card Card={CardInfo} />
        </div>
    )
}

export default Leadership;