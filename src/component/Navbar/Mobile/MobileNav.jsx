import { Link } from "react-router-dom";
import Nav from "../../link/navbarInfo";
import dropName from "../../link/navdropdown";
import './MobileNav.css'

function Unload(props) {
    
    return (
    <div className="hellno">
        <div className="hellno2">
            {Nav.map((item) => {
                return (
                    <Link to={item.url} className={"unload"} key={item.id} onClick={props.onClick}>
                        {item.name}
                    </Link>
                );
            })}
            {dropName.map((item) => {
                return (
                    <Link to={item.url} className={"unload"} key={item.id} onClick={props.onClick}>
                        {item.name}
                    </Link>
                );
            })}
        </div>
    </div>
    );
}

export default Unload;
