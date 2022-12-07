import TopPicture from "../component/Toppicture/Toppicture";
import Card from "../component/Card/Card";
import CardInfo from "../CardInfo"

function Sheet () {
    return (
        <div>
            <TopPicture pic="https://business-cambodia.com/cms/assets/64139108-0b41-4618-b553-47c655096f13" text="របាយការណ៍ របាយការណ៍មានតម្លៃបំផុត ដែលលោកអ្នកមិនអាចខ្វះបាន " />
            <Card Card={CardInfo} />
        </div>
    )
}

export default Sheet;