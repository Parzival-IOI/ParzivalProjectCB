import Ads from "../component/Ads/Ads";
import MainBotton from "../component/MainBottom/MainBotton";
import MainCard from "../component/MainCard/MainCard";
import MainNews from "../component/MainNews/MainNews";
import MainNav from "../component/Navbar/Main/MainNav";



function Main () {
    const Array = [
        {
          id : "Q1",
          part : "#ព័ត៌មានថ្មីៗ",
          show : "https://business-cambodia.com/cms/assets/3d535cee-02dc-49dd-a4b6-7dd24ca9b3db",
          title : "ចេញក្រៅប្រយ័ត្ន! តំបន់សំខាន់៣នេះ នឹងមានភ្លៀងលាយឡំជាមួយផ្គរ រន្ទះ រយៈពេល ១ សប្ដាហ៍ពេញ",
        },
        {
          id : "Q2",
          part : "#ព័ត៌មានថ្មីៗ",
          show : "https://business-cambodia.com/cms/assets/3d535cee-02dc-49dd-a4b6-7dd24ca9b3db",
          title : "ចេញក្រៅប្រយ័ត្ន! តំបន់សំខាន់៣នេះ នឹងមានភ្លៀងលាយឡំជាមួយផ្គរ រន្ទះ រយៈពេល ១ សប្ដាហ៍ពេញ",
        },
        {
          id : "Q3",
          part : "#ព័ត៌មានថ្មីៗ",
          show : "https://business-cambodia.com/cms/assets/3d535cee-02dc-49dd-a4b6-7dd24ca9b3db",
          title : "ចេញក្រៅប្រយ័ត្ន! តំបន់សំខាន់៣នេះ នឹងមានភ្លៀងលាយឡំជាមួយផ្គរ រន្ទះ រយៈពេល ១ សប្ដាហ៍ពេញ",
        }
      ]
    return (
        <div>
            <MainNav/>
            <Ads/>
            <MainNews right={Array}/>
            <MainCard/>
            <MainCard/>
            <MainCard/>
            <MainCard/>
            <MainCard/>
            <MainBotton/>
        </div>
    )
};

export default Main;