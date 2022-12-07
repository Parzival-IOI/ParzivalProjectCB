import TopPicture from "../component/Toppicture/Toppicture";
import Card from "../component/Card/Card";
import CardInfo from "../CardInfo"

function Exhibition () {
    return (
        <div>
            <TopPicture text="នេះជាលើកទី១ហើយដែលចាបក្រហមបង្កើតកម្មវិធីនេះឡើងដើម្បីប្រមូលផ្តុំនូវអាជីវកម្មថ្មីថ្មោង និងសហគ្រិនខ្មែរយើងមកបង្ហាញពីគំនិតដ៏អស្ចារ្យរបស់ពួកគាត់" pic="https://business-cambodia.com/cms/assets/507c173f-1385-4e58-afbb-99e6ad51e85e"/>
            <Card Card={CardInfo} />
        </div>
    )
}

export default Exhibition;