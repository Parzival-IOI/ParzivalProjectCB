import { Link } from "react-router-dom";
import Nav from "../../link/navbarInfo";
import dropName from "../../link/navdropdown";

function Unload() {
    
    return (
    <div className="hellno">
        {Nav.map((item) => {
            return (
                <Link to={item.url} className={"unload"} key={item.id}>
                    {item.name}
                </Link>
            );
        })}
        {dropName.map((item) => {
            return (
                <Link to={item.url} className={"unload"} key={item.id}>
                    {item.name}
                </Link>
            );
        })}
    </div>
    );
}

export default Unload;
