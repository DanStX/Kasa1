import React from 'react';
import { useState } from "react";
const Collapse = ({ title, content}) => {

    const [active, setActive] = useState(false)

    const handleToggle = e => {
        setActive(!active)
    }

    return (
        <div className={`collapse ${active && "active"} `}>
           <h3 className="collapse__title" onClick={handleToggle} >
                {title} 
                <i class='fa fa-chevron-up collapse__icon'></i>
            </h3>
           <div className="collapse__content">{content} </div>
        </div>
    );
};

export default Collapse;