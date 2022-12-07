import TopPicture from "../component/Toppicture/Toppicture";
import Card from "../component/Card/Card";
import CardInfo from "../CardInfo"

function Firesale () {
    return (
        <div>
            <TopPicture pic="https://business-cambodia.com/cms/assets/eea71961-2858-41bb-b741-d4e4085aaf18" text="នាំមនុស្សគិតពីយុទ្ធសាស្រ្តលក់ ក្លាយជាកំពូលអ្នកលក់ឆ្នើម" />
            <Card Card={CardInfo} />
        </div>
    )
}

export default Firesale;