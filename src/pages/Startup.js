import TopPicture from "../component/Toppicture/Toppicture"
import CardInfo from "../CardInfo"
import Card from "../component/Card/Card";

function Startup () {
    return (
        <div>
            <TopPicture pic="https://business-cambodia.com/cms/assets/2a73c151-2cd8-45a3-b2ae-da99988606dd" text="នាំមនុស្សស្រមៃឱ្យធំ ចាប់ផ្តើមឱ្យតូច ពង្រីកឱ្យធំ "/>
            <Card Card={CardInfo} />
        </div>
    )
}

export default Startup;