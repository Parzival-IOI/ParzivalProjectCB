import React from "react";
import MainCardCard from "./MainCardCard";
import "./MainCard.css";

const items = [
  {
      id: "c1",
      part: "#ព័ត៌មានថ្មីៗ",
      image: "https://business-cambodia.com/cms/assets/3d535cee-02dc-49dd-a4b6-7dd24ca9b3db",
      title: "ចេញក្រៅប្រយ័ត្ន! តំបន់សំខាន់៣នេះ នឹងមានភ្លៀងលាយឡំជាមួយផ្គរ រន្ទះ រយៈពេល ១ សប្ដាហ៍ពេញ",
      profile:
          "https://business-cambodia.com/cms/assets/20cd5fb7-2809-4e7e-b2d6-1f1382be32cb",
      userName: "Bunthoeun Koem",
      date: "NOVEMBER 8 2022",
      view: "2.6 K views",
  },
  {
      id: "c2",
      part: "#ព័ត៌មានថ្មីៗ",
      image: "https://business-cambodia.com/cms/assets/7923a567-1ff0-45dc-a7f3-c02562815aff",
      title: "Pleng ចូលរួមធ្វើ បទ«វីរភាពកីឡា» ជាមួយតារាធំៗ គាំទ្រការប្រកួតកីឡាជាតិ លើកទី3",
      profile:
          "https://business-cambodia.com/cms/assets/ffd59a1c-9063-4038-b1c7-696e4ffdf24a",
      userName: "Sopheak Pich",
      date: "NOVEMBER 5 2022",
      view: "181 views",
  },
  {
      id: "c3",
      part: "#ព័ត៌មានថ្មីៗ",
      image: "https://business-cambodia.com/cms/assets/4739cfcd-3d64-4280-818d-793da2df59d7",
      title: "អ្នកចេញ-ចូលភ្នំពេញត្រូវដឹង! ថ្ងៃទី១០-១៣ វិច្ឆិកា គ្រប់យានយន្ដធ្វើចរាចរលើវិថីធំៗទាំងនេះត្រូវបង្វែរទៅផ្លូវផ្សេង",
      profile:
          "https://business-cambodia.com/cms/assets/20cd5fb7-2809-4e7e-b2d6-1f1382be32cb",
      userName: "Bunthoeun Koem",
      date: "NOVEMBER 5 2022",
      view: "100.7 K view",
  },
];

const MainCard = () => {
    

    return (
        <div className="mainWrap">
            <div className="mainTitle">
                <p>អត្ថបទពេញនិយមប្រចាំខែ</p>
                <a href="#sdf">មើល​បន្ថែម​</a>
            </div>
            <div className="mainCardWrapper">
                <div className="mainCardWrap">
                    {items.map((item) => {
                        return <MainCardCard item={item} key={item.id} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default MainCard;
