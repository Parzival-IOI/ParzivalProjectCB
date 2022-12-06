import { Link } from "react-router-dom";
import Nav from "../link/navbarInfo";
import dropName from "../link/navdropdown";
import { useRef, useEffect, useState } from "react";
import Scroll from "./Scroll";
import MobileNav from "./Mobile/MobileNav";
import "./Navbar.css";

function Navbar() {
    const [mobileCondition, setMobileCondition] = useState(false);
    const prev = useRef(0);
    const ScrollPosition = Scroll();

    useEffect(() => {
        prev.current = ScrollPosition;
    }, [ScrollPosition]);

    function Mobile() {
        setMobileCondition(b => !b);
        // console.log(`hello`);
    }
    // console.log(ScrollPosition, prev.current);

    // const Top = () => {
    //   if((ScrollPosition) > prev.current) return true;
    //   else if (ScrollPosition < prev.current) return false;
    // }
    // const Setting = () => {
    //   if(ScrollPosition === 0) return true;
    //   else return false;
    // }

    return (
        <nav
            className={`Nav ${ScrollPosition > prev.current ? "top-50" : "top-0"}`}
            
            id={`${ScrollPosition <= 0 ? "" : "active"}`}
        >
            <Link to="/ParzivalProjectCB" className="logo">
                <div></div>
            </Link>
            {Nav.map((item) => {
                return (
                    <Link to={item.url} className={item.cName} key={item.id}>
                        {item.name}
                    </Link>
                );
            })}
            <div className="dropdown">
                <div>ផ្នែកផ្សេងទៀត</div>
                <div
                    className="drop"
                    style={
                        ScrollPosition > prev.current
                            ? ({ display: "none" })
                            : null
                    }
                >
                    {dropName.map((item) => {
                        return (
                            <Link
                                to={item.url}
                                className={item.cName}
                                key={item.id}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
            <div
                onClick={Mobile}
                className="yoo"
                // style={{ width: `100%`, height: `5%`, background: `red`}}
            >
                {mobileCondition ? (
                    <svg
                        className="toggle"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="whitesmoke"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                ) : (
                    <svg
                        className="toggle"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke={ScrollPosition === 0 ? "white" :  "currentColor" }
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                        ></path>
                    </svg>
                )}
            </div>
            {mobileCondition && <MobileNav />}
            <Link to="/Search" className="search">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                </svg>
            </Link>
        </nav>
    );
}
export default Navbar;
