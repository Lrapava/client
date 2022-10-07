import React from "react";
import { Link } from "react-router-dom";
import '../css/thumbnail.css'

export default function Thumbnail({id, name, img, tags, authors}) {
    return (
        <div className="thumbnail">
            <Link className="thumbnail--link" to={`/project/${id}`}>
                <div className="thumbnail--image" style={{backgroundImage: `url("${window.location.origin}${process.env.PUBLIC_URL}/projects/${id}/${img}")`}}></div>
                <div className="thumbnail--textbox">
                    <h3>{name}</h3>
                    <p className="thumbnail--tags"> { tags.map(tag => "#"+tag+" ") } </p>
                    <p className="thumbnail--authors"> { authors.map(author => author+" ")} </p>
                </div>
            </Link>
        </div>
    )
}
