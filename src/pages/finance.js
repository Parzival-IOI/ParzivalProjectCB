import TopPicture from "../component/Toppicture/Toppicture";
import Card from "../component/Card/Card";
import CardInfo from "../CardInfo"

function Finance () {
    return (
        <div>
            <TopPicture pic="https://business-cambodia.com/cms/assets/87b496ef-ebb7-4085-80b5-84d09176fbf7" text="នាំប្រជាជនខ្មែរ យល់ពីចំណេះដឹងហិរញ្ញវត្ថុ តាមឱ្យទាន់របត់បច្ចេកវិទ្យា" />
            <Card Card={CardInfo} />
        </div>
    )
}

export default Finance;