import React from "react";
import MainNewsCard from "./MainNewsCard";

function MainNews(props) {
    return (
        <>
            <div className="control">
              <div className="name">អត្ថបទពេញនិយមសរុប</div>
              <span><a href="#dgds">មើល​បន្ថែម</a>​</span>
            </div>
            <div className="mainFirstContainer">
                {props.right.map((items) => {
                    return <MainNewsCard really={items} key={items.id} />;
                })}
            </div>
        </>
    );
}

export default MainNews;
