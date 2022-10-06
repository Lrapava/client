import React, { useState, useEffect } from "react";
import '../css/search.css'

import Thumbnail from '../components/Thumbnail'
import Tagbox from '../components/Tagbox'


export default function Search({ database }) {
    
    let tagSet = ["math", "physics", "chemistry", "biology", "geography", "art", "civic education", "history", "georgian", "english", "russian", "event"];
    tagSet.sort();

    const [searchData, setSearchData] = useState([database, [], tagSet]);
    // const [searchData, setSearchData] = useState([[],[],[]]);

    useEffect(() => {
        fetch("http://localhost:3000/db.json")
        .then(res => res.json())
        .then(
            (result) => {
                setSearchData(prevData => [result, prevData[1], tagSet])
            }
        )
    }, [])

    function handleTags(tag) {
        if (searchData[1].includes(tag)) 
            setSearchData(prevData => [prevData[0], prevData[1].filter(element => element != tag), prevData[2]])
        else 
            setSearchData(prevData => [prevData[0], [tag, ...prevData[1]], prevData[2]])
    }

    return (
        <div>
            <div className="thumbnailGrid">
                <div className="searchOptions">
                    <h2>Select tags</h2>
                    <div className="searchOptions--tags">
                        {
                            searchData[2].map((tag, index) => <Tagbox key={index} name={tag} onChange={handleTags}/>)
                        }
                    </div>
                </div>
                {
                    searchData[0].filter((project) => {
                        let includesAllTags = true;
                        searchData[1].forEach(tag => {
                            includesAllTags = includesAllTags && (project.tags.includes(tag));
                        });
                        return includesAllTags;
                    }).map(Element => <Thumbnail 
                        key={Element.id} 
                        id={Element.id} 
                        name={Element.name} 
                        img={Element.img} 
                        tags={Element.tags} 
                        authors={Element.authors}
                    />)
                }
            </div>
        </div>
    )
}
