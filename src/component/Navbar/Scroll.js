import { useState, useEffect } from "react";

const Scroll = () => {
    const [position, setPosition] = useState(0);

    useEffect(() => {
        const updateposition = () => {
            setPosition(window.pageYOffset);
        };

        window.addEventListener('scroll', updateposition);

        return () => window.removeEventListener('scroll', updateposition);
    }, []);

    return position;
}

export default Scroll;