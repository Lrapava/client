import React from "react";
import '../css/tagbox.css'

export default function Tagbox({name, onChange}) {
    function onClick() {
        onChange(name);
    }
    return (<div className="tagbox">
        {/* <input type="button" name={name}> */}
            <input type="checkbox" name={name} onClick={onClick} /> {name[0].toUpperCase() + name.slice(1)}
        {/* </input> */}
    </div>)
}
