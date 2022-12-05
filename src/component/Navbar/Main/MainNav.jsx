import { React, useState, useEffect } from "react";
import CardInfo from "../../../CardInfo";
import "./MainNav.css";
// import {Link} from 'react-router-dom'

let Background = [];
for (let i = 0; i < 3; i++) {
    Background[i] = CardInfo[i];
}

function MainNav() {
    const [number, setNumber] = useState(0);
    // console.log(number);

    useEffect(() => {
        const interval = setInterval(() => {
            setNumber((prev) => {
                prev++;
                if (prev === 3) prev = 0;
                return prev;
            });
        }, 5000);
        // console.log(`open`);
        return () => {
            // console.log(`closed`);
            return clearInterval(interval);
        };
    }, []);

    return (
        <div className="MainNav" key={Background.id}>
            <img
                src={Background[number].image}
                alt="Background"
                className="MainNavImg"
            />
            <div className="blocker">
                <a href="Par">
                    <h2>{Background[number].title}</h2>
                    <p>
                        {Background[number].userName} • {Background[number].part} • {Background[number].date}
                    </p>
                </a>
                <div className="buttonMain">
                    <a href="Par">បន្តការអាន</a>
                    <a href="Par">អំពីអ្នកនិពន្ធ</a>
                </div>
            </div>
            <div className="animateProgress">
                <div
                    className={number === 0 ? `progress active` : `progress`}
                ></div>
                <div
                    className={number === 1 ? `progress active` : `progress`}
                ></div>
                <div
                    className={number === 2 ? `progress active` : `progress`}
                ></div>
            </div>
        </div>
    );
}

export default MainNav;
