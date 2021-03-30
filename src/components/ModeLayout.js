import { useState } from "react";
import "./styles.css";

const ModeLayout = ({ items }) => {
    const [activeMenu, setActiveMenu] = useState(0);
    return (
        <div className="mode-container">
            <ul>
                {items?.map((item, i) => <li key={i}
                    style={{ backgroundColor: activeMenu === i ? "rgb(158, 153, 153)" : null }}
                    onClick={() => setActiveMenu(i)}>{item}</li>
                )}
            </ul>
        </div>
    )
}
export default ModeLayout;